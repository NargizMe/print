import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import $ from "jquery"; 
import './Banner.scss';
import '../../App.scss';

import mainBanner1 from "../../img/mainBanner1.jpg";
import mainBanner2 from "../../img/mainBanner2.jpg";

class Panel extends Component{
  render(){
    return (
      // <OwlCarousel className='owl-theme' loop margin={3} nav>
      //   <div class='item'>
      //     <img src={background} />
      //   </div>
      //   <div class='item'>
      //     <img src={background} />
      //   </div>
      //   <div class='item'>
      //     <img src={background} />
      //   </div>
      // </OwlCarousel>
      <Carousel className='hero' autoPlay infiniteLoop interval='2500'>
        <div className='hero-img' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
       url(${mainBanner1}) center/cover no-repeat` }}>
          <p className="banner-text">Yüksək keyfiyyətli və tanınmış brend olan 10 ildən artıq
           xidmət göstərən <span>AZToner</span> katricləri həm sərfəlidir, həm də printerlərinizə ziyan vurmur.</p>
        </div>
        <div className='hero-img' style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
          url(${mainBanner2}) center/cover no-repeat` }}>
          <div class="wrapper">
            <div class="wrapper-background">
              <p id="slide">Salam</p>
            </div>
          </div>
        </div>
      </Carousel>
        // <div className='hero-img' >   
        //    <img src={background}></img> 
        // </div>
    );
  } 
}

export default Panel;
