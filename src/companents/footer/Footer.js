import React, {Component} from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt, faFax,
    faMobileAlt, faEnvelope, faWallet, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebookSquare, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
// import $ from 'jquery';
import './Footer.css';
import "../../App.scss";

class Footer extends Component{

render(){
    return(
        <div className='all'>
        {/* <section className="services" id="services">
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
        </section> */}
        <footer id="footer">
            <div className="footer-container">
                <div className="contact-info">
                    <small className="contact-knowledge">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icons"/>
                        Azərbaycan, Bakı</small>
                    <small className="contact-knowledge">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="contact-icons"/>
                        (+99412)498 59 05</small>
                    <small className="contact-knowledge">
                        <FontAwesomeIcon icon={faMobileAlt} className="contact-icons"/>
                        (+99450)200 19 73</small>
                    <small className="contact-knowledge">
                        <FontAwesomeIcon icon={faFax} className="contact-icons"/>
                        (+99412)493 34 46
                    </small>
                    <small className="contact-knowledge">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icons"/>
                        office@kainatprint.az</small>
                    <a href="https://www.instagram.com/kainat.print/?fbclid=IwAR19azY6wrsgrXGz8sAU85yFU1XKKTATUnPJsad3a2t_pEysyuH0zyBLT7I" target="_blank" className="contact-icons-link">
                        <FontAwesomeIcon icon={faInstagram}/> </a>
                    <a href="https://www.instagram.com/kainat.print/?fbclid=IwAR19azY6wrsgrXGz8sAU85yFU1XKKTATUnPJsad3a2t_pEysyuH0zyBLT7I" target="_blank" className="contact-icons-link">
                        <FontAwesomeIcon icon={faFacebookSquare}/> </a>
                </div>
            </div>
            <hr></hr>
            <p className="copyright">&copy; Bütün hüquqlar qorunur</p>
        </footer>
        </div>
    );
}
}

export default Footer;