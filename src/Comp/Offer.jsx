import React from 'react';
import './Offer.css';

const Offer = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="/assets/woman.png" alt="Woman" className="woman-image" />
        <div className="special-offer">
          <h2>Special Offer</h2>
          <div className="countdown">
            <span>01</span>:<span>24</span>:<span>30</span>:<span>00</span>
          </div>
          <div className="countdown-labels">
            <span>Days</span> <span>Hours</span> <span>Minutes</span> <span>Seconds</span>
          </div>
        </div>
      </div>
      <div className="product-section">
        <img src="/assets/pro1.jpg" alt="Product" className="product-image" />
        <div className="product-details">
          <h3>Product Name</h3>
          <p>Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt veniam est neque doloremque quo quasi exercitationem est ipsa esse id.</p>
          <div className="price">30.50 USD</div>
          <div className="buttons">
            <button className="buy-now">BUY NOW</button>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
 