import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">PearlThoughts Internship Assignment</p>
        <p className="footer-text">
          This project was built as part of the Frontend Developer Internship
          Assignment by <span className="brand">PearlThoughts</span>.
        </p>
        <p className="footer-contact">
          Thoothukudi, Tamil Nadu, India &nbsp; | &nbsp;{" "}
          <a href="mailto:hr@pearlthoughts.com">hr@pearlthoughts.com</a>
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} PearlThoughts. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
