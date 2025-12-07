// Judge service for Cloudflare Workers (serverless)

interface Answer {
  userId: string;
  text: string;
}

interface Vote {
  voterId: string;
  votedForId: string;
}

interface JudgeResult {
  clownUserId: string;
  method: "ai" | "logic" | "random" | "vote";
  roast: string;
}

const ROASTS = [
  "That answer was impressively unnecessary.",
  "Bold choice. Terrible, but bold.",
  "Did you think about that answer, or just... hope?",
  "I've seen worse. Actually, no I haven't.",
  "Your answer committed crimes against comedy.",
  "That's not even wrong, it's just confusing.",
  "I respect the confidence. Not the answer, just the confidence.",
  "That answer aged poorly immediately.",
  "You really went there, huh? Brave. Foolish, but brave.",
  "I admire your dedication to chaos.",
  "Comedy gold? More like comedy mold.",
  "That's one way to lose friends and alienate people.",
  "Your answer deserves its own crime documentary.",
  "I'm not mad, just disappointed... and confused.",
  "You've successfully lowered the bar. Congratulations.",
];

function getRandomRoast(): string {
  return ROASTS[Math.floor(Math.random() * ROASTS.length)];
}

/**
 * AI judge using Google Gemini
 */
export async function judgeWithAI(
  answers: Answer[], 
  prompt: string, 
  apiKey: string
): Promise<JudgeResult> {
  if (!apiKey) {
    console.warn("⚠️  GEMINI_API_KEY not set, falling back to logic judge");
    return judgeWithLogic(answers);
  }

  try {
    const answersText = answers
      .map((a, i) => `Answer ${i + 1}: "${a.text}"`)
      .join("\n");

    const judgePrompt = `You are judging a comedy game called "Who's the Clown?". The prompt was: "${prompt}"

Here are the answers:
${answersText}

Pick the WORST answer (most ridiculous, inappropriate, or unfunny) and explain why in a short, witty roast (max 100 characters).

Respond ONLY with a JSON object in this exact format:
{"answerIndex": 0, "roast": "Your roast here"}

The answerIndex should be 0 for Answer 1, 1 for Answer 2, etc.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: judgePrompt
            }]
          }]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json() as any;
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Extract JSON from response
    const jsonMatch = text.match(/\{[^}]+\}/);
    if (!jsonMatch) {
      throw new Error("Invalid AI response format");
    }

    const aiResult = JSON.parse(jsonMatch[0]);
    const clownIndex = aiResult.answerIndex;

    if (clownIndex < 0 || clownIndex >= answers.length) {
      throw new Error("Invalid answer index from AI");
    }

    return {
      clownUserId: answers[clownIndex].userId,
      method: "ai",
      roast: aiResult.roast || getRandomRoast(),
    };
  } catch (error) {
    console.error("❌ AI judge error:", error);
    console.log("⚠️  Falling back to logic judge");
    return judgeWithLogic(answers);
  }
}

/**
 * Logic-based judge (longer answer loses)
 */
export function judgeWithLogic(answers: Answer[]): JudgeResult {
  if (answers.length < 2) {
    throw new Error("Not enough answers to judge");
  }

  let maxLength = 0;
  let clownUserId = answers[0].userId;

  for (const answer of answers) {
    if (answer.text.length > maxLength) {
      maxLength = answer.text.length;
      clownUserId = answer.userId;
    }
  }

  return {
    clownUserId,
    method: "logic",
    roast: getRandomRoast(),
  };
}

/**
 * Random judge (picks random answer)
 */
export function judgeWithRandom(answers: Answer[]): JudgeResult {
  if (answers.length < 2) {
    throw new Error("Not enough answers to judge");
  }

  const randomIndex = Math.floor(Math.random() * answers.length);
  const clownUserId = answers[randomIndex].userId;

  return {
    clownUserId,
    method: "random",
    roast: getRandomRoast(),
  };
}

/**
 * Majority voting - tally votes and pick the person with most votes
 */
export function tallyVotes(votes: Vote[], answers: Answer[]): JudgeResult {
  if (votes.length === 0) {
    throw new Error("No votes to tally");
  }

  // Count votes for each user
  const voteCount = new Map<string, number>();
  
  for (const vote of votes) {
    const current = voteCount.get(vote.votedForId) || 0;
    voteCount.set(vote.votedForId, current + 1);
  }

  // Find user with most votes
  let maxVotes = 0;
  let clownUserId = answers[0].userId;

  for (const [userId, count] of voteCount.entries()) {
    if (count > maxVotes) {
      maxVotes = count;
      clownUserId = userId;
    }
  }

  // If there's a tie, pick randomly among tied players
  const tiedPlayers = Array.from(voteCount.entries())
    .filter(([_, count]) => count === maxVotes)
    .map(([userId]) => userId);

  if (tiedPlayers.length > 1) {
    clownUserId = tiedPlayers[Math.floor(Math.random() * tiedPlayers.length)];
  }

  const roasts = [
    `The people have spoken! And they chose you with ${maxVotes} vote${maxVotes > 1 ? 's' : ''}.`,
    `Democracy in action: ${maxVotes} vote${maxVotes > 1 ? 's' : ''} against you!`,
    `By popular demand (${maxVotes} vote${maxVotes > 1 ? 's' : ''}), you're the clown!`,
    `${maxVotes} ${maxVotes > 1 ? 'people' : 'person'} agreed: worst answer ever.`,
    `Majority rules! And the majority thinks you're ridiculous.`,
  ];

  return {
    clownUserId,
    method: "vote",
    roast: roasts[Math.floor(Math.random() * roasts.length)],
  };
}
