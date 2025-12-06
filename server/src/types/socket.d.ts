export interface ServerToClientEvents {
  "room:created": (data: { room: any; user: any }) => void;
  "room:joined": (data: { room: any; user: any; players: any[] }) => void;
  "room:updated": (data: { room: any }) => void;
  "round:started": (data: { roundId: string; prompt: string; timer: number }) => void;
  "round:answerUpdate": (data: { roundId: string; answeredUserIds: string[] }) => void;
  "round:complete": (data: { roundId: string; answers: any[] }) => void;
  "round:result": (data: {
    roundId: string;
    clownUser: string;
    method: string;
    roast: string;
    answers: any[];
  }) => void;
  "room:scoreboard": (data: { stats: any }) => void;
  error: (data: { code?: string; message: string }) => void;
}

export interface ClientToServerEvents {
  "room:create": (data: { username: string }) => void;
  "room:join": (data: { roomCode: string; username: string }) => void;
  "round:start": (data: { roomId: string }) => void;
  "round:submitAnswer": (data: {
    roomId: string;
    roundId: string;
    userId: string;
    text: string;
  }) => void;
  "round:vote": (data: { roomId: string; roundId: string; votedUserId: string }) => void;
  "room:leave": (data: { roomId: string }) => void;
}
