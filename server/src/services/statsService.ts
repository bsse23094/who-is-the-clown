import { RoundModel } from "../models/Round";
import { GameStats } from "../types/common";

export async function getRoomStats(roomId: string): Promise<GameStats[]> {
  const rounds = await RoundModel.find({ room: roomId })
    .populate("clownUser")
    .populate("answers.user");

  const statsMap = new Map<string, GameStats>();

  for (const round of rounds) {
    for (const answer of round.answers) {
      const userObj = (answer as any).user;
      const userId = userObj._id ? userObj._id.toString() : answer.user.toString();
      const username = userObj.username || "Unknown";

      if (!statsMap.has(userId)) {
        statsMap.set(userId, {
          userId,
          username,
          clownCount: 0,
          roundsPlayed: 0,
        });
      }

      const stats = statsMap.get(userId)!;
      stats.roundsPlayed++;

      if (round.clownUser && round.clownUser._id) {
        if (round.clownUser._id.toString() === userId) {
          stats.clownCount++;
        }
      } else if (round.clownUser && round.clownUser.toString() === userId) {
        stats.clownCount++;
      }
    }
  }

  return Array.from(statsMap.values()).sort(
    (a, b) => b.clownCount - a.clownCount
  );
}
