import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import readXlsxFile from 'read-excel-file';
import './Cards.scss';
import '../../App.scss';
import laserAnaloq32 from '../../img/catriges/laser(analoq)32.jpg';
import baraban1 from '../../img/catrigeParts/baraban1.jpg';
import toner1 from '../../img/ink/toner1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { faBarcode } from '@fortawesome/free-solid-svg-icons';
class Cards extends Component{

    render(){
      return (
        <section className="featured" id="featured">
            <h2 className="subtitle">Məhsullarımız</h2>
            <div className="under-line"></div>
            <div className="featured-center">
                {/* {this.showCards()} */}
                <NavLink className="card" to='/catriges'>
                <div className="card-img-container">
                    <img
                    src={laserAnaloq32}
                    className="card-img"
                    alt="məhsul"
                    />
                    <button className="card-img-icon" >Katric</button>
                    {/* <FontAwesomeIcon className="card-img-icon" icon={faBookmark}/> */}
                </div>
                <div className="card-footer">
                    <h4 className="card-title">Kartric HP 05A (CE505A)</h4>
                    <div className='card-des'>
                        <p className="card-brand">Marka: HP (analoq)</p>
                        <p className="card-price">21.00 AZN</p>
                        <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
                    </div>
                </div>
            </NavLink>
                <NavLink to='/catriges' className="card">
                <div className="card-img-container">
                    <img
                    src={baraban1}
                    className="card-img"
                    alt="məhsul"
                    />
                    <button className="card-img-icon" >Katric Hissəsi</button>
                    {/* <FontAwesomeIcon className="card-img-icon" icon={faBookmark}/> */}
                </div>
                <div className="card-footer">
                    <h4 className="card-title">Baraban (Opc) Canon 1018/1022</h4>
                    <div className='card-des'>
                        <p className="card-brand">Marka: Goldengreen</p>
                        <p className="card-price">12.00 AZN</p>
                        <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
                    </div>
                </div>
            </NavLink>
                <NavLink className="card" to='/catriges'>
                <div className="card-img-container">
                    <img
                    src={toner1}
                    className="card-img"
                    alt="məhsul"
                    />
                    <button className="card-img-icon" >Katric Mürəkkəbi</button>
                    {/* <FontAwesomeIcon className="card-img-icon" icon={faBookmark}/> */}
                </div>
                <div className="card-footer">
                    <h4 className="card-title">Brother Universal Toner - (1000gr)</h4>
                    <div className='card-des'>
                        <p className="card-brand">Marka: İTDL</p>
                        <p className="card-price">32.00 AZN</p>
                        <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
                    </div>
                </div>
            </NavLink>
            </div>
        </section>
      );
    } 
}

export default Cards;
