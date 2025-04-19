import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
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

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full submission:", formData);
    alert("Invoice created and estimate sent!");
  };

  return (
    <div style={{
      backgroundColor: "#f1f3f5",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        maxWidth: "600px",
        background: "#fff",
        margin: "0 auto",
        padding: "2rem 2.5rem",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>📋 SIA SMARTHOME Estimate</h2>

        {step === 1 && (
          <form onSubmit={handleNext} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label>🏗️ Project Type:</label>
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
              placeholder="E.g., Remove old carpet and install vinyl flooring, paint all interior walls."
              style={{ padding: "0.6rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />

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
              ➡️ Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ textAlign: "center", marginBottom: "0.5rem", color: "#444" }}>Client Information</h4>

            <label>👤 Name:</label>
            <input type="text" name="name" onChange={handleChange} required placeholder="Client Name" />

            <label>📧 Email:</label>
            <input type="email" name="email" onChange={handleChange} required placeholder="example@email.com" />

            <label>📞 Phone:</label>
            <input type="tel" name="phone" onChange={handleChange} required placeholder="(123) 456-7890" />

            <button type="submit" style={{
              marginTop: "1rem",
              padding: "0.75rem",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              ✅ Generate Invoice
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
