
import { useState } from 'react';
import './ProblemForm.css';

function ProblemForm({ onAddProblem }) {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !topic.trim()) {
      alert('Please enter problem title and topic');
      return;
    }

    const newProblem = {
      id: Date.now(),
      title,
      topic,
      difficulty,
      notes,
      completed: false
    };

    onAddProblem(newProblem);

    setTitle('');
    setTopic('');
    setDifficulty('Easy');
    setNotes('');
  };

  return (
    <form className="problem-form" onSubmit={handleSubmit}>
      <h2>Add Coding Problem</h2>

      <label>Problem Name</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Example: Two Sum"
      />

      <label>Topic</label>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Example: Arrays"
      />

      <label>Difficulty</label>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <label>Notes</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add your solution notes..."
      />

      <button type="submit">+ Add Problem</button>
    </form>
  );
}

export default ProblemForm;
