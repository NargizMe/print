import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../../App.scss';
import $ from "jquery"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import logo from '../../img/agLogo.png';

class NavBar extends Component{
    // toggle menu
    displayMenu = () => {
      $(".show-links").toggle();
    };
    // nav fixed
    componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
    };
    handleScroll() {
      if (window.pageYOffset > 62) {
        $(".navbar").attr("class","navbar fixed");
      } else {
        $(".navbar").attr("class","navbar");
      }
    };
    render(){
      return (
        <nav className="navbar">
            <div className="nav-header">
            <NavLink to='/'><img src={logo} className="nav-logo" /></NavLink>
            <button className="nav-toggle"
            type="button"
            id="nav-toggle"
            onClick={this.displayMenu}
            ><FontAwesomeIcon icon={faBars}/>
            </button> 
            </div>
            <div className="nav-links show-links" >
              <a href="#about" className="nav-link">Haqqımızda</a>
              <a href="#services" className="nav-link">Xidmətlər</a>
              <a href="#featured" className="nav-link">Məhsullarımız</a>
            </div>
            <div className="nav-icons">
            <a href="https://www.instagram.com/kainat.print/?fbclid=IwAR19azY6wrsgrXGz8sAU85yFU1XKKTATUnPJsad3a2t_pEysyuH0zyBLT7I" target="_blank" className="nav-icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            </div>
        </nav>
      );
    } 
}

export default NavBar;
