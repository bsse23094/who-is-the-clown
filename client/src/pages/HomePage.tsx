import { useNavigate } from "react-router-dom";
import { PlayCircle, Users, Zap, Brain, Car } from "lucide-react";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import "./HomePage.scss";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hyperspeed />
      <div className="home-page">
        <div className="hero">
          <h1 className="title">
            <span className="title-text">WHO'S THE</span>
            <span className="title-highlight">CLOWN?</span>
          </h1>
          <p className="subtitle">
            Multiplayer shame engine. Bring a friend.
          </p>
          <p className="description">
            Submit your most ridiculous responses to silly prompts.
            <br />An AI judge will pick the "clown" each round.
            <br />May the worst answer win!
          </p>
          <button className="btn-hero" onClick={() => navigate("/lobby")}>
            <PlayCircle className="btn-icon" />
            <span>START PLAYING</span>
          </button>
          <button className="btn-hero btn-secondary" onClick={() => navigate("/local-racing")}>
            <Car className="btn-icon" />
            <span>LOCAL RACE (2P)</span>
          </button>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon-wrapper">
              <Users className="feature-icon" />
            </div>
            <h3>Quick Setup</h3>
            <p>Create a room and share the code with friends</p>
          </div>
          <div className="feature">
            <div className="feature-icon-wrapper">
              <Zap className="feature-icon" />
            </div>
            <h3>Real-time</h3>
            <p>Fast-paced rounds with instant results</p>
          </div>
          <div className="feature">
            <div className="feature-icon-wrapper">
              <Brain className="feature-icon" />
            </div>
            <h3>AI Judge</h3>
            <p>Let the AI decide who gave the worst answer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
