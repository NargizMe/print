import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import readXlsxFile from 'read-excel-file';
import './Cards.scss';
import '../../App.scss';
import katric from '../../img/katric.png';
import cartigePart from '../../img/cartridgesPart.jpg';
import printerPart from '../../img/printerParts.jpg';
import toner from '../../img/toner.jpg';
import ink from '../../img/ink.jpg';

class Cards extends Component{

    state={
        menuShow: false
    }

    render(){
      return (
        <section className="featured-center">
            <div className="feature-card">
                <img
                src={katric}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katriclər</button>
            </div>
            <NavLink className="feature-card" to='/toner'>
                <img
                src={toner}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Toner (dolum üçün)</button>
            </NavLink>
            <div className="feature-card">
                <img
                src={cartigePart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katric Hissələri</button>
            </div>
            <NavLink className="feature-card" to='/ink'>
                <img
                src={ink}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Mürəkkəb (ink)</button>
            </NavLink>
            <div className="feature-card">
                <img
                src={printerPart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Printer Hissələri</button>
            </div>
        </section>
      );
    } 
}

export default Cards;
