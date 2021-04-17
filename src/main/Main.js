import React, {Component} from "react";
import $ from 'jquery';
import {  } from 'react-router-dom';
import '../App.scss';
import NavBar from '../companents/navbar/Navbar';
import Footer from '../companents/footer/Footer';
import Services from '../companents/services/Services';
import Panel from '../companents/banner/Banner';
import Cards from '../companents/cards/Cards';
import SetUpBanner from '../companents/setUpBanner/SetUpBanner';
import Video from '../companents/video/Video';
import UnisellBanner from '../companents/unisellBanner/UnisellBanner';
import PriceCards from '../companents/priceCards/PriceCards';

class Main extends Component {
  render(){
    return (
      <div className="container">
        <NavBar/>
        <Panel/>
        <Services/>
        <Cards/>
        <UnisellBanner/>
        <Video/>
        {/* <PriceCards/> */}
        <SetUpBanner/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
