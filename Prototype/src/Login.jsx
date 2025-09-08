import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs"; // ✅ for hashing
import "./Login.css";

export default function LoginPage() {
  const [abhaId, setAbhaId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Hardcoded credentials
  const validAbhaId = "12345678";

  // ✅ Store the hashed password instead of plain text
  const validPasswordHash = bcrypt.hashSync("ABC@1234", 10);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (abhaId !== validAbhaId) {
      alert("Invalid ABHA ID");
      return;
    }

    // ✅ Compare typed password with stored hash
    if (!bcrypt.compareSync(password, validPasswordHash)) {
      alert("Invalid Password");
      return;
    }

    // Success -> navigate to search page
    navigate("/search");
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <span className="brand-text">NAMASTE</span>
        </div>
        <div className="nav-links">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
          <button className="login-btn">LOGIN</button>
        </div>
      </nav>

      {/* Login Section */}
      <section className="login-section">
        <div className="login-box">
          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ABHA ID"
              value={abhaId}
              onChange={(e) => setAbhaId(e.target.value)}
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <a href="/" className="forgot">
              Forgot Password?
            </a>
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>

          {/* Image */}
          <div className="image-section">
            <img src="/doctor.png" alt="Doctor" />
          </div>
        </div>
      </section>
    </div>
  );
}
