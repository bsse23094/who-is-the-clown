import mongoose from "mongoose";
import { RoundModel } from "./models/Round.js";
import { judge } from "./services/judgeService.js";
import { env } from "./config/env.js";

async function testAIJudge() {
  console.log("🧪 Testing Gemini AI Judge\n");
  console.log(`API Key configured: ${env.GEMINI_API_KEY ? "✓ Yes" : "✗ No"}\n`);

  if (!env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY not set in .env file");
    process.exit(1);
  }

  try {
    // Connect to database
    await mongoose.connect(env.MONGO_URI);
    console.log("✓ Connected to MongoDB\n");

    // Create a mock round
    const mockRound = new RoundModel({
      room: new mongoose.Types.ObjectId(),
      prompt: "Worst thing to say on a first date",
      answers: [
        {
          user: new mongoose.Types.ObjectId(),
          text: "I still live with my mom and I'm 45 years old. Also, I collect toenail clippings.",
        },
        {
          user: new mongoose.Types.ObjectId(),
          text: "Nice weather today.",
        },
      ],
      judgeMethod: "ai",
    });

    console.log("📝 Test Prompt:", mockRound.prompt);
    console.log("\n📋 Answers:");
    mockRound.answers.forEach((ans, i) => {
      console.log(`  ${i + 1}. "${ans.text}"`);
    });

    console.log("\n🤖 Calling Gemini AI judge...\n");

    const result = await judge(mockRound, "ai");

    console.log("✅ AI Judge Result:");
    console.log(`  Method: ${result.method}`);
    console.log(`  Clown User ID: ${result.clownUserId}`);
    console.log(`  Roast: "${result.roast}"`);

    const clownIndex = mockRound.answers.findIndex(
      (a) => a.user.toString() === result.clownUserId
    );
    console.log(`  \n  Winner (Clown): Answer #${clownIndex + 1}`);

    console.log("\n🎉 AI Judge test completed successfully!");
  } catch (error: any) {
    console.error("\n❌ AI Judge test failed:");
    console.error(error.message);
    if (error.stack) {
      console.error("\nStack trace:");
      console.error(error.stack);
    }
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

// Run test
testAIJudge();
