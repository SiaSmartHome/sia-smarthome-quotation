import React, { useState } from 'react';
import './style.css';

function App() {
  const [formData, setFormData] = useState({
    description: '',
    renovation: 'No',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    alert(data.result || 'Estimate generated.');
  };

  return (
    <div className="container">
      <h1 className="title">SIA SMARTHOME Estimator</h1>
      <form className="quote-form" onSubmit={handleSubmit}>
        <textarea name="description" placeholder="i want to paint a house" onChange={handleChange} />
        <select name="renovation" onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input name="name" type="text" placeholder="Your name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Your email" onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Your phone number" onChange={handleChange} />
        <button type="submit">Generate Estimate</button>
      </form>
    </div>
  );
}

export default App;