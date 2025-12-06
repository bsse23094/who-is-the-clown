import { IRound } from "../models/Round";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../config/env";

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
];

function getRandomRoast(): string {
  return ROASTS[Math.floor(Math.random() * ROASTS.length)];
}

/**
 * AI judge using Google Gemini
 */
async function judgeWithAI(round: IRound): Promise<JudgeResult> {
  if (!env.GEMINI_API_KEY) {
    console.warn("⚠️  GEMINI_API_KEY not set, falling back to logic judge");
    return judgeWithLogic(round);
  }

  try {
    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const answersText = round.answers
      .map((a, i) => `Answer ${i + 1}: "${a.text}"`)
      .join("\n");

    const prompt = `You are judging a comedy game called "Who's the Clown?". The prompt was: "${round.prompt}"

Here are the answers:
${answersText}

Pick the WORST answer (most ridiculous, inappropriate, or unfunny) and explain why in a short, witty roast (max 100 characters).

Respond ONLY with a JSON object in this exact format:
{"answerIndex": 0, "roast": "Your roast here"}

The answerIndex should be 0 for Answer 1, 1 for Answer 2, etc.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from response
    const jsonMatch = text.match(/\{[^}]+\}/);
    if (!jsonMatch) {
      throw new Error("Invalid AI response format");
    }

    const aiResult = JSON.parse(jsonMatch[0]);
    const clownIndex = aiResult.answerIndex;

    if (clownIndex < 0 || clownIndex >= round.answers.length) {
      throw new Error("Invalid answer index from AI");
    }

    return {
      clownUserId: round.answers[clownIndex].user.toString(),
      method: "ai",
      roast: aiResult.roast || getRandomRoast(),
    };
  } catch (error) {
    console.error("❌ AI judge error:", error);
    console.log("⚠️  Falling back to logic judge");
    return judgeWithLogic(round);
  }
}

/**
 * Logic-based judge (longer answer loses)
 */
function judgeWithLogic(round: IRound): JudgeResult {
  if (round.answers.length < 2) {
    throw new Error("Not enough answers to judge");
  }

  let maxLength = 0;
  let clownUserId = round.answers[0].user.toString();

  for (const answer of round.answers) {
    if (answer.text.length > maxLength) {
      maxLength = answer.text.length;
      clownUserId = answer.user.toString();
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
function judgeWithRandom(round: IRound): JudgeResult {
  if (round.answers.length < 2) {
    throw new Error("Not enough answers to judge");
  }

  const randomIndex = Math.floor(Math.random() * round.answers.length);
  const clownUserId = round.answers[randomIndex].user.toString();

  return {
    clownUserId,
    method: "random",
    roast: getRandomRoast(),
  };
}

/**
 * Main judge function - routes to appropriate judge based on mode
 */
export async function judge(round: IRound, mode?: string): Promise<JudgeResult> {
  const judgeMode = mode || env.JUDGE_MODE;

  console.log(`🎯 Judging with mode: ${judgeMode}`);

  switch (judgeMode) {
    case "ai":
      return await judgeWithAI(round);
    case "random":
      return judgeWithRandom(round);
    case "logic":
      return judgeWithLogic(round);
    case "vote":
      // Voting handled separately in socket handlers
      throw new Error("Vote mode requires separate handling");
    default:
      console.warn(`⚠️  Unknown judge mode: ${judgeMode}, using logic`);
      return judgeWithLogic(round);
  }
}
