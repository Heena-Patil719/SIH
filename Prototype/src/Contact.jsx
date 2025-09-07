import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      {/* Left Side */}
      <div className="contact-left">
        <h2 >Contact Us</h2>
        <p>Have questions or want to collaborate? Reach out to us!</p>


          <img src="/emailicon.png" alt="Email" className="icon" />
        <div className="contact-info">
    
        <img
          src="/contactimg.png"
          alt="Contact Illustration"
          className="contact-img"
        />
          <p>Nexa6@gmail.com</p>
        </div>

      </div>

      {/* Right Side (Form) */}
      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}
