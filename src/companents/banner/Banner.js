import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import $ from "jquery"; 
import './Banner.css';
import '../../App.scss';
import background from "../../img/banner.jpg";
import sideBanner from "../../img/sideBanner.jpg";

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
      <Carousel className='hero'>
        {/* style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
       url(${background}) center/cover no-repeat` }} */}
        <div className='hero-img'>
          <img src={background} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='hero-img'>
          <img src={background} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className='hero-img'>
          <img src={background} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      // <div className="hero" style={{ background: `url(${background}) no-repeat` }}>
        /* style={{ background: `url(${background}) center no-repeat` }} */
        /* <div className='hero-img' >   */
          /* <img src={background}></img> */
        /* <div className="hero-banner">
        <h1 className="hero-title">Premium Keyfiyyət</h1>
        <p className="hero-text">
          Aztoner katricləri ISO standartlarına uyğun istehsal olunur. Bu da "məhsulun təhlükəsiz, etibarlı və
          ketfiyyətli olması" deməkdir. Premium ketfiyyətli Aztoner katricləri printerlərinizə
          ziyan vermir, əksinə çap xərclərinizi minimuma endirir.
        </p>
        <a href="#featured" className="btn-white scroll-link">Ətraflı</a>
        </div> */
        /* </div> */
        /* <div className='side-banner'>
          <a href='https://unisell.az/' target='_balnk'><img src={sideBanner}></img></a>
        </div> */
      // </div>
    //   <div className="hero" 
    //   style={{ background: `linear-gradient(rgba(255,255,0, 0.5), rgba(0, 0, 0, 0.7)),
    //   url(${background}) center/cover no-repeat fixed` }}>
    //   <div className="hero-banner">
    //     <h1 className="hero-title">Premium Keyfiyyət</h1>
    //     <p className="hero-text">
    //       Aztoner katricləri ISO standartlarına uyğun istehsal olunur. Bu da "məhsulun təhlükəsiz, etibarlı və
    //       ketfiyyətli olması" deməkdir. Premium ketfiyyətli Aztoner katricləri printerlərinizə
    //       ziyan vermir, əksinə çap xərclərinizi minimuma endirir.
    //     </p>
    //     <a href="#featured" className="btn-white scroll-link">Ətraflı</a>
    //   </div>
    // </div>
    );
  } 
}

export default Panel;
