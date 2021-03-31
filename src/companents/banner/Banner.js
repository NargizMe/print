import React, {Component} from "react";
import $ from "jquery"; 

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// import  LiquidSwipe  from './liquidswipe';

import './Banner.scss';
import '../../App.scss';

import mainBanner1 from "../../img/banner2.jpg";
import mainBanner2 from "../../img/mainBanner2.jpg";
import sign from "../../img/sign.png";

class Panel extends React.PureComponent{
  // componentDidMount(){
  //   if($('.slide.selected')){
  //     console.log('salam');
  //   }
  //   if($('li').hasClass('slide selected')){
  //     console.log('salam');
  //     $('.animated-title > div.text-top div').css('animation', 'showTopText 1s');
  //     $('.animated-title > div.text-bottom div').css('animation', 'showBottomText  0.5s');
  //   }
  //   $('.carousel .control-next.control-arrow').on('click', ()=>{
  //     console.log('salam');
  //     $('.animated-title > div.text-top div').css('animation', 'showTopText 1s');
  //     $('.animated-title > div.text-bottom div').css('animation', 'showBottomText  0.5s');
  //   })
  //   $('.carousel .control-next.control-arrow').on('click', ()=>{
  //     console.log('salam');
  //     $('.animated-title > div.text-bottom div').css('animation', 'showBottomText  0.5s');
  //   })
  //   setTimeout(function(){ console.log('salam'); }, 2500);
  // }
  // componentsToRender = [] 
  // backgroundColors = [] 

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
      // <LiquidSwipe
      //   components={componentsToRender}
      //   colors={backgroundColors}
      // />
    );
  } 
}

export default Panel;
