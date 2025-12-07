import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useRoom } from "../context/RoomContext";
import { getSocket } from "../sockets/cloudflareSocket";
import RacingScene from "../components/Racing/RacingScene";
import { Flag, Users, Crown, LogOut } from "lucide-react";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import "./RoomPage.scss";

interface Player {
  id: string;
  username: string;
  lap: number;
  isReady: boolean;
  finishTime?: number;
}

interface GameState {
  code: string;
  hostId: string;
  status: "waiting" | "countdown" | "racing" | "finished";
  players: Player[];
  laps: number;
}

export default function RacingRoomPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { room, setRoom } = useRoom();

  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [standings, setStandings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !room || !roomId) {
      navigate("/lobby/racing");
      return;
    }

    console.log('🏁 RacingRoomPage: Setting up WebSocket connection for room', roomId);
    const socket = getSocket();
    
    // Connect to racing room via WebSocket
    socket.connect(`racing/${roomId}`);

    // Wait a bit for connection to establish, then join
    const joinTimer = setTimeout(() => {
      socket.emit("join", { username: user.username || "Racer", playerId: user._id });
    }, 100);

    socket.on("joined", (data: any) => {
      console.log("Joined racing room:", data);
      setLoading(false);
      if (data.room) {
        // Update room state
        setRoom({
          ...room,
          ...data.room,
          _id: room?._id || data.room.code,
        });
        setGameState(data.room);
        setPlayers(data.room.players || []);
      }
    });

    socket.on("player_joined", (data: any) => {
      console.log("Player joined:", data);
      if (data.players) {
        setPlayers(data.players);
      }
    });

    socket.on("state_update", (data: any) => {
      console.log("State update:", data);
      if (data.state) {
        setGameState(data.state);
        setPlayers(data.state.players || []);
      }
    });

    socket.on("player_ready", (data: any) => {
      console.log("Player ready:", data);
    });

    socket.on("countdown_start", (data: any) => {
      console.log("Countdown started:", data);
      setCountdown(data.countdown);

      // Countdown animation
      let count = data.countdown;
      const countdownInterval = setInterval(() => {
        count--;
        setCountdown(count);
        if (count <= 0) {
          clearInterval(countdownInterval);
          setCountdown(null);
        }
      }, 1000);
    });

    socket.on("round_started", (data: any) => {
      console.log("Race started:", data);
      setCountdown(null);
      if (gameState) {
        setGameState({ ...gameState, status: "racing" });
      }
    });

    socket.on("lap_complete", (data: any) => {
      console.log(`Player ${data.playerId} completed lap ${data.lap}`);
    });

    socket.on("player_finished", (data: any) => {
      console.log(`Player ${data.playerId} finished in ${data.finishTime}ms`);
    });

    socket.on("round_result", (data: any) => {
      console.log("Race finished:", data);
      setStandings(data.standings || []);
      if (gameState) {
        setGameState({ ...gameState, status: "finished" });
      }
    });

    socket.on("error", (data: any) => {
      console.error("Socket error:", data);
      setError(data.message || "An error occurred");
      setLoading(false);
    });

    return () => {
      console.log('🏁 RacingRoomPage: Cleaning up WebSocket connection');
      clearTimeout(joinTimer);
      // Don't disconnect on cleanup in dev mode
      // socket.disconnect();
    };
  }, [user, room, roomId, navigate]);

  const toggleReady = () => {
    const socket = getSocket();
    if (!socket || !user) return;

    const newReadyState = !isReady;
    setIsReady(newReadyState);

    socket.emit("ready", {
      playerId: user._id,
      ready: newReadyState,
    });
  };

  const startRace = () => {
    const socket = getSocket();
    if (!socket || !user) return;

    socket.emit("start_race", {
      playerId: user._id,
    });
  };

  const leaveRoom = () => {
    const socket = getSocket();
    if (socket && user) {
      socket.emit("leave", {
        playerId: user._id,
      });
    }
    navigate("/lobby/racing");
  };

  if (!user || !room) {
    return null;
  }

  const isHost = user._id === gameState?.hostId;
  const allReady =
    players.every((p) => p.isReady) &&
    players.length >= 2;

  return (
    <>
      <Hyperspeed />
      <div className="room-page racing">
        {/* Loading State */}
        {loading && !gameState && (
          <div className="lobby-overlay">
            <div className="lobby-container">
              <div className="lobby-header">
                <Flag size={40} />
                <h1>Connecting...</h1>
                <p>Joining room {roomId}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="lobby-overlay">
            <div className="lobby-container">
              <div className="lobby-header">
                <h1>Error</h1>
                <p className="error-message">{error}</p>
              </div>
              <div className="lobby-actions">
                <button className="btn-primary" onClick={() => navigate("/lobby/racing")}>
                  Back to Lobby
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Waiting Lobby */}
        {gameState?.status === "waiting" && (
          <div className="lobby-overlay">
            <div className="lobby-container">
              <div className="lobby-header">
                <Flag size={40} />
                <h1>Room {gameState.code}</h1>
                <p>
                  {gameState.laps} laps
                </p>
              </div>

              <div className="players-list">
                <h3>
                  <Users size={20} />
                  Players ({players.length}/8)
                </h3>
                {players.map((player) => (
                  <div key={player.id} className="player-item">
                    <span>
                      {player.id === gameState.hostId && (
                        <Crown size={16} className="host-icon" />
                      )}
                      {player.username}
                    </span>
                    <span className={player.isReady ? "ready" : "not-ready"}>
                      {player.isReady ? "✓ Ready" : "Not Ready"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="lobby-actions">
                <button className="btn-secondary" onClick={toggleReady}>
                  {isReady ? "Not Ready" : "Ready Up"}
                </button>

                {isHost && (
                  <button
                    className="btn-primary"
                    onClick={startRace}
                    disabled={!allReady}
                  >
                    Start Race
                  </button>
                )}

                <button className="btn-leave" onClick={leaveRoom}>
                  <LogOut size={16} />
                  Leave
                </button>
              </div>

              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        )}

        {/* Countdown Overlay */}
        {countdown !== null && countdown > 0 && (
          <div className="countdown-overlay">
            <div className="countdown-number">{countdown}</div>
          </div>
        )}

        {/* Racing Canvas */}
        {gameState && gameState.status === "racing" && (
          <RacingScene
            playerId={user._id || ""}
            gameState={gameState}
          />
        )}

        {/* Race HUD */}
        {gameState?.status === "racing" && (
          <div className="race-hud">
            <div className="hud-lap">
              Lap{" "}
              {players.find((p) => p.id === user._id)?.lap || 0}/
              {gameState.laps}
            </div>
            <div className="hud-position">
              Position:{" "}
              {players
                .sort((a, b) => b.lap - a.lap)
                .findIndex((p) => p.id === user._id) + 1}
              /{players.length}
            </div>
          </div>
        )}

        {/* Race Finished */}
        {gameState?.status === "finished" && standings.length > 0 && (
          <div className="results-overlay">
            <div className="results-container">
              <h1>Race Finished!</h1>
              <div className="standings">
                {standings.map((standing, index) => (
                  <div key={standing.playerId} className="standing-item">
                    <span className="position">{index + 1}</span>
                    <span className="username">{standing.username}</span>
                    <span className="time">
                      {((standing.finishTime || 0) / 1000).toFixed(2)}s
                    </span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={leaveRoom}>
                Back to Lobby
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
