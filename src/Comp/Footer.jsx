import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>raghadahma22@gmail.com</p>
        <p>+963 994654973</p>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social</h3>
        <ul className="social-icons">
          <li>Twitter</li>
          <li>YouTube</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <input type="email" placeholder="E.g. john@gmail.com" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
