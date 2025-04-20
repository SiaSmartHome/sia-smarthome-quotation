
import React, { useState } from 'react';
import './style.css';

function App() {
  const [project, setProject] = useState('');
  const [renovation, setRenovation] = useState('Yes');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project, renovation, name, email, phone }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="container">
      <h1 className="title">SIA SMARTHOME Estimator</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={project} onChange={(e) => setProject(e.target.value)} placeholder="i want to paint a house" />
        <select value={renovation} onChange={(e) => setRenovation(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input type="text" placeholder="Client Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Generate Estimate</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;
