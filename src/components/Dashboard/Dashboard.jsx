
import './Dashboard.css';

function Dashboard({ children }) {
  return (
    <main className="dashboard" id="dashboard">

      <header className="dashboard-header">
        <div>
          <p className="dashboard-subtitle">CODING WORKSPACE</p>
          <h1>Dashboard</h1>
        </div>

        <div className="profile">
          <span>VK</span>
        </div>
      </header>

      <section className="welcome-banner">
        <div>
          <p>YOUR CODING JOURNEY</p>
          <h2>Welcome to CodeTrack!</h2>
          <span>
            Keep learning. Keep growing. Track your progress every day.
          </span>
        </div>
        <div className="welcome-icon">⌘</div>
      </section>

      <section className="dashboard-content">
        <div className="section-heading">
          <h2>Overview</h2>
          <p>Your coding practice summary</p>
        </div>

        {children}
      </section>

    </main>
  );
}

export default Dashboard;
