import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";
import { getSocket } from "../sockets/cloudflareSocket";
import { useUser } from "../context/UserContext";
import { useRoom } from "../context/RoomContext";
import PromptView from "../components/room/PromptView";
import AnswerForm from "../components/room/AnswerForm";
import RevealView from "../components/room/RevealView";
import VotingView from "../components/room/VotingView";
import Scoreboard from "../components/room/Scoreboard";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import "./RoomPage.scss";

function RoomPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { room, setRoom } = useRoom();

  const [gameState, setGameState] = useState<
    "waiting" | "prompt" | "answering" | "voting" | "reveal" | "scoreboard"
  >("waiting");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [currentRoundId, setCurrentRoundId] = useState("");
  const [timer, setTimer] = useState(30);
  const [result, setResult] = useState<any>(null);
  const [stats, setStats] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>(room?.players || []);
  const [answers, setAnswers] = useState<any[]>([]);
  const [votedUserIds, setVotedUserIds] = useState<string[]>([]);
  const [hostId, setHostId] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !room || !roomId) {
      navigate("/lobby");
      return;
    }

    console.log('🎮 RoomPage: Setting up WebSocket connection for room', roomId);
    const socket = getSocket();
    
    // Connect to room via WebSocket
    socket.connect(roomId);

    // Wait a bit for connection to establish, then join
    const joinTimer = setTimeout(() => {
      socket.emit("join", { username: user.username || "Player", userId: user._id });
    }, 100);

    socket.on("joined", (data: any) => {
      console.log("Joined room:", data);
      if (data.room) {
        // Update room but preserve existing _id
        setRoom({
          ...room,
          ...data.room,
          _id: room?._id || data.room.code,
        });
        setPlayers(data.room.players || []);
        setHostId(data.room.hostId || null);
      }
    });

    socket.on("player_joined", (data: any) => {
      console.log("Player joined:", data);
      if (data.players) {
        setPlayers(data.players);
      }
      if (data.hostId) {
        setHostId(data.hostId);
      }
    });

    socket.on("round_started", (data: any) => {
      console.log("Round started:", data);
      setCurrentRoundId(data.roundId);
      setCurrentPrompt(data.prompt);
      setTimer(data.timer || 30);
      setGameState("prompt");
      setAnswers([]);
      setVotedUserIds([]);

      setTimeout(() => {
        setGameState("answering");
      }, 3000);
    });

    socket.on("answer_update", (data: any) => {
      console.log("Answer update:", data);
    });

    socket.on("voting_started", (data: any) => {
      console.log("Voting started:", data);
      setAnswers(data.answers || []);
      setGameState("voting");
    });

    socket.on("vote_update", (data: any) => {
      console.log("Vote update:", data);
      setVotedUserIds(data.votedUserIds || []);
    });

    socket.on("round_result", (data: any) => {
      console.log("Round result:", data);
      setResult(data);
      setGameState("reveal");

      // Update stats from result
      if (data.scoreboard) {
        setStats(data.scoreboard);
      }

      setTimeout(() => {
        setGameState("scoreboard");
      }, 5000);
    });

    socket.on("error", (data: any) => {
      console.error("Socket error:", data);
      alert(data.message || "An error occurred");
    });

    return () => {
      console.log('🎮 RoomPage: Cleaning up WebSocket connection');
      clearTimeout(joinTimer);
      // Don't disconnect on cleanup in dev mode (StrictMode runs effects twice)
      // socket.disconnect();
    };
  }, [user, room, roomId, navigate]);

  const handleStartRound = () => {
    const socket = getSocket();
    socket.emit("start_round", { userId: user?._id, judgeMode: room?.judgeMode || "ai" });
  };

  const handleSubmitAnswer = (answer: string) => {
    const socket = getSocket();
    socket.emit("submit_answer", {
      userId: user?._id,
      text: answer,
    });
  };

  const handleSubmitVote = (votedForId: string) => {
    const socket = getSocket();
    socket.emit("submit_vote", {
      voterId: user?._id,
      votedForId,
    });
  };

  const handleNextRound = () => {
    setGameState("waiting");
    setResult(null);
    setAnswers([]);
    setVotedUserIds([]);
  };

  if (!user || !room) {
    return null;
  }

  return (
    <>
      <Hyperspeed />
      <div className="room-page">
        <div className="room-header">
          <h2>Room Code: {room.code}</h2>
          <div className="players">
            <h3>Players ({players.length}):</h3>
            <ul>
              {players.map((player: any) => (
                <li key={player.id || player._id}>
                  {player.username}
                  {(player.id || player._id) === hostId && (
                    <Crown className="crown-icon" size={16} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="game-area">
          {gameState === "waiting" && (
            <div className="waiting">
              <h2>Waiting for players...</h2>
              <p>At least 2 players needed to start</p>
              {players.length >= 2 && user._id === hostId && (
                <button className="btn btn-primary" onClick={handleStartRound}>
                  Start Round
                </button>
              )}
              {players.length >= 2 && user._id !== hostId && (
                <p className="waiting-host">Waiting for host to start...</p>
              )}
            </div>
          )}

          {gameState === "prompt" && <PromptView prompt={currentPrompt} />}

          {gameState === "answering" && (
            <AnswerForm
              prompt={currentPrompt}
              timer={timer}
              onSubmit={handleSubmitAnswer}
            />
          )}

          {gameState === "voting" && (
            <VotingView
              answers={answers}
              currentUserId={user._id}
              onVote={handleSubmitVote}
              votedUserIds={votedUserIds}
            />
          )}

          {gameState === "reveal" && result && (
            <RevealView
              result={result}
              players={players}
              currentUserId={user._id}
            />
          )}

          {gameState === "scoreboard" && (
            <Scoreboard stats={stats} onNextRound={handleNextRound} />
          )}
        </div>
      </div>
    </>
  );
}

export default RoomPage;
