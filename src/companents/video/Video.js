import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Video.css';
import '../../App.scss';
import video from '../../img/video/video.mp4';
import $ from "jquery"; 

class Video extends Component{
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

handleScroll() {
  /* Check the location of each desired element */
  $('.hideme').each( function(i){
    let bottom_of_object = $(this).position().top + $(this).outerHeight();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},500);   
    } 
  }); 
};
  render(){
    return (
      <div className="video-center">
        <div class="video-center-video hideme">
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
        <article className="video-info hideme">
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
