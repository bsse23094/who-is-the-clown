import { useState } from "react";
import { Vote, CheckCircle, Lightbulb } from "lucide-react";
import "./VotingView.scss";

interface VotingViewProps {
  answers: Array<{ userId: string; text: string }>;
  currentUserId: string;
  onVote: (votedForId: string) => void;
  votedUserIds: string[];
}

function VotingView({ answers, currentUserId, onVote, votedUserIds }: VotingViewProps) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const hasVoted = votedUserIds.includes(currentUserId);

  // Shuffle answers to make voting anonymous
  const [shuffledAnswers] = useState(() => {
    const answersWithIndex = answers.map((answer, index) => ({
      ...answer,
      originalIndex: index
    }));
    return answersWithIndex.sort(() => Math.random() - 0.5);
  });

  const handleVote = (userId: string) => {
    if (userId === currentUserId) return; // Can't vote for yourself
    if (hasVoted) return; // Already voted
    
    setSelectedUserId(userId);
    onVote(userId);
  };

  return (
    <div className="voting-view">
      <div className="voting-header">
        <h2>
          <Vote className="header-icon" />
          Vote for the Worst Answer
        </h2>
        <p className="voting-subtitle">
          {hasVoted 
            ? "Waiting for other players..." 
            : "Pick the answer you think is the worst"}
        </p>
        <div className="vote-counter">
          {votedUserIds.length} / {answers.length} voted
        </div>
      </div>

      <div className="answers-grid">
        {shuffledAnswers.map((answer, index) => {
          const isOwnAnswer = answer.userId === currentUserId;
          const isSelected = selectedUserId === answer.userId;
          
          return (
            <button
              key={index}
              className={`answer-card ${isOwnAnswer ? "own-answer" : ""} ${isSelected ? "selected" : ""} ${hasVoted ? "disabled" : ""}`}
              onClick={() => handleVote(answer.userId)}
              disabled={isOwnAnswer || hasVoted}
            >
              <div className="answer-number">Answer {index + 1}</div>
              <div className="answer-text">{answer.text}</div>
              {isOwnAnswer && (
                <div className="own-badge">Your Answer</div>
              )}
              {isSelected && (
                <div className="voted-badge">
                  <CheckCircle size={14} />
                  Voted
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="voting-instructions">
        <p>
          <Lightbulb size={16} className="instruction-icon" />
          Can't vote for your own answer. Answers are shown in random order.
        </p>
      </div>
    </div>
  );
}

export default VotingView;
