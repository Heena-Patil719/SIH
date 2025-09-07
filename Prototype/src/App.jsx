import React from "react";
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

function Navbar() {
  const location = useLocation(); // detect current route

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand">NAMASTE</span>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>HOME</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>ABOUT</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link>
        </div>
        <Link to="/login">
          <button className={`login-btn ${location.pathname === "/login" ? "active" : ""}`}>
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
          <button className="btn primary">Try Search</button>
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
      </Routes>
    </Router>
  );
}
