import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSocket } from "../sockets/socketClient";
import { useUser } from "../context/UserContext";
import { useRoom } from "../context/RoomContext";
import PromptView from "../components/room/PromptView";
import AnswerForm from "../components/room/AnswerForm";
import RevealView from "../components/room/RevealView";
import Scoreboard from "../components/room/Scoreboard";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import "./RoomPage.scss";

function RoomPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { room, setRoom } = useRoom();

  const [gameState, setGameState] = useState<
    "waiting" | "prompt" | "answering" | "reveal" | "scoreboard"
  >("waiting");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [currentRoundId, setCurrentRoundId] = useState("");
  const [timer, setTimer] = useState(30);
  const [result, setResult] = useState<any>(null);
  const [stats, setStats] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>(room?.players || []);

  useEffect(() => {
    if (!user || !room) {
      navigate("/lobby");
      return;
    }

    const socket = getSocket();

    socket.on("room:joined", ({ room: updatedRoom }: any) => {
      setRoom(updatedRoom);
      setPlayers(updatedRoom.players);
    });

    socket.on("round:started", ({ roundId, prompt, timer: t }: any) => {
      setCurrentRoundId(roundId);
      setCurrentPrompt(prompt);
      setTimer(t);
      setGameState("prompt");

      setTimeout(() => {
        setGameState("answering");
      }, 3000);
    });

    socket.on("round:result", (data: any) => {
      console.log('Round result received:', data);
      setResult(data);
      setGameState("reveal");

      setTimeout(() => {
        setGameState("scoreboard");
      }, 5000);
    });

    socket.on("room:scoreboard", ({ stats: s }: any) => {
      console.log('Scoreboard update received:', s);
      setStats(s);
    });

    // Request initial scoreboard when room loads
    if (roomId) {
      socket.emit("room:getStats", { roomId });
    }

    return () => {
      socket.off("room:joined");
      socket.off("round:started");
      socket.off("round:result");
      socket.off("room:scoreboard");
    };
  }, [user, room, roomId, navigate, setRoom]);

  const handleStartRound = () => {
    const socket = getSocket();
    socket.emit("round:start", { roomId });
  };

  const handleSubmitAnswer = (answer: string) => {
    const socket = getSocket();
    socket.emit("round:submitAnswer", {
      roomId,
      roundId: currentRoundId,
      userId: user?._id,
      text: answer,
    });
  };

  const handleNextRound = () => {
    setGameState("waiting");
    setResult(null);
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
                <li key={player._id}>{player.username}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="game-area">
          {gameState === "waiting" && (
            <div className="waiting">
              <h2>Waiting for players...</h2>
              <p>At least 2 players needed to start</p>
              {players.length >= 2 && (
                <button className="btn btn-primary" onClick={handleStartRound}>
                  Start Round
                </button>
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
