import React, {Component} from "react";
import './UnisellBanner.css';
import '../../App.scss';
import unisell from "../../img/unisell.png";
import $ from "jquery"; 
import { NavLink } from "react-router-dom";

class UnisellBanner extends Component{
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
      // style={{ background: `url(${unisell}) center/cover no-repeat`}}
      <a className="unisell-banner will-fadeIn" href='https://unisell.az/' target='blank'>
        <img src={unisell}></img>
      </a>
    );
  } 
}

export default UnisellBanner;
