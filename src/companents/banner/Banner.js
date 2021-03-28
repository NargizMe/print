import React, {Component} from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import $ from "jquery"; 
import './Banner.css';
import '../../App.scss';
import background from "../../img/banner.jpg";

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
      // <Carousel className='hero'>
      //   {/* style={{ background: `linear-gradient(rgba(0,0,0,0.05), rgba(0, 0, 0, 0.05)),
      //  url(${background}) center/cover no-repeat` }} */}
      //   <div className='hero-img'>
      //     <img src={background} />
      //     {/* <p className="legend">Legend 1</p> */}
      //   </div>
      //   <div className='hero-img'>
      //     <img src={background} />
      //     {/* <p className="legend">Legend 2</p> */}
      //   </div>
      //   <div className='hero-img'>
      //     <img src={background} />
      //     {/* <p className="legend">Legend 3</p> */}
      //   </div>
      // </Carousel>
        <div className='hero-img' >   
           <img src={background}></img> 
        </div>
    );
  } 
}

export default Panel;
