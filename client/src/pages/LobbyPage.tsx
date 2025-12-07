import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, PlusCircle, Loader2, Bot, Vote } from "lucide-react";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import { useUser } from "../context/UserContext";
import { useRoom } from "../context/RoomContext";
import "./LobbyPage.scss";

const API_URL = import.meta.env.VITE_SERVER_URL || 'https://who-is-the-clown.bsse23094.workers.dev';

function LobbyPage() {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [isCreating, setIsCreating] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [judgeMode, setJudgeMode] = useState<"ai" | "vote">("ai");

  const navigate = useNavigate();
  const { setUser } = useUser();
  const { setRoom } = useRoom();

  const handleCreateRoom = async () => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Create room via HTTP API
      const response = await fetch(`${API_URL}/api/rooms/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim() })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create room');
      }

      const data = await response.json();
      
      // Set user and room data
      setUser({ _id: data.userId, username: data.username });
      setRoom({ 
        _id: data.roomCode, 
        code: data.roomCode,
        judgeMode,
        players: [{ _id: data.userId, username: data.username }]
      });
      
      setLoading(false);
      navigate(`/room/${data.roomCode}`);
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
      const userId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      
      // Set user and room data
      setUser({ _id: userId, username: username.trim() });
      setRoom({ 
        _id: roomCode.trim().toUpperCase(), 
        code: roomCode.trim().toUpperCase(),
        players: []
      });
      
      setLoading(false);
      navigate(`/room/${roomCode.trim().toUpperCase()}`);
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

          {isCreating && (
            <div className="mode-selector">
              <div className="mode-selector-header">
                <h3>Select Judge Mode</h3>
              </div>
              <div className="mode-options">
                <button
                  type="button"
                  className={`mode-option ${judgeMode === "ai" ? "selected" : ""}`}
                  onClick={() => setJudgeMode("ai")}
                >
                  <div className="mode-icon">
                    <Bot size={32} />
                  </div>
                  <div className="mode-content">
                    <div className="mode-title">AI Judge</div>
                    <div className="mode-description">
                      An AI analyzes all answers and picks the worst one with a personalized roast
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  className={`mode-option ${judgeMode === "vote" ? "selected" : ""}`}
                  onClick={() => setJudgeMode("vote")}
                >
                  <div className="mode-icon">
                    <Vote size={32} />
                  </div>
                  <div className="mode-content">
                    <div className="mode-title">Majority Voting</div>
                    <div className="mode-description">
                      Players vote for the worst answer. The one with most votes becomes the clown!
                    </div>
                  </div>
                </button>
              </div>
            </div>
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
