import React, {Component} from "react";
import $ from "jquery"; 

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

import './Banner.scss';
import '../../App.scss';

import mainBanner1 from "../../img/banner2.jpg";
import mainBanner2 from "../../img/mainBanner2.jpg";

class Panel extends React.PureComponent{

  // componentDidMount(){
  //   this.repeatAnimation();
  //   setInterval(() => {
  //     $('.banner p').css('animation-play-state', 'running');
  //   }, 3000);
  //   $('.banner p').css('animation-play-state', 'paused');
  // }

  // repeatAnimation = () => {
  //   this.timer = setInterval(() => 
  //   {$('.banner p').css('animation', 'slideFromLeft 3s ease-in-out')}, 3000);
  // };

  showBanner = () => {
    $('.second-banner').fadeToggle();
  }

  render(){
    return (
      // <Carousel className='hero' autoPlay infiniteLoop showThumbs={false} >
      //   <div className='hero-img' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
      //  url(${mainBanner1}) center/cover no-repeat` }}>
      //    <div className='hero-curtain'></div>
      //    <img src={sign} className='sign-img'/>
      //     <p className="banner-text">Yüksək keyfiyyətli və tanınmış brend olan 10 ildən artıq
      //      xidmət göstərən <span>AZToner</span> katricləri həm sərfəlidir, həm də printerlərinizə ziyan vurmur.</p>
      //   </div>
      //   <div className='hero-img' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
      //     url(${mainBanner2}) center/cover no-repeat` }}>
      //       <div className='hero-curtain'></div>
      //     <div class="animated-title">
      //       <div class="text-top">
      //         <div>
      //           <span>mimicking</span>
      //           <span>apple's design</span>
      //         </div>
      //       </div>
      //       <div class="text-bottom">
      //         <div>for the win!</div>
      //       </div>
      //     </div>
      //   </div>
      // </Carousel>
      <div className='banner' onMouseLeave={this.showBanner} onMouseEnter={this.showBanner}>
        <div class="banner-content">
          <h1 class="logo banner-logo"><span>Kainat</span> Print</h1>
          <p>
          Yüksək keyfiyyətli və tanınmış brend olan 10 ildən artıq
         xidmət göstərən <span>AZToner</span> katricləri həm sərfəlidir, 
         həm də printerlərinizə ziyan vurmur.
          </p>
        </div>
        <div className='banner-curtain'></div>
        <div className='first-banner' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
        url(${mainBanner1}) center/cover no-repeat` }}></div>
        <div className='second-banner' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
        url(${mainBanner2}) center/cover no-repeat` }}></div>
      </div>
    );
  } 
}

export default Panel;
