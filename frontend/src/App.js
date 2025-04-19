import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ description: "", renovation: "", name: "", email: "", phone: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="container">
      <h1>SIA SMARTHOME Estimator</h1>
      <form onSubmit={handleSubmit}>
        <textarea name="description" placeholder="Describe your project" onChange={handleChange} required />
        <select name="renovation" onChange={handleChange} required>
          <option value="">Is this a renovation project?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input type="text" name="name" placeholder="Client Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <button type="submit">Generate Estimate</button>
      </form>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;