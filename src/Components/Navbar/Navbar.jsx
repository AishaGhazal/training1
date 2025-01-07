import React from 'react';
import './Navbar.css';



const Navbar = () => {
return (
    <div className="app">
      <header className="header">
        <div className="logo">    <div className="logo">
        <img src='/assets/icon.png' />
        </div>D4 <span>Choco</span></div>
        <div className="chocolates">
       <img src="./assets/background.png" alt="dd" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search...." />
          <button className="cart-icon"></button>
        </div>
    
      </header>
     
      <section className="home" >
      <main className="main">
        <h1>Chocolate</h1>
        <h2>Choose the best chocolate for you!</h2>
        <p>
          <br Lorem ipsum dolor sit amet Aut consequatur doloribus ut deserunt/>
          veniam est neque doloremque quo quasi exercitationem est ipsa esse id.
        </p>
        <button className="shop-now">SHOP NOW</button>
      </main>
      </section>
      
    </div>
  );
}

export default Navbar;
