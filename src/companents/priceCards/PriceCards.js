import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import './PriceCards.scss';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTags} from "@fortawesome/free-solid-svg-icons";

import katric1 from '../../img/katric1.png';
import katric2 from '../../img/katric2.png';
import cartigePart2 from '../../img/cartridgesPart2.png';

class PriceCards extends Component{
        
  // componentDidMount(){
  //     window.addEventListener('scroll', this.handleScroll);
  // }
  
  // handleScroll() {
  //     $('.hideme').each( function(i){
  //         let bottom_of_object = $(this).position().top + $(this).outerHeight();
  //         let bottom_of_window = $(window).scrollTop() + $(window).height();
          
  //         if( bottom_of_window > bottom_of_object ){
              
  //             $(this).animate({'opacity':'1'},500);
                  
  //         }
          
  //     }); 
  // };
  render(){
    return (
      <section className="price-cards-center">
        <article className="price-card">
          <div className="price-card-img-container" style={{ background: `url(${katric2}) center/cover no-repeat` }}>
            <img src={katric1} className='price-card-small-img' />
            <img src={cartigePart2} className='price-card-small-img' />
            {/* <img
            src={katric2}
            className="price-card-img"
            alt="məhsul"
            /> */}
            {/* <button className="card-more" >Ətraflı</button> */}
          </div>
          <div className="price-card-footer">
            <h4 className="price-card-title">Salam</h4>
            <p className="price-card-brand">Salam Mala</p>
            <p className="price-card-model">Salam</p>
            <p className="price-card-price">5.20 AZN
            <FontAwesomeIcon className="price-card-footer-icon" icon={faTags}/>
            </p>    
          </div>
        </article>
      </section>
    );
  } 
}

export default PriceCards;
