import React, {Component} from "react";
import './SetUpBanner.css';
import '../../App.scss';
import littleBanner from "../../img/littleBanner.jpeg";
import $ from "jquery"; 

class SetUpBanner extends Component{
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
      <div className="set-up-banner will-fadeIn">
        <h1 className="set-up-banner-text">
          Katric dolumu və dəyişimi üçün bizə müraciət edin.
        </h1>
        {/* style={{ background: `url(${littleBanner}) no-repeat`}} */}
        <div className='set-up-banner-img' >  
          <img src={littleBanner}></img>
        </div>
    </div>
    );
  } 
}

export default SetUpBanner;
