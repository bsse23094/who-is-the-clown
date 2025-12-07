import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useRoom } from "../context/RoomContext";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import { Flag, Users } from "lucide-react";
import "./LobbyPage.scss";

const API_URL = "https://who-is-the-clown.bsse23094.workers.dev/api";

export default function RacingLobbyPage() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { setRoom } = useRoom();

  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"create" | "join">("create");

  const handleCreateRoom = async () => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/racing/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to create racing room");
      }

      const data = await response.json();

      // Set user and room data
      setUser({ _id: data.userId, username: data.username });
      setRoom({
        _id: data.roomCode,
        code: data.roomCode,
        players: [{ _id: data.userId, username: data.username }],
      });

      setLoading(false);
      navigate(`/room/racing/${data.roomCode}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleJoinRoom = async () => {
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

    try {
      const userId =
        Math.random().toString(36).substring(2) + Date.now().toString(36);

      // Set user and room data
      setUser({ _id: userId, username: username.trim() });
      setRoom({
        _id: roomCode.trim().toUpperCase(),
        code: roomCode.trim().toUpperCase(),
        players: [],
      });

      setLoading(false);
      navigate(`/room/racing/${roomCode.trim().toUpperCase()}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Hyperspeed />
      <div className="lobby-page">
        <div className="lobby-card">
          <div className="lobby-header">
            <div className="header-icon-wrapper">
              <Flag size={48} />
            </div>
            <h1 className="lobby-title">Hyper Racing</h1>
            <p className="lobby-subtitle">Real-time multiplayer racing</p>
          </div>

          <div className="tabs">
            <button
              className={`tab ${activeTab === "create" ? "active" : ""}`}
              onClick={() => setActiveTab("create")}
            >
              Create Room
            </button>
            <button
              className={`tab ${activeTab === "join" ? "active" : ""}`}
              onClick={() => setActiveTab("join")}
            >
              Join Room
            </button>
          </div>

          <div className="form">
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="input"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                maxLength={20}
                autoComplete="off"
              />
            </div>

            {activeTab === "create" ? (
              <>
                <div className="form-info-text">
                  <Users size={16} />
                  <span>2-8 players per race</span>
                </div>

                <button
                  className="submit-btn"
                  onClick={handleCreateRoom}
                  disabled={loading}
                >
                  <span>{loading ? "Creating..." : "Create Racing Room"}</span>
                </button>
              </>
            ) : (
              <>
                <div className="input-wrapper">
                  <label htmlFor="roomCode">Room Code</label>
                  <input
                    id="roomCode"
                    className="input"
                    type="text"
                    placeholder="Enter 5-letter code"
                    value={roomCode}
                    onChange={(e) =>
                      setRoomCode(e.target.value.toUpperCase())
                    }
                    disabled={loading}
                    maxLength={5}
                    autoComplete="off"
                  />
                </div>

                <button
                  className="submit-btn"
                  onClick={handleJoinRoom}
                  disabled={loading}
                >
                  <span>{loading ? "Joining..." : "Join Racing Room"}</span>
                </button>
              </>
            )}

            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
