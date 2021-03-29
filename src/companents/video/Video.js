import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Video.css';
import '../../App.scss';
import video from '../../img/video/video.mp4';
import $ from "jquery"; 

class Video extends Component{
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
        <div className="video-center will-fadeIn">
          <div class="video-center-video">
          <iframe src={video}
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
            className='video'
          />
          {/* <source src={video} type="video/mp4" className='video'/> */}
          {/* <ReactPlayer url="https://youtu.be/BmLZAa6Z27U" className='video'/> */}
          </div>
          <article className="video-info">
            <h1>Set up Catridge in under a minute.</h1>
            <p>
            Kainat Print şirkəti hər zaman yeliklərə üstünlük verib və bu 
            sahəsində innovativ yeniliklərə imza atır. Şirkətin texnoloji 
            bazası və personalı ən son standartlara uyğun formalaşmışdır.
            </p>
            <a href="https://unisell.az/" target='_balnk' className="btn-primary">unisell.az</a>
          </article>
        </div>
    );
  } 
}

export default Video;
