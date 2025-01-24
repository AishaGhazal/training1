// File: src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    date: "10th FEB, 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget arcu at nulla consequat dictum.",
    image: "/assets/per1.jpg",
  },
  {
    name: "Jane Smith",
    date: "10th FEB, 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget arcu at nulla consequat dictum.",
    image: "/assets/per2.jpg",
  },
  {
    name: "Alex Johnson",
    date: "10th FEB, 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget arcu at nulla consequat dictum.",
    image: "/assets/per3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonial</h2>
      <div className="cards">
        {testimonials.map((testimonial, index) => (
          <div className="card" key={index}>
            <div className="image-wrapper">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3>{testimonial.name}</h3>
            <p className="date">{testimonial.date}</p>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
      <button className="view-more">View More</button>
    </div>
  );
};

export default Testimonials;
