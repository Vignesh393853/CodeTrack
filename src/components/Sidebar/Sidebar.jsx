
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">
        Code<span>Track.</span>
      </h2>

      <p className="sidebar-heading">MENU</p>

      <nav>
        <a href="#dashboard" className="sidebar-link active">
          <span>▦</span> Dashboard
        </a>

        <a href="#problems" className="sidebar-link">
          <span>⌘</span> My Problems
        </a>

        <a href="#progress" className="sidebar-link">
          <span>◷</span> Progress
        </a>
      </nav>

      <div className="sidebar-footer">
        <p>CodeTrack v1.0</p>
        <small>Coding Practice Tracker</small>
      </div>
    </aside>
  );
}

export default Sidebar;
