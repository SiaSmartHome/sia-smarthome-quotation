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
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAiResponse(null);

    try {
      const response = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: formData.projectType,
          description: formData.description
        })
      });

      const result = await response.json();
      setAiResponse(result);
      setLoading(false);
    } catch (err) {
      console.error("Error:", err);
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        maxWidth: "650px",
        background: "#fff",
        margin: "0 auto",
        padding: "2rem 2.5rem",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>🧠 SIA SMARTHOME AI Estimator</h2>

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
              placeholder="E.g., I want to paint my kitchen and replace old cabinets"
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
            <h4 style={{ textAlign: "center", marginBottom: "0.5rem", color: "#444" }}>Client Info</h4>

            <label>👤 Name:</label>
            <input type="text" name="name" onChange={handleChange} required />

            <label>📧 Email:</label>
            <input type="email" name="email" onChange={handleChange} required />

            <label>📞 Phone:</label>
            <input type="tel" name="phone" onChange={handleChange} required />

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
              {loading ? "⏳ Analyzing..." : "✅ Analyze & Generate Quote"}
            </button>
          </form>
        )}

        {aiResponse && (
          <div style={{ marginTop: "2rem", background: "#e9f7ef", padding: "1rem", borderRadius: "8px" }}>
            <h4>🧠 AI Response</h4>
            <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(aiResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
