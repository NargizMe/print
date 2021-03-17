import React, {Component} from "react";
import './LittleBanner.css';
import '../../App.scss';
import littleBanner from "../../img/littleBanner.png";
import $ from "jquery"; 

class LittleBanner extends Component{
    
  render(){
    return (
      <div className="little-banner">
        <h1 className="little-banner-text">
          Katric dolumu və dəyişimi üçün bizə müraciət edin.
        </h1>
        {/* style={{ background: `url(${littleBanner}) no-repeat`}} */}
        <div className='little-banner-img' >  
            <img src={littleBanner}></img>
        </div>
    </div>
    );
  } 
}

export default LittleBanner;
