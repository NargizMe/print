import React, {Component} from "react";
import './Banner.css';
import '../../App.scss';
import background from "../../img/banner.jpg";

import Services from '../services/Services';
import $ from "jquery"; 

class Panel extends Component{
    
  render(){
    return (
      <div className="hero">
        <div className='hero-img' style={{ background: `url(${background}) center no-repeat` }}>  
        </div>
      <div className="hero-banner">
        <h1 className="hero-title">Premium Keyfiyyət</h1>
        <p className="hero-text">
          Aztoner katricləri ISO standartlarına uyğun istehsal olunur. Bu da "məhsulun təhlükəsiz, etibarlı və
          ketfiyyətli olması" deməkdir. Premium ketfiyyətli Aztoner katricləri printerlərinizə
          ziyan vermir, əksinə çap xərclərinizi minimuma endirir.
        </p>
        {/* <a href="#featured" className="btn-white scroll-link">Ətraflı</a> */}
      </div>
    </div>
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
