import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, PlusCircle, Loader2 } from "lucide-react";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import { getSocket } from "../sockets/socketClient";
import { useUser } from "../context/UserContext";
import { useRoom } from "../context/RoomContext";
import "./LobbyPage.scss";

function LobbyPage() {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [isCreating, setIsCreating] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useUser();
  const { setRoom } = useRoom();

  const handleCreateRoom = () => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError("");

    const socket = getSocket();

    socket.once("room:created", ({ room, user }: any) => {
      setUser(user);
      setRoom(room);
      setLoading(false);
      navigate(`/room/${room._id}`);
    });

    socket.once("error", ({ message }: any) => {
      setError(message);
      setLoading(false);
    });

    socket.emit("room:create", { username: username.trim() });
  };

  const handleJoinRoom = () => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    if (!roomCode.trim()) {
      setError("Please enter a room code");
      return;
    }

    setLoading(true);
    setError("");

    const socket = getSocket();

    socket.once("room:joined", ({ room, user }: any) => {
      setUser(user);
      setRoom(room);
      setLoading(false);
      navigate(`/room/${room._id}`);
    });

    socket.once("error", ({ message }: any) => {
      setError(message);
      setLoading(false);
    });

    socket.emit("room:join", { roomCode: roomCode.trim().toUpperCase(), username: username.trim() });
  };

  return (
    <>
      <Hyperspeed />
      <div className="lobby-page">
        <div className="lobby-card">
        <div className="tabs">
          <button
            className={`tab ${isCreating ? "active" : ""}`}
            onClick={() => {
              setIsCreating(true);
              setError("");
            }}
          >
            <PlusCircle className="tab-icon" />
            <span>Host Game</span>
          </button>
          <button
            className={`tab ${!isCreating ? "active" : ""}`}
            onClick={() => {
              setIsCreating(false);
              setError("");
            }}
          >
            <LogIn className="tab-icon" />
            <span>Join Game</span>
          </button>
        </div>

        <div className="form">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            maxLength={20}
          />

          {!isCreating && (
            <input
              type="text"
              placeholder="Enter room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              className="input"
              maxLength={5}
            />
          )}

          {error && <div className="error">{error}</div>}

          <button
            className="submit-btn"
            onClick={isCreating ? handleCreateRoom : handleJoinRoom}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="btn-icon spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                {isCreating ? <PlusCircle className="btn-icon" /> : <LogIn className="btn-icon" />}
                <span>{isCreating ? "Create Room" : "Join Room"}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LobbyPage;
