import React from "react";
import {  } from 'react-router-dom';
import '../App.scss';
import NavBar from '../companents/navbar/Navbar';
import Footer from '../companents/footer/Footer';
import Panel from '../companents/banner/Banner';
import Services from '../companents/services/Services';
import Cards from '../companents/cards/Cards';

function Main() {
  return (
    <div className="container">
      <NavBar/>
      <Panel/>
      <Cards/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default Main;
