import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs"; 
import "./Login.css";

export default function Login() {
  const [abhaId, setAbhaId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Hardcoded credentials
  const users = [
    {
      abhaId: "12345678",
      passwordHash: bcrypt.hashSync("ABC@1234", 10),
      route: "/search",
    },
    {
      abhaId: "P1234",
      passwordHash: bcrypt.hashSync("P@1234", 10),
      route: "/patient",
    },
  ];

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.abhaId === abhaId);

    if (!user) {
      alert("Invalid ABHA ID");
      return;
    }

    if (!bcrypt.compareSync(password, user.passwordHash)) {
      alert("Invalid Password");
      return;
    }

    // ✅ Success -> navigate to assigned route
    navigate(user.route);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="Logo" />
          <span className="brand-text">CareSync</span>
        </div>
        <div className="nav-links">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
          <button className="login-btn active">LOGIN</button>
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
