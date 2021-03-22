import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import '../../App.scss';
import './DetailCards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import Footer from '../../companents/footer/Footer';
import Services from '../../companents/services/Services';
import More from '../../companents/more/More';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavBar from '../../companents/navbar/Navbar';
import Banner from '../../companents/banner/Banner';

import toner1 from '../../img/ink/toner1.jpg';
import ink2 from '../../img/ink/ink2.jpg';
import ink3 from '../../img/ink/ink3.jpg';

jQueryBridget( 'isotope', Isotope, $ );
class Toner extends Component {
  state = {
    showMore: false,
    img:0,
    price:0,
    title:0,
    brand:0,
    card: [
      {
          img: toner1,
          title:'Brother Universal Toner - (1000gr)',
          brand:'İTDL',
          price:'32.00'
      },
      {
          img: toner1,
          title:'Brother Universal Toner - (1000gr)',
          brand:'İTDL',
          price:'32.00'
      },
      {
          img: toner1,
          title:'Brother Universal Toner - (1000gr)',
          brand:'İTDL',
          price:'32.00'
      },
    ]
  }

  showCards(){
    return this.state.card.map(item=>{
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
            <p className="card-price">{item.price} AZN
            <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
            </p>    
          {/* </div> */}
        </div>
      </article>
    });
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
          brand={this.state.brand} /> : null}
          <h2 className="subtitle">Toner</h2>
          <div className="catridges-center">
            {this.showCards()}
          </div>
          <a href='#container' className="up" ><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
        </section>
        <Services/>
        <Footer/>
      </div>
    );
  }
}

export default Toner;
