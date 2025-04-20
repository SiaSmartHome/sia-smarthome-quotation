import React, { useState } from "react";
import './style.css';

function App() {
  const [description, setDescription] = useState("");
  const [isRenovation, setIsRenovation] = useState("Yes");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description, isRenovation, name, email, phone }),
    });

    const data = await response.json();
    alert(data.estimate || "No estimate returned");
  };

  return (
    <div className="container">
      <h1 className="title">SIA SMARTHOME Estimator</h1>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="i want to paint a house..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <select value={isRenovation} onChange={(e) => setIsRenovation(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Generate Estimate</button>
      </form>
    </div>
  );
}

export default App;