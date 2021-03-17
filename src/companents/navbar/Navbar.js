import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../../App.scss';
import $ from "jquery"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
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

  findProduct=()=>{
    let input = $('.search-input').val();
    input=input.toLowerCase(); 
    let x = $('.card-title').text().split(' '); 
    for (let i = 0; i < x.length; i++) {  
      if (!x[i].toLowerCase().includes(input)) { 
        console.log('tapmadim');
      } 
      else { 
        console.log('tapdim');              
      } 
    }
  }

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
        <div className="nav-links" >
          <NavLink className="nav-link" to='/about'>Haqqımızda</NavLink>
          <a className="nav-link" href="#services">Xidmətlər</a>
          <div className="dropdown">
            <button className="nav-link">Katriclər 
            <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </button>
            <div className="dropdown-content">
              <NavLink to='/laser' className='dropdown-link'>Lazer</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>İNK</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Tuba</NavLink>
            </div>
          </div>
          <NavLink to='/tuba' className='nav-link'>Toner</NavLink>
          <NavLink to='/ink' className='nav-link'>Mürəkkəblər</NavLink>
          <div className="dropdown">
            <button className="nav-link">Katric Hissələri
            <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </button>
            <div className="dropdown-content">
              <NavLink to='/tuba' className='dropdown-link'>Baraban</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Maqnit val</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Rakel (Blade)</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Karatron (PCR)</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Çiplər</NavLink>
            </div>
          </div>
          <div className="dropdown">
            <button className="nav-link">Printer Hissələri
            <FontAwesomeIcon icon={faCaretDown} className='down-icon'/>
            </button>
            <div className="dropdown-content">
              <NavLink to='/tuba' className='dropdown-link'>Kağız götürən rolik</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Rezin val</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Businqlər</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Termoplyonka</NavLink>
              <NavLink to='/tuba' className='dropdown-link'>Termoelement</NavLink>
            </div>
          </div>
        </div>
        <form className='find'>
          <input type='text' placeholder="Axtar" className='search-input'></input>
          <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={this.findProduct} />
        </form>
      </nav>
    );
  } 
}

export default NavBar;
