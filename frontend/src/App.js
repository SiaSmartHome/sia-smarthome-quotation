import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your request has been submitted. We'll analyze your description.");
  };

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: "600px",
        background: "#fff",
        margin: "0 auto",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>🏗️ SIA SMARTHOME Quotation System</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          
          <label>📦 Project Type:</label>
          <select name="projectType" onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="new">New Construction</option>
            <option value="renovation">Renovation</option>
          </select>

          <label>📝 Project Description:</label>
          <textarea
            name="description"
            rows="4"
            onChange={handleChange}
            required
            placeholder="E.g., I want to paint my house and replace the kitchen sink"
            style={{ padding: "0.5rem" }}
          />

          <label>👤 Client Name:</label>
          <input type="text" name="name" onChange={handleChange} required placeholder="John Doe" />

          <label>📧 Email:</label>
          <input type="email" name="email" onChange={handleChange} required placeholder="example@email.com" />

          <label>📞 Phone:</label>
          <input type="tel" name="phone" onChange={handleChange} required placeholder="(123) 456-7890" />

          <button type="submit" style={{
            marginTop: "1rem",
            padding: "0.75rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            🚀 Generate Quote
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
