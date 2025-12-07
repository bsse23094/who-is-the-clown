import { Sparkles } from "lucide-react";
import "./RevealView.scss";

interface RevealViewProps {
  result: {
    clownUserId: string;
    clownUsername: string;
    roast: string;
    method: string;
    answers?: Array<{ userId: string; text: string }>;
    scoreboard: Array<{ username: string; score: number; clownCount: number }>;
  };
  players: any[];
  currentUserId: string;
}

function RevealView({ result, players, currentUserId }: RevealViewProps) {
  const isYouTheClown = result.clownUserId === currentUserId;

  return (
    <div className="reveal-view">
      <div className={`clown-reveal ${isYouTheClown ? "you" : ""}`}>
        <h2>
          <Sparkles className="header-icon" />
          The Clown Is...
        </h2>
        <div className="clown-name">
          {isYouTheClown ? "YOU!" : result.clownUsername || "Unknown"}
        </div>
        <div className="roast">"{result.roast}"</div>
        <div className="judge-method">Judged by: {result.method}</div>
      </div>

      {result.answers && result.answers.length > 0 && (
        <div className="answers-section">
          <h3>All Answers:</h3>
          <div className="answers-list">
            {result.answers.map((ans: any, idx: number) => {
              const player = players.find((p) => (p.id || p._id) === ans.userId);
              const isClown = ans.userId === result.clownUserId;

              return (
                <div
                  key={idx}
                  className={`answer-card ${isClown ? "clown" : ""}`}
                >
                  <div className="player-name">
                    {player?.username || "Unknown"}
                    {isClown && <Sparkles className="clown-icon" size={16} />}
                  </div>
                  <div className="answer-text">{ans.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default RevealView;
