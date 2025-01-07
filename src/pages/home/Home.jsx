import React from 'react';
 import Navbar from '../../Components/Navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import About
import Contact from './Contact';
import Shop from './Shop';
import styles from "./style.module.css"

const Home = () => {
  return (
    <>
    <Contact />
    <Shop />
    
    <div className={styles.container}>

      
    </div>
    </>
  );
}

export default Home;
