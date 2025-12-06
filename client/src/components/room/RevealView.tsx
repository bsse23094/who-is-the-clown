import "./RevealView.scss";

interface RevealViewProps {
  result: {
    clownUser: string;
    roast: string;
    answers: Array<{ user: any; text: string }>;
    method: string;
  };
  players: any[];
  currentUserId: string;
}

function RevealView({ result, players, currentUserId }: RevealViewProps) {
  const clownPlayer = players.find((p) => p._id === result.clownUser);
  const isYouTheClown = result.clownUser === currentUserId;

  return (
    <div className="reveal-view">
      <div className={`clown-reveal ${isYouTheClown ? "you" : ""}`}>
        <h2>🤡 The Clown Is...</h2>
        <div className="clown-name">
          {isYouTheClown ? "YOU!" : clownPlayer?.username || "Unknown"}
        </div>
        <div className="roast">"{result.roast}"</div>
      </div>

      <div className="answers-section">
        <h3>All Answers:</h3>
        <div className="answers-list">
          {result.answers.map((ans: any, idx: number) => {
            const player = players.find((p) => p._id === ans.user.toString());
            const isClown = ans.user.toString() === result.clownUser;

            return (
              <div
                key={idx}
                className={`answer-card ${isClown ? "clown" : ""}`}
              >
                <div className="player-name">
                  {player?.username || "Unknown"}
                  {isClown && " 🤡"}
                </div>
                <div className="answer-text">{ans.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RevealView;
