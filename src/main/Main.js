import React from "react";
import {  } from 'react-router-dom';
import '../App.scss';
import NavBar from '../companents/navbar/Navbar';
import Footer from '../companents/footer/Footer';
import Panel from '../companents/banner/Banner';
import Cards from '../companents/cards/Cards';
import LittleBanner from '../companents/littleBanner/LittleBanner';

function Main() {
  return (
    <div className="container">
      <NavBar/>
      <Panel/>
      <Cards/>
      <LittleBanner/>
      <Footer/>
    </div>
  );
}

export default Main;
