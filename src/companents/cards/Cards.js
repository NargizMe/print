import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import readXlsxFile from 'read-excel-file';
import './Cards.scss';
import '../../App.scss';
import katric from '../../img/katric1.png';
import cartigePart from '../../img/cartridgesPart.jpg';
import printerPart from '../../img/printerParts.jpg';
import toner from '../../img/toner.jpg';
import ink from '../../img/ink.jpg';

class Cards extends Component{

    render(){
      return (
        <section className="featured-center">
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={katric}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katriclər</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={toner}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Toner (dolum üçün)</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={cartigePart}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katric Hissələri</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={ink}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Mürəkkəb (ink)</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
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
