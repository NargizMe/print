import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import './Cards.scss';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import katric from '../../img/katric.png';
import cartigePart from '../../img/cartridgesPart.jpg';
import printerPart from '../../img/printerParts.jpg';
import toner from '../../img/toner.jpg';
import ink from '../../img/ink.jpg';

class Cards extends Component{
    componentDidMount(){
        function Utils() {}
          Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();
    
                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };
    
            var Utils = new Utils();
            $(window).on('load', addFadeIn());
            
            $(window).scroll(function() {
                addFadeIn(true);
            });
    
          function addFadeIn(repeat) {
                var classToFadeIn = ".will-fadeIn";
                
                $(classToFadeIn).each(function( index ) {
                    var isElementInView = Utils.isElementInView($(this), false);
                    if (isElementInView) {
                        if(!($(this).hasClass('fadeInRight')) && !($(this).hasClass('fadeInLeft'))) {
                            if(index % 2 == 0) $(this).addClass('fadeInRight');
                            else $(this).addClass('fadeInLeft');
                        }
                    } else if(repeat) {
                        $(this).removeClass('fadeInRight');
                        $(this).removeClass('fadeInLeft');
                    }
                });
            }
      }
    render(){
      return (
        <section className="featured-center">
            <NavLink className="flip-card will-fadeIn" to='/catridges'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Katriclər</h1> 
                        <img src={katric} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card will-fadeIn" to='/toner'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Toner</h1> 
                        <img src={toner} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card will-fadeIn" to='/catridges-parts'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Katric Hissələri</h1> 
                        <img src={cartigePart} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card will-fadeIn" to='/ink'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Mürəkkəb (ink)</h1> 
                        <img src={ink} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            <NavLink className="flip-card will-fadeIn" to='/printer-parts'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1 className='flip-card-front-title'>Printer Hissələri</h1> 
                        <img src={printerPart} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <FontAwesomeIcon icon={faSearch} className='flip-card-back-icon'/>
                    </div>
                </div>
            </NavLink>
            {/* <NavLink className="feature-card" to='/catridges' >
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
            </NavLink> */}
        </section>
      );
    } 
}

export default Cards;
