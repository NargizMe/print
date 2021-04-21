import React, {Component} from "react";
import './Video.css';
import '../../App.scss';
import ReactPlayer from 'react-player';
import video from '../../img/video/kainat_video.mp4';
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
          <video controls='true' className='video'>
            <source src={video} type="video/mp4" />
          </video>
        {/* <ReactPlayer url="https://youtu.be/wIPiOQBjXjM" className='video' height= "100%" width='100%' /> */}
        </div>
        <article className="video-info hideme">
          <h1>Refill Katric in two minutes.</h1>
          <p>
          Kainat Print şirkəti hər zaman yeliklərə üstünlük verib və bu 
          sahəsində innovativ yeniliklərə imza atır. Şirkətin texnoloji 
          bazası və personalı ən son standartlara uyğun formalaşmışdır.
          </p>
        </article>
      </div>
    );
  } 
}

export default Video;
