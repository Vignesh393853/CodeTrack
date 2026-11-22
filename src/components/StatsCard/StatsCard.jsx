
import './StatsCard.css';

function StatsCard({ title, value, icon, color }) {
  return (
    <div className="stats-card">
      <div>
        <p className="stats-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatsCard;
