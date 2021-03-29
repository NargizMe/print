import React, {Component} from "react";
import $ from 'jquery';
import {  } from 'react-router-dom';
import '../App.scss';
import NavBar from '../companents/navbar/Navbar';
import Footer from '../companents/footer/Footer';
import Services from '../companents/services/Services';
import Panel from '../companents/banner/Banner';
import Cards from '../companents/cards/Cards';
import LittleBanner from '../companents/littleBanner/LittleBanner';
import Video from '../companents/video/Video';

class Main extends Component {
  render(){
    return (
      <div className="container">
        <NavBar/>
        <Panel/>
        <Services/>
        <Cards/>
        <Video/>
        <LittleBanner/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
