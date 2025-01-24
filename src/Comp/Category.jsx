import React from 'react';
import './Category.css';

const Category = () => {
  return (
    <div className="chocolate-section">
      <img className="bac" src="/assets/baccat.png"  />
      <div className="white-chocolates">
        <img src="/assets/cat1.png" alt="White Chocolates" />
        <h2>White Chocolates</h2>
        <p>Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt veniam.</p>
        <div className="product-list">
          {Array(3).fill().map((_, i) => (
            <div key={i} className="product-item">
              <h3>Product Name</h3>
              <p>Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt veniam.</p>
              <span>30.50 USD</span>
              <div>
                <button>Add To Cart</button>
                <button>More Details</button>
              </div>
            </div>
          ))}
        </div>
        <button>View All</button>
      </div>
      <div className="milk-chocolates">
        <img src="/assets/cat3.png" alt="Milk Chocolates" />
        <h2>Milk Chocolates</h2>
        <p>Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt veniam.</p>
        <button>Explore</button>
      </div>
      <div className="black-chocolates">
        <img src="/assets/cat2.png" alt="Black Chocolates" />
        <h2>Black Chocolates</h2>
        <p>Lorem ipsum dolor sit amet. Aut consequatur doloribus ut deserunt veniam.</p>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default Category;