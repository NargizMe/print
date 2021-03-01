import React, {Component} from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
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
                    <small className="contact-knowledge">
                        <FontAwesomeIcon icon={faSkype} className="contact-icons"/>
                        xalid.gasimov</small>
                    <div>
                        <a href="https://www.facebook.com/iiok.az" target="_blank" className="footer-icon">
                            <FontAwesomeIcon icon={faFacebookSquare} /></a>
                        <a href="https://www.instagram.com/kainat.print/?fbclid=IwAR19azY6wrsgrXGz8sAU85yFU1XKKTATUnPJsad3a2t_pEysyuH0zyBLT7I" target="_blank" className="footer-icon">
                            <FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
                <div class="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.658587758962!2d49.853185381334725!3d40.37966247406968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0624c90eef%3A0xbae8a0f489410034!2s247%20Dilara%20Aliyeva%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1613552845605!5m2!1sen!2s">
                </iframe>
                </div>
                {/* <div className="footer-menu">
                    <a href="#about">Haqqımızda</a>
                    <a href="#services">Xidmətlər</a>
                    <a href="#featured">Məhsullar</a>
                </div> */}
            </div>
            <hr></hr>
            <p className="copyright">&copy; Bütün hüquqlar qorunur</p>
        </footer>
    );
}
}

export default Footer;