import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./Login";
import About from "./About";
import Contact from "./Contact";
import SearchPage from "./SearchPage";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // Load Google Translate once
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand">NAMASTE</span>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            CONTACT
          </Link>
        </div>

        <Link to="/login">
          <button
            className={`login-btn ${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            LOGIN
          </button>
        </Link>

        {/* Google Translate Dropdown stays in navbar */}
        <div id="google_translate_element" className="translate-btn"></div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Bridging <span className="highlight">NAMASTE</span> & ICD-11 <br />
          for Smarter Healthcare
        </h1>
        <p>Dual coding for EMRs, Analytics, and Insurance</p>
        <div className="hero-buttons">
          <Link to="/search">
            <button className="btn primary">Try Search</button>
          </Link>
          <button className="btn secondary">Explore Mapping</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/doctor.png" alt="Doctor" className="doctor-img" />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 NAMASTE. All Rights Reserved By Nexa6.</p>
      </footer>
    </Router>
  );
}
