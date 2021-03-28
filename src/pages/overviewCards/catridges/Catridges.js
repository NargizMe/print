import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import '../../../companents/cards/Cards.scss';
import '../../../App.scss';
import '../OverViewCards.scss';

import Footer from '../../../companents/footer/Footer';
import More from '../../../companents/more/More';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import NavBar from '../../../companents/navbar/Navbar';
import Banner from '../../../companents/banner/Banner';

import {catridgeData} from '../../../main/catridgeData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faTags, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import lazer from '../../../img/lazer.jpg';
import tuba from '../../../img/tuba.jpg';
import ink from '../../../img/inkCatridge.jpg';

class Catridges extends Component{

  state = {
    showMore: false,
    img:0,
    price:0,
    title:0,
    brand:0,
    model:0
  }
  
  changeImg = (event) => {
    $('.more-big-img').attr('src', $(event.target).attr('src'));
  }
  
  showMore=(event)=>{
    this.setState({showMore:true});
    this.setState({img: $(event.currentTarget).children('.card-img-container').children('.card-img').attr('src')});
    this.setState({price: $(event.currentTarget).children('.card-footer').children('.card-price').text()});
    this.setState({title: $(event.currentTarget).children('.card-footer').children('.card-title').text()});
    this.setState({brand: $(event.currentTarget).children('.card-footer').children('.card-brand').text()});
    this.setState({model: $(event.currentTarget).children('.card-footer').children('.card-model').text()});
  }

  hideMore=()=>{
    this.setState({showMore:false});
  }

showCards(){
    return catridgeData.map(item=>{
      return <article className={`card ${item.type} ${item.originality}`} onClick={this.showMore}>
        <div className="card-img-container">
          <img
          src={item.img}
          className="card-img"
          alt="məhsul"
          />
          <button className="card-more" >Ətraflı</button>
        </div>
        <div className="card-footer">
          <h4 className="card-title">{item.title}</h4>
          {/* <div className='card-des'> */}
            <p className="card-brand">{item.brand}</p>
            <p className="card-model">{item.model}</p>
            <p className="card-price">{item.price} AZN
            <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
            </p>    
          {/* </div> */}
        </div>
      </article>
    });
  }

  render(){
    return (
      <div className="container" id='container'>
      <NavBar/>
      <Banner/>
      <div className='drop-menu'>
        {this.state.showMore ? <Backdrop /> : null}
        {this.state.showMore ? <More 
        hideMore={this.hideMore} 
        img={this.state.img}
        price={this.state.price}
        title={this.state.title} 
        model={this.state.model} 
        brand={this.state.brand} /> : null}
        <h2 className="drop-menu-subtitle">Katriclər</h2>
        <section className="drop-menu-center">
          <NavLink className="drop-menu-card" to='/laser'>
            <img
            src={lazer}
            className="drop-menu-card-img"
            alt="məhsul"
            />
            <button className="drop-menu-card-button" >Lazer</button>
          </NavLink>
          <NavLink className="drop-menu-card" to='/tuba'>
            <img
            src={tuba}
            className="drop-menu-card-img"
            alt="məhsul"
            />
            <button className="drop-menu-card-button" >Tuba</button>
          </NavLink>
          <NavLink className="drop-menu-card" to='/tuba'>
            <img
            src={ink}
            className="drop-menu-card-img"
            alt="məhsul"
            />
            <button className="drop-menu-card-button" >İNK</button>
          </NavLink>
          <NavLink to='/' className='back-overview'>
            <FontAwesomeIcon className=".back-overview-icon" icon={faAngleDoubleLeft}/> geri
          </NavLink>
        </section>
        <div className='drop-menu-detail'>
            {this.showCards()}
        </div>
        <a href='#container' className="up" ><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
      </div>
      <Footer/>
    </div>
    );
  } 
}

export default Catridges;
