import { useState, useEffect } from "react";
import "./AnswerForm.scss";

interface AnswerFormProps {
  prompt: string;
  timer: number;
  onSubmit: (answer: string) => void;
}

function AnswerForm({ prompt, timer, onSubmit }: AnswerFormProps) {
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(timer);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim() || submitted) return;

    onSubmit(answer.trim());
    setSubmitted(true);
  };

  return (
    <div className="answer-form">
      <div className="timer">
        <div className="timer-circle" style={{ "--progress": timeLeft / timer } as any}>
          <span>{timeLeft}s</span>
        </div>
      </div>

      <h3 className="prompt">{prompt}</h3>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            className="answer-input"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            maxLength={200}
            rows={4}
            autoFocus
          />
          <div className="char-count">{answer.length}/200</div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!answer.trim()}
          >
            Submit Answer
          </button>
        </form>
      ) : (
        <div className="submitted">
          <div className="check-icon">✓</div>
          <p>Answer submitted!</p>
          <p className="wait">Waiting for other players...</p>
        </div>
      )}
    </div>
  );
}

export default AnswerForm;
