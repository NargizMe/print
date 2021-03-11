import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import readXlsxFile from 'read-excel-file';
import './Cards.scss';
import '../../App.scss';
import laserAnaloq32 from '../../img/catriges/laser(analoq)32.jpg';
import baraban1 from '../../img/catrigeParts/baraban1.jpg';
import toner1 from '../../img/ink/toner1.jpg';
import ink1 from '../../img/ink/ink1.jpg';

class Cards extends Component{

    render(){
      return (
        <section className="featured" id="featured">
            {/* <h2 className="subtitle">Məhsullarımız</h2>
            <div className="under-line"></div> */}
            <div className="featured-center">
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={laserAnaloq32}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katriclər</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={baraban1}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Katric Hissələri</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={toner1}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Toner (dolum üçün)</button>
            </NavLink>
            <NavLink className="feature-card" to='/catriges'>
                <img
                src={ink1}
                className="feature-card-img"
                alt="məhsul"
                />
                <button className="feature-card-button" >Mürəkkəb (ink)</button>
            </NavLink>
            </div>
        </section>
      );
    } 
}

export default Cards;
