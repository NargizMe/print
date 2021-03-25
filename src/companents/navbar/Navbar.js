import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../../App.scss';
import $ from "jquery"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
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
                <NavLink to='/tuba' className='dropdown-link'>İNK</NavLink>
                <FontAwesomeIcon icon={faCaretRight} className='right-icon'/>
                <div className='side-link'>
                  <NavLink to='/tuba' className='dropdown-link'>Orijinal</NavLink>
                </div>
              </div>
            </div>
          </div>
          <NavLink to='/toner' className='nav-link'>Toner</NavLink>
          <NavLink to='/ink' className='nav-link'>Mürəkkəblər</NavLink>
          <div className="dropdown">
            <NavLink className="nav-link" to='/catridges-parts'>Katric Hissələri
            <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to='/baraban' className='dropdown-link'>Baraban</NavLink>
              <NavLink to='/maqnitVal' className='dropdown-link'>Maqnit val</NavLink>
              <NavLink to='/rakel' className='dropdown-link'>Rakel (Blade)</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Karatron (PCR)</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Çiplər</NavLink>
            </div>
          </div>
          <div className="dropdown">
            <NavLink className="nav-link" to='/printer-parts'>Printer Hissələri
            <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to='/paper-taker' className='dropdown-link'>Kağız götürən rolik</NavLink>
              <NavLink to='/rubber-val' className='dropdown-link'>Rezin val</NavLink>
              <NavLink to='/businq' className='dropdown-link'>Businqlər</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Termoplyonka</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Termoelement</NavLink>
            </div>
          </div>
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
