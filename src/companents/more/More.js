import React, {Component} from "react";
import $ from 'jquery';
import '../../App.scss';
import './More.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

class More extends Component {

  changeImg = (event) => {
    $('.more-big-img').attr('src', $(event.target).attr('src'));
  }

  hideMore=()=>{
    $('.more').css('display', 'none');
    this.props.hideMore();
  }

  render(){
    return (
      <div className='more'>
        <div className='more-img'>
          <img src={this.props.img} className='more-big-img' />
          <br/>
          <img src={this.props.img} className='more-small-img' onClick={this.changeImg}/>
          <img  className='more-small-img' onClick={this.changeImg}/>
        </div>
        <div className='more-info'>
          <FontAwesomeIcon icon={faTimesCircle} className='more-close' onClick={this.hideMore} />
          <h1 className='more-info-name'>{this.props.title}</h1>
          <h1 className='more-info-price'>{this.props.price}</h1>
          <table>
            <tr>
              <td className='name'>Marka: </td>
              <td>{this.props.brand}</td>
            </tr>
            {/* <tr>
              <td className='name'>Model: </td>
              <td></td>
            </tr> */}
          </table>
        </div>
      </div>
    );
  }
}

export default More;
