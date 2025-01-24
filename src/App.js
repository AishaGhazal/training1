import React from "react";
import Navbar from "./Comp/Navbar"
import Hsection from "./Comp/Hsection";
import Mostpopular from "./Comp/Mostpopular";
import About from "./Comp/About";
import Category from "./Comp/Category";
import Offer from "./Comp/Offer";
import Testimonials from "./Comp/Testimonials";
import Footer from "./Comp/Footer";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Hsection />
      <Mostpopular />
      <About />
      <Category />
      <Offer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;