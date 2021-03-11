import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import '../../App.scss';
import $ from "jquery"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
          <NavLink to='/about' className="nav-link">Haqqımızda</NavLink>
          <a className="nav-link" href="#services">Xidmətlər</a>
          <NavLink className="nav-link" to='/catriges'>Katriclər</NavLink>
          <NavLink className="nav-link" to='/catriges'>Toner</NavLink>
          <NavLink className="nav-link" to='/catriges'>Katric Hissələri</NavLink>
          <NavLink className="nav-link" to='/catriges'>Mürəkkəb</NavLink>
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
