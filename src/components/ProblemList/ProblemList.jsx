
import './ProblemList.css';

function ProblemList({ problems, onToggleComplete, onDeleteProblem }) {
  if (problems.length === 0) {
    return (
      <div className="problem-list empty-state">
        <h3>No Problems Added Yet</h3>
        <p>Start your coding journey by adding your first problem!</p>
      </div>
    );
  }

  return (
    <div className="problem-list">
      {problems.map((problem) => (
        <div className="problem-item" key={problem.id}>
          <div className="problem-info">
            <h3 className={problem.completed ? 'completed' : ''}>
              {problem.title}
            </h3>

            <p>{problem.topic}</p>

            {problem.notes && <small>{problem.notes}</small>}

            <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
              {problem.difficulty}
            </span>

            <span className="problem-status">
              {problem.completed ? 'Completed' : 'Pending'}
            </span>
          </div>

          <div className="problem-actions">
            <button
              onClick={() => onToggleComplete(problem.id)}
              className="complete-btn"
            >
              {problem.completed ? 'Undo' : 'Complete'}
            </button>

            <button
              onClick={() => onDeleteProblem(problem.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProblemList;
