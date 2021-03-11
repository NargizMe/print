import React, {Component} from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';
import './Footer.css';
import "../../App.scss";

class Footer extends Component{

render(){
    return(
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
    );
}
}

export default Footer;