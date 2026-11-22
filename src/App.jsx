
import { useEffect, useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import ProblemForm from './components/ProblemForm/ProblemForm';
import ProblemList from './components/ProblemList/ProblemList';
import StatsCard from './components/StatsCard/StatsCard';

import {
  getProblems,
  saveProblems
} from './services/storageService';

import './App.css';

function App() {
  const [problems, setProblems] = useState(getProblems);

  useEffect(() => {
    saveProblems(problems);
  }, [problems]);

  const addProblem = (newProblem) => {
    setProblems((previous) => [...previous, newProblem]);
  };

  const toggleComplete = (id) => {
    setProblems((previous) =>
      previous.map((problem) =>
        problem.id === id
          ? { ...problem, completed: !problem.completed }
          : problem
      )
    );
  };

  const deleteProblem = (id) => {
    setProblems((previous) =>
      previous.filter((problem) => problem.id !== id)
    );
  };

  const total = problems.length;
  const solved = problems.filter((p) => p.completed).length;
  const pending = total - solved;

  const easy = problems.filter((p) => p.difficulty === 'Easy').length;
  const medium = problems.filter((p) => p.difficulty === 'Medium').length;
  const hard = problems.filter((p) => p.difficulty === 'Hard').length;

  return (
    <div className="app-layout">

      <Sidebar />

      <Dashboard>

        <section className="stats-grid">
          <StatsCard
            title="Total Problems"
            value={total}
            icon="⌘"
            color="#164e63"
          />

          <StatsCard
            title="Solved"
            value={solved}
            icon="✓"
            color="#14532d"
          />

          <StatsCard
            title="Pending"
            value={pending}
            icon="◷"
            color="#713f12"
          />

          <StatsCard
            title="Easy / Medium / Hard"
            value={`${easy} / ${medium} / ${hard}`}
            icon="★"
            color="#4c1d95"
          />
        </section>

        <section className="workspace-grid">

          <ProblemForm onAddProblem={addProblem} />

          <div className="problems-section" id="problems">
            <h2>My Coding Problems</h2>

            <ProblemList
              problems={problems}
              onToggleComplete={toggleComplete}
              onDeleteProblem={deleteProblem}
            />
          </div>

        </section>

      </Dashboard>

    </div>
  );
}

export default App;
  