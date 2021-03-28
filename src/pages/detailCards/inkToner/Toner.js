import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import '../../../App.scss';
import '../DetailCards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faTags } from '@fortawesome/free-solid-svg-icons';

import Footer from '../../../companents/footer/Footer';
import More from '../../../companents/more/More';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import NavBar from '../../../companents/navbar/Navbar';
import Banner from '../../../companents/banner/Banner';

import {inkTonerData} from '../../../main/inkTonerData';

class Toner extends Component {
  state = {
    showMore: false,
    img:0,
    price:0,
    title:0,
    brand:0,
    model:0
  }
  
  showCards(){
    return inkTonerData.map(item=>{
      if(item.type == 'toner'){
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
          <p className="card-brand">{item.brand}</p>
          <p className="card-model">{item.model}</p>
          <p className="card-price">{item.price} AZN
          <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
          </p>    
        </div>
      </article>
    }
  }
    );
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

  render(){
    return (
      <div className="container" id='container'>
        <NavBar/>
        <Banner/>
        <section className="catridges" id="featured">
          {this.state.showMore ? <Backdrop /> : null}
          {this.state.showMore ? <More 
          hideMore={this.hideMore} 
          img={this.state.img}
          price={this.state.price}
          title={this.state.title} 
          model={this.state.model} 
          brand={this.state.brand} /> : null}
          <h2 className="subtitle">Toner</h2>
          <div className="catridges-center">
            {this.showCards()}
          </div>
          <a href='#container' className="up" ><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Toner;
