import "./PromptView.scss";

interface PromptViewProps {
  prompt: string;
}

function PromptView({ prompt }: PromptViewProps) {
  return (
    <div className="prompt-view">
      <h2>Get Ready!</h2>
      <div className="prompt-card">
        <p className="prompt-text">{prompt}</p>
      </div>
      <p className="hint">Time to think of your worst answer...</p>
    </div>
  );
}

export default PromptView;
