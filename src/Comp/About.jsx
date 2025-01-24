import React from "react";
import "./About.css";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-image">
        <img src="/assets/about.png" alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are
          passionate about delivering the best chocolates to you.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default AboutUs;