import React, { useState } from "react";

function App() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");
  const [client, setClient] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description })
    });
    const data = await res.json();
    setResult(data.result || "No result");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>SIA SMARTHOME Quotation System</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Briefly describe the project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <input
          type="text"
          placeholder="Client Name"
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={client.email}
          onChange={(e) => setClient({ ...client, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={client.phone}
          onChange={(e) => setClient({ ...client, phone: e.target.value })}
          required
        />
        <button type="submit">Generate Quote</button>
      </form>
      {result && (
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap", background: "#f5f5f5", padding: "1rem" }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
