import React, {Component} from "react";
import $ from "jquery"; 

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

import './Banner.scss';
import '../../App.scss';

import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";

class Panel extends React.PureComponent{

  showBanner = () => {
    $('.second-banner').fadeToggle();
    // $('.hiden-text').css('display', 'inherit');
    // $('.show-text').css('display', 'none');
  }
  // hideText = () => {
  //   $('.second-banner').fadeToggle();
  //   $('.hiden-text').css('display', 'none');
  //   $('.show-text').css('display', 'inherit');
  // }

  render(){
    return (
      <div className='banner' onMouseLeave={this.showBanner} onMouseEnter={this.showBanner}>
        <div class="banner-content">
          <h1 class="banner-logo"><span>Kainat</span> Print</h1>
          <p className='show-text'>
          Yüksək keyfiyyətli və tanınmış brend olan 10 ildən artıq
         xidmət göstərən <span>AZToner</span> katricləri həm sərfəlidir, 
         həm də printerlərinizə ziyan vurmur.
          </p>
          <p className='hiden-text'>
          .skfmnlkfnsdnfdsnkm 10 ildən artıq
         xidmət göstərən <span>AZToner</span> katricləri həm sərfəlidir, 
         həm də printerlərinizə ziyan vurmur.
          </p>
        </div>
        <div className='banner-curtain'></div>
        <div className='first-banner' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
        url(${banner1}) center/cover no-repeat` }}></div>
        <div className='second-banner' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
        url(${banner2}) center/cover no-repeat` }}></div>
      </div>
    );
  } 
}

export default Panel;
