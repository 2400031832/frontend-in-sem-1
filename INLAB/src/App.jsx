import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const isFormValid = email && password && !emailError && !passwordError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "left" }}>
      <h2>React Form Validation</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        {/* Password Field */}
        <div style={{ marginTop: "15px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: isFormValid ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;