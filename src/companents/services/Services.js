import React, {Component} from 'react';
import $ from 'jquery';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow} from "@fortawesome/free-brands-svg-icons";
// import $ from 'jquery';
import './Services.scss';
import "../../App.scss";

class Services extends Component{
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
    return(
        <div className="services-center">
            <article className="service will-fadeIn">
            <span className="service-icon">
                <FontAwesomeIcon icon={faWallet}/>
            </span>
            <div className="service-info">
                <h3 className="service-title">Münasib Qiymət</h3>
                <p className="service-text">
                Premium ketfiyyətli Aztoner katricləri printerlərinizə
                ziyan vermir, əksinə çap xərclərinizi minimuma endirir.
                </p>
            </div>
            </article>
            <article className="service will-fadeIn">
            <span className="service-icon">
                <FontAwesomeIcon icon={faCheckSquare}/>
            </span>
            <div className="service-info">
                <h3 className="service-title">Yüksək Keyfiyyət</h3>
                <p className="service-text">
                Aztoner katricləri ISO standartlarına uyğun istehsal olunur. Bu da "məhsulun təhlükəsiz, etibarlı və
                ketfiyyətli olması" deməkdir.
                </p>
            </div>
            </article>
            <article className="service will-fadeIn">
            <span className="service-icon">
                <FontAwesomeIcon icon={faStackOverflow}/>
            </span>
            <div className="service-info">
                <h3 className="service-title">Məhsul Çeşidi</h3>
                <p className="service-text">
                Şirkətimiz müxtəlif növ katriclərin satışı, dolumu və s. xidmətləri ilə fəaliyyətdədir.
                </p>
            </div>
            </article>
        </div>
    );
}
}

export default Services;