import React from 'react';
import Slider from 'react-slick';
import './Mostpopular.css';
import pro from './assets/pro1.png';

const products = [
  {
    name: 'Product Name 1',
    price: 30.5,
    description:
      'Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam.',
    image: {pro},
  },
  {
    name: 'Product Name 2',
    price: 25.0,
    description:
      'Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam.',
    image: {pro},
  },
  {
    name: 'Product Name 3',
    price: 40.0,
    description:
      'Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam.',
    image: {pro},
  },
];

function Mostpopular() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="App"
      style={{
        backgroundImage: `url(/assets/Backmost.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="carousel-container">
        <h1 className="title">Most Popular</h1>
        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-content">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <span>{product.price} USD</span>
                  <div className="buttons">
                    <button className="add-to-cart">Add To Cart</button>
                    <button className="more-details">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Mostpopular;