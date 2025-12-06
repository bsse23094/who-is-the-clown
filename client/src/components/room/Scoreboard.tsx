import { Crown, Trophy, Target, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import "./Scoreboard.scss";

interface ScoreboardProps {
  stats: Array<{
    userId: string;
    username: string;
    clownCount: number;
    roundsPlayed: number;
  }>;
  onNextRound: () => void;
}

function Scoreboard({ stats, onNextRound }: ScoreboardProps) {
  // Sort stats by clown count (highest = biggest clown)
  const sortedStats = [...stats].sort((a, b) => b.clownCount - a.clownCount);
  
  console.log('Scoreboard rendering with stats:', sortedStats);
  
  const getMedalIcon = (index: number) => {
    if (index === 0) return <Crown className="medal-icon" />;
    if (index === 1) return <Trophy className="medal-icon" />;
    if (index === 2) return <Target className="medal-icon" />;
    return null;
  };

  return (
    <div className="scoreboard">
      <div className="scoreboard-header">
        <h2>Round Results</h2>
        <div className="subtitle">Who's the biggest clown?</div>
      </div>

      <div className="standings">
        {sortedStats.length > 0 ? (
          sortedStats.map((stat, index) => (
            <div 
              key={stat.userId} 
              className={`standing-item ${index === 0 ? "rank-1" : ""}`}
            >
              <div className="rank">#{index + 1}</div>
              {getMedalIcon(index)}
              <div className="player-name">{stat.username || 'Unknown Player'}</div>
              <div className="score">{stat.clownCount}</div>
            </div>
          ))
        ) : (
          <div className="no-stats">
            <p>No stats yet. Time to play!</p>
          </div>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <Target className="stat-icon" />
            <div className="stat-label">Clown Count</div>
          </div>
          <div className="stat-value">{sortedStats[0]?.clownCount || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <TrendingUp className="stat-icon" />
            <div className="stat-label">Rounds</div>
          </div>
          <div className="stat-value">{sortedStats[0]?.roundsPlayed || 0}</div>
        </div>
      </div>

      <button className="next-round-btn" onClick={onNextRound}>
        <span>Next Round</span>
        <ArrowRight className="btn-icon" />
      </button>
    </div>
  );
}

export default Scoreboard;
