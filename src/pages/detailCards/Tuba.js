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

import tubaAnaloq1 from '../../img/catriges/tuba(analoq)1.jpg';
import tubaAnaloq2 from '../../img/catriges/tuba(analoq)2.jpg';
import tubaAnaloq3 from '../../img/catriges/tuba(analoq)3.jpg';
import tubaOrijinal1 from '../../img/catriges/tuba(orijinal)1.jpg';
import tubaOrijinal2 from '../../img/catriges/tuba(orijinal)2.png';
import tubaOrijinal3 from '../../img/catriges/tuba(orijinal)3.jpg';
import tubaOrijinal4 from '../../img/catriges/tuba(orijinal)4.jpg';
import tubaOrijinal5 from '../../img/catriges/tuba(orijinal)5.jpg';
import tubaOrijinal6 from '../../img/catriges/tuba(orijinal)6.jpg';
import tubaOrijinal7 from '../../img/catriges/tuba(orijinal)7.jpg';
import tubaOrijinal8 from '../../img/catriges/tuba(orijinal)8.jpg';
import tubaOrijinal9 from '../../img/catriges/tuba(orijinal)9.jpg';
import tubaOrijinal10 from '../../img/catriges/tuba(orijinal)10.jpg';
import tubaOrijinal11 from '../../img/catriges/tuba(orijinal)11.jpg';

jQueryBridget( 'isotope', Isotope, $ );
class Catriges extends Component {
  state = {
    showMore: false,
    img:0,
    price:0,
    title:0,
    brand:0,
    card: [
      {
          img: tubaAnaloq1,
          title:'HYB Toner-Kartric EXV-42',
          brand:'HYB',
          price:'28.00',
          type: 'tuba',
          originality: 'analoq'
      },
      {
          img: tubaAnaloq2,
          title:'Toner Canon C-EXV14',
          brand:'Canon',
          price:'19.00',
          type: 'tuba',
          originality: 'analoq'
      },
      {
          img: tubaAnaloq3,
          title:'Toner Canon C-EXV33',
          brand:'Canon',
          price:'90.50',
          type: 'tuba',
          originality: 'analoq'
      },
      {
          img: tubaOrijinal1,
          title:'Canon Toner-Kartric EXV-42',
          brand:'Canon',
          price:'66.50',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal2,
          title:'Toner Canon C-EXV 14',
          brand:'Canon',
          price:'70.21 ',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal3,
          title:'Toner Canon C-EXV 34 BK',
          brand:'Canon',
          price:'78.28',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal4,
          title:'Toner Canon C-EXV 34 CY',
          brand:'Canon',
          price:'165.30',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal5,
          title:'Toner Canon C-EXV 34 MG',
          brand:'Canon',
          price:'165.30',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal6,
          title:'Toner Canon C-EXV 34 YW',
          brand:'Canon',
          price:'165.30',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal7,
          title:'Toner Canon C-EXV 54',
          brand:'HP',
          price:'136.50',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal8,
          title:'Toner Canon C-EXV 54 CY',
          brand:'Canon',
          price:'175.00',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal9,
          title:'Toner Canon C-EXV 54 MG',
          brand:'Canon',
          price:'175.00',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal9,
          title:'Toner Canon C-EXV 54 MG',
          brand:'Canon',
          price:'175.00',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal10,
          title:'Toner Canon C-EXV 54 YW',
          brand:'Canon',
          price:'175.00',
          type: 'tuba',
          originality: 'orijinal'
      },
      {
          img: tubaOrijinal11,
          title:'Toner Canon C-EXV33',
          brand:'Canon',
          price:'24.00',
          type: 'tuba',
          originality: 'orijinal'
      }
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
            <p className="card-brand">{item.brand} ({item.originality})</p>
            <p className="card-price">{item.price} AZN
            <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
            </p>    
          {/* </div> */}
        </div>
      </article>
    });
  }

  isotopeShow=(event)=>{
    $('.card').css('margin-right', "1.5rem");
    let $grid = $(".catridges-center").isotope({});
    let filterValue = $(event.target).attr('data-filter');
    $grid.isotope({ 
      filter: filterValue,
      resizable: false
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
        <section className="catridges">
          {this.state.showMore ? <Backdrop /> : null}
          {this.state.showMore ? <More 
          hideMore={this.hideMore} 
          img={this.state.img}
          price={this.state.price}
          title={this.state.title} 
          brand={this.state.brand} /> : null}
          <h2 className="subtitle">Tuba katriclər</h2>
          <div className="card-menu" >
            <button data-filter="*" className="card-menu-btn" onClick={this.isotopeShow} >Hamısı</button>
            <button data-filter=".tuba.analoq" className="card-menu-btn" onClick={this.isotopeShow}>
            TUBA (analoq)
            </button>
            <button data-filter=".tuba.orijinal" className="card-menu-btn" onClick={this.isotopeShow}>
            TUBA (orijinal)
            </button>
          </div>
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

export default Catriges;
