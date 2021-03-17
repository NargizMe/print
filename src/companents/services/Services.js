import React, {Component} from "react";
import './Services.css';
import '../../App.scss';
import $ from "jquery";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons";;

class Services extends Component{
    
    render(){
      return (
        <section className="services" id="services">
            {/* <h2 className="title">Xidmətlərimiz</h2>
            <div className="under-line"></div> */}
            <div className="section-center services-center">
                <article className="service">
                <span className="service-icon">
                    <FontAwesomeIcon icon={faWallet}/>
                </span>
                <div className="service-info">
                    <h3 className="service-title">Münasib Qiymət</h3>
                    <p className="service-text">
                    Premium ketfiyyətli Aztoner katricləri printerlərinizə
                    ziyan vermir, əksinə çap xərclərinizi minimuma endirir.
                    </p>
                </div>
                </article>
                <article className="service">
                <span className="service-icon">
                    <FontAwesomeIcon icon={faCheckSquare}/>
                </span>
                <div className="service-info">
                    <h3 className="service-title">Yüksək Keyfiyyət</h3>
                    <p className="service-text">
                    Aztoner katricləri ISO standartlarına uyğun istehsal olunur. Bu da "məhsulun təhlükəsiz, etibarlı və
                    ketfiyyətli olması" deməkdir.
                    </p>
                </div>
                </article>
                <article className="service">
                <span className="service-icon">
                    <FontAwesomeIcon icon={faStackOverflow}/>
                </span>
                <div className="service-info">
                    <h3 className="service-title">Məhsul Çeşidi</h3>
                    <p className="service-text">
                    Şirkətimiz müxtəlif növ katriclərin satışı, dolumu və s. xidmətləri ilə fəaliyyətdədir.
                    </p>
                </div>
                </article>
            </div>
        </section>
      );
    } 
}

export default Services;
