import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import ChatPage from "./ChatPage";
import LoginPage from "./Login";
import About from "./About";
import Contact from "./Contact";
import SearchPage from "./SearchPage";
import PatientPage from "./PatientPage";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand">NAMASTE</span>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
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
        <img src="/home.png" alt="Doctor" className="doctor-img" />
      </div>
    </section>
  );
}

export default function App() {
  const [showTranslate, setShowTranslate] = useState(false);

  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.id = "google-translate-script";
      document.body.appendChild(script);
    };

    // Define callback globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ta,te,bn,ml,gu,mr,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    if (!window.google || !window.google.translate) {
      addScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, [showTranslate]);

  return (
    <Router>
      <div className="app">
        <Navbar />

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/patient" element={<PatientPage />} />
        <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>

        {/* Floating Translate Button */}
        <div className="translate-floating-wrapper">
          <button
            className="translate-btn-circle"
            onClick={() => setShowTranslate(!showTranslate)}
          >
            🌐
          </button>

          {showTranslate && (
            <div
              id="google_translate_element"
              className="translate-dropdown"
            ></div>
          )}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 NAMASTE. All Rights Reserved By Nexa6.</p>
        </footer>
      </div>
    </Router>
  );
}
