import { RoundModel, IRound } from "../models/Round";
import { RoomModel } from "../models/Room";
import { getRandomPrompt } from "../utils/prompts";
import * as judgeService from "./judgeService";
import { AppError } from "../utils/errors";
import { env } from "../config/env";

export async function startRound(roomId: string, judgeMode?: string) {
  const room = await RoomModel.findById(roomId);
  if (!room) throw new AppError("Room not found", 404);

  if (room.players.length < 2) {
    throw new AppError("Need at least 2 players to start a round");
  }

  const prompt = getRandomPrompt();
  const mode = judgeMode || env.JUDGE_MODE;
  
  const round = await RoundModel.create({
    room: roomId,
    prompt,
    answers: [],
    votes: [],
    judgeMethod: mode as any,
  });

  await RoomModel.findByIdAndUpdate(roomId, {
    currentRound: round._id,
    status: "in_progress",
  });

  return round;
}

export async function submitAnswer(
  roundId: string,
  userId: string,
  text: string
) {
  const round = await RoundModel.findById(roundId).populate("room");
  if (!round) throw new AppError("Round not found", 404);

  if (!text || text.trim().length === 0) {
    throw new AppError("Answer cannot be empty");
  }

  // Check if user already answered
  const already = round.answers.find(
    (a: any) => a.user.toString() === userId.toString()
  );

  if (already) {
    throw new AppError("You have already submitted an answer");
  }

  round.answers.push({ user: userId as any, text: text.trim() });
  await (round as any).save();

  const room = round.room as any;
  const allAnswered = round.answers.length >= room.players.length;

  return { round, allAnswered };
}

export async function judgeRound(round: IRound) {
  const result = await judgeService.judge(round, round.judgeMethod);

  round.clownUser = result.clownUserId as any;
  round.judgeMethod = result.method;
  await (round as any).save();

  return {
    roundId: (round as any).id,
    clownUser: result.clownUserId,
    method: result.method,
    roast: result.roast,
    answers: round.answers,
  };
}

export async function submitVote(
  roundId: string,
  voterId: string,
  votedForId: string
) {
  const round = await RoundModel.findById(roundId);
  if (!round) throw new AppError("Round not found", 404);

  // Check if user already voted
  const alreadyVoted = round.votes.find(
    (v: any) => v.voter.toString() === voterId
  );

  if (alreadyVoted) {
    throw new AppError("You have already voted");
  }

  // Can't vote for yourself
  if (voterId === votedForId) {
    throw new AppError("You cannot vote for yourself");
  }

  round.votes.push({ voter: voterId as any, votedFor: votedForId as any });
  await (round as any).save();

  return round;
}

export async function tallyVotes(round: IRound) {
  if (round.votes.length === 0) {
    throw new AppError("No votes to tally");
  }

  // Count votes for each user
  const voteCounts = new Map<string, number>();
  
  for (const vote of round.votes) {
    const votedForId = vote.votedFor.toString();
    voteCounts.set(votedForId, (voteCounts.get(votedForId) || 0) + 1);
  }

  // Find user with most votes
  let maxVotes = 0;
  let clownUserId = "";

  for (const [userId, count] of voteCounts.entries()) {
    if (count > maxVotes) {
      maxVotes = count;
      clownUserId = userId;
    }
  }

  // If tie, pick random from tied users
  const tiedUsers = Array.from(voteCounts.entries())
    .filter(([, count]) => count === maxVotes)
    .map(([userId]) => userId);

  if (tiedUsers.length > 1) {
    clownUserId = tiedUsers[Math.floor(Math.random() * tiedUsers.length)];
  }

  round.clownUser = clownUserId as any;
  await (round as any).save();

  const roasts = [
    "Democracy has spoken. You're the clown.",
    "The people have decided. It's you.",
    "Majority rules, and they rule against you.",
    "Your peers have voted. You lose.",
  ];

  return {
    roundId: (round as any).id,
    clownUser: clownUserId,
    method: "vote" as const,
    roast: roasts[Math.floor(Math.random() * roasts.length)],
    answers: round.answers,
    voteCount: maxVotes,
  };
}

export async function getRoundById(roundId: string) {
  const round = await RoundModel.findById(roundId).populate("answers.user");
  if (!round) throw new AppError("Round not found", 404);
  return round;
}
