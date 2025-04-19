import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    projectType: "",
    category: "",
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
    alert("Form submitted. Check console.");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>SIA SMARTHOME Quotation System</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Type:</label>
        <select name="projectType" onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="new">New Construction</option>
          <option value="renovation">Renovation</option>
        </select>

        <label>Category:</label>
        <select name="category" onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="painting">Painting</option>
          <option value="concrete">Concrete</option>
          <option value="flooring">Flooring</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
        </select>

        <label>Description:</label>
        <textarea name="description" onChange={handleChange} required />

        <label>Client Name:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" onChange={handleChange} required />

        <button type="submit" style={{ marginTop: "1rem" }}>
          Generate Quote
        </button>
      </form>
    </div>
  );
}

export default App;
