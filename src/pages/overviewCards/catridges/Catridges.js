import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import './Cards.scss';
import '../../App.scss';
import lazer from '../../img/lazer.jpg';
import toner from '../../img/toner.jpg';
import ink from '../../img/ink.jpg';

class Catridges extends Component{

    render(){
      return (
        <div className='featured'>
            <h2 className="subtitle">Katriclər</h2>
            <section className="featured-center">
                <NavLink className="feature-card" to='/lazer'>
                    <img
                    src={lazer}
                    className="feature-card-img"
                    alt="məhsul"
                    />
                    <button className="feature-card-button" >Lazer</button>
                </NavLink>
                <NavLink className="feature-card" to='/tuba'>
                    <img
                    src={toner}
                    className="feature-card-img"
                    alt="məhsul"
                    />
                    <button className="feature-card-button" >Tuba</button>
                </NavLink>
                <NavLink className="feature-card" to='/tuba'>
                    <img
                    src={ink}
                    className="feature-card-img"
                    alt="məhsul"
                    />
                    <button className="feature-card-button" >İNK</button>
                </NavLink>
            </section>
        </div>
      );
    } 
}

export default Catridges;
