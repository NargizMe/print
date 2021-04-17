import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../../App.scss';
import $ from "jquery"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faCaretDown, faCaretRight, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import logo from '../../img/agLogo.png';

class NavBar extends Component{
  // toggle menu
  displayMenu = () => {
    $(".nav-links").toggle();
  };
  // nav fixed
  // componentDidMount(){
  //   window.addEventListener('scroll', this.handleScroll);
  // };
  // handleScroll() {
  //   if (window.pageYOffset > 62) {
  //     $(".navbar").attr("class","navbar fixed");
  //   } else {
  //     $(".navbar").attr("class","navbar");
  //   }
  // };

  // findProduct=()=>{
  //   let input = $('.search-input').val();
  //   input=input.toLowerCase(); 
  //   let x = $('.card-title').text().split(' '); 
  //   for (let i = 0; i < x.length; i++) {  
  //     if (!x[i].toLowerCase().includes(input)) { 
  //       console.log('tapmadim');
  //     } 
  //     else { 
  //       console.log('tapdim');              
  //     } 
  //   }
  // }

  render(){
    return (
      <nav className="navbar" id='navbar'>
        <div className="nav-header">
        <NavLink to='/'><img src={logo} className="nav-logo" /></NavLink>
          <button className="nav-toggle"
          type="button"
          id="nav-toggle"
          onClick={this.displayMenu}
          ><FontAwesomeIcon icon={faBars}/>
          </button> 
        </div>
        <div className="nav-links" >
          <NavLink to='/' className='nav-link'>Ana səhifə</NavLink>
          <NavLink className="nav-link" to='/about'>Haqqımızda</NavLink>
          <div className="dropdown">
            <NavLink className="nav-link" to='/catridges'>Katriclər 
            <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </NavLink>
            <div className="dropdown-content">
              <div className='dropdown-side'>
                <NavLink to='/laser' className='dropdown-link'>Lazer</NavLink>
                <FontAwesomeIcon icon={faCaretRight} className='right-icon'/>
                <div className='side-link'>
                  <NavLink to='/laser' className='dropdown-link'>Orijinal</NavLink>
                  <NavLink to='/laser' className='dropdown-link'>Analoq</NavLink>
                </div>
              </div>
              <div className='dropdown-side'>
                <NavLink to='/tuba' className='dropdown-link'>Tuba</NavLink>
                <FontAwesomeIcon icon={faCaretRight} className='right-icon'/>
                <div className='side-link'>
                  <NavLink to='/tuba' className='dropdown-link'>Orijinal</NavLink>
                  <NavLink to='/tuba' className='dropdown-link'>Analoq</NavLink>
                </div>
              </div>
              <div className='dropdown-side'>
                <NavLink to='/ink-catridge' className='dropdown-link'>İNK</NavLink>
                <FontAwesomeIcon icon={faCaretRight} className='right-icon'/>
                <div className='side-link'>
                  <NavLink to='/ink-catridge' className='dropdown-link'>Orijinal</NavLink>
                </div>
              </div>
            </div>
          </div>
          <NavLink to='/toner' className='nav-link'>Toner</NavLink>
          <NavLink to='/ink' className='nav-link'>Mürəkkəblər</NavLink>
          <div className="dropdown">
            <div className='nav-link'>Ehtiyyat Hissələri
              <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </div>
            <div className="dropdown-content">
              <div className='dropdown-side'>
                <NavLink to='/catridges-parts' className='dropdown-link'>Katric Hissələri</NavLink>
                <FontAwesomeIcon icon={faCaretRight} className='right-icon'/>
                <div className='side-link'>
                  <NavLink to='/baraban' className='dropdown-link'>Baraban</NavLink>
                  <NavLink to='/maqnitVal' className='dropdown-link'>Maqnit val</NavLink>
                  <NavLink to='/rakel' className='dropdown-link'>Rakel (Blade)</NavLink>
                  <NavLink to='/karatron' className='dropdown-link'>Karatron (PCR)</NavLink>
                  <NavLink to='/chip' className='dropdown-link'>Çiplər</NavLink>
                </div>
              </div>
              <div className='dropdown-side'>
                <NavLink to='/printer-parts' className='dropdown-link'>Printer Hissələri</NavLink>
                <FontAwesomeIcon icon={faCaretRight} className='right-icon'/>
                <div className='side-link'>
                  <NavLink to='/baraban' className='dropdown-link'>Baraban</NavLink>
                  <NavLink to='/maqnitVal' className='dropdown-link'>Maqnit val</NavLink>
                  <NavLink to='/rakel' className='dropdown-link'>Rakel (Blade)</NavLink>
                  <NavLink to='/karatron' className='dropdown-link'>Karatron (PCR)</NavLink>
                  <NavLink to='/chip' className='dropdown-link'>Çiplər</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='nav-contact'>
          <div className='nav-icons'>
            <a href="https://www.instagram.com/kainat.print/?fbclid=IwAR19azY6wrsgrXGz8sAU85yFU1XKKTATUnPJsad3a2t_pEysyuH0zyBLT7I" target="_blank" className="navbar-social-icon">
              <FontAwesomeIcon icon={faInstagram}/> </a>
            <a href="https://m.facebook.com/profile.php?id=101877275281794&ref=content_filter" target="_blank" className="navbar-social-icon">
              <FontAwesomeIcon icon={faFacebookSquare}/> </a>
          </div>
          <p className="navbar-number">(+99470) 200 19 73</p>
        </div>
        {/* <form className='find'>
          <input type='text' placeholder="Axtar" className='search-input'></input>
          <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={this.findProduct} />
        </form> */}
      </nav>
    );
  } 
}

export default NavBar;
