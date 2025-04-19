import React from 'react';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">SIA SMARTHOME AI Estimator</h1>
      <form className="quote-form">
        <label>
          <span>Project Description:</span>
          <textarea placeholder="Describe your project..." />
        </label>
        <label>
          <span>Client Name:</span>
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          <span>Phone:</span>
          <input type="tel" placeholder="Enter your phone number" />
        </label>
        <button type="submit">Generate Quote</button>
      </form>
    </div>
  );
}

export default App;
