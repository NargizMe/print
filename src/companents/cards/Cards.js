import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import './Cards.scss';
import '../../App.scss';
import Catridges from '../../pages/overviewCards/catridges/Catridges';

import katric from '../../img/katric.png';
import cartigePart from '../../img/cartridgesPart.jpg';
import printerPart from '../../img/printerParts.jpg';
import toner from '../../img/toner.jpg';
import ink from '../../img/ink.jpg';

class Cards extends Component{

    render(){
      return (
        <section className="featured-center">
            <NavLink className="feature-card" to='/catridges' >
                <img
                src={katric}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katriclər</button>
            </NavLink>
            <NavLink className="feature-card" to='/toner'>
                <img
                src={toner}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Toner (dolum üçün)</button>
            </NavLink>
            <NavLink className="feature-card" to='/catridges-parts'>
                <img
                src={cartigePart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katric Hissələri</button>
            </NavLink>
            <NavLink className="feature-card" to='/ink'>
                <img
                src={ink}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Mürəkkəb (ink)</button>
            </NavLink>
            <NavLink className="feature-card" to='/printer-parts'>
                <img
                src={printerPart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Printer Hissələri</button>
            </NavLink>
        </section>
      );
    } 
}

export default Cards;
