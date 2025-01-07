import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Card.css";
const products = [
  {
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet. Aut consequuntur doloribus ut deserunt veniam est neque doloremque quo quasi exercitationem est ipsa esse id.",
    price: "30.50 USD",
    image: "<img src='./assets/pro1.jpg'/>"
  },
  {
    name: "Product 2",
    description:
      "Another description for product 2. Est neque doloremque quo quasi exercitationem est ipsa esse id.",
    price: "40.00 USD",
    image: "pro1.jpg",
  },
  {
    name: "Product 3",
    description: "A third product description goes here.",
    price: "25.00 USD",
    image: "pro1.jpg",
  },
];
const Card = () => {
  return (
    <div className="card-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="swiper"
        spaceBetween={30}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <h1 className="card-title">Most Popular</h1>
              <div className="card-content">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image"
                />
                <div className="card-details">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">{product.price}</p>
                  <div className="card-buttons">
                    <button className="add-to-cart">Add To Cart</button>
                    <button className="more-details">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
