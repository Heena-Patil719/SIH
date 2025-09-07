import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h2>About Our Platform</h2>
        <p>
          Our website is a <strong>one-stop platform</strong> that connects India’s{" "}
          <a href="https://ayushportal.nic.in/" target="_blank" rel="noreferrer">
            NAMASTE AYUSH
          </a>{" "}
          medical codes with the{" "}
          <a href="https://icd.who.int/en/" target="_blank" rel="noreferrer">
            WHO ICD-11
          </a>{" "}
          system. It empowers <strong>doctors, hospitals, researchers,</strong> and{" "}
          <strong>insurers</strong> to easily search, compare, and translate health
          terms between traditional medicine (AYUSH) and modern biomedicine.
        </p>
        <p>
          With features like <strong>smart search with autocomplete</strong>,
          <strong> dual-coding translation</strong>, <strong>secure data upload</strong>{" "}
          with ABHA login, and an <strong>analytics dashboard</strong>, our platform
          makes healthcare records more accurate, standardized, and globally compatible.
        </p>
      </div>

      <div className="about-right">
        <img src="/aboutimg.png" alt="About Illustration" />
      </div>
    </section>
  );
}
