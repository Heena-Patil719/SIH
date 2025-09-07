import React from "react";
import "./Login.css";

export default function LoginPage() {
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
          <form className="login-form">
            <input type="text" placeholder="ABHA ID" />
            <input type="password" placeholder="Password" />
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