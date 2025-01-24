import React from "react";
import "./Hsection.css";

function Hsection() {
  return (
    <div className="h-section">
      <div className="chocolates">
        <img src="/assets/background.png" alt="Background" />
      </div>
      <div className="h-text">
        <h1>Chocolate</h1>
        <p>Choose the best chocolate for you!</p>
        <p>
          Lorem ipsum dolor sit amet, aut consequatur doloribus ut deserunt veniam. 
          Est neque doloremque quo quasi exercitationem, est ipsa esse id.
        </p>
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
}

export default Hsection;