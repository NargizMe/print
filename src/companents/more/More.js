import React, {Component} from "react";
import $ from 'jquery';
import '../../App.scss';
import './More.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTimesCircle, faPhoneSquareAlt, faFax, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class More extends Component {

  // changeImg = (event) => {
  //   $('.more-big-img').attr('src', $(event.target).attr('src'));
  // }

  hideMore=()=>{
    $('.more').css('display', 'none');
    this.props.hideMore();
  }
  
  // componentDidMount(){
  //   this.imageZoom("myimage", "myresult");
  // }

  // imageZoom(imgID, resultID) {
  //   var img, lens, result, cx, cy;
  //   img = document.getElementById(imgID);
  //   result = document.getElementById(resultID);
  //   /*create lens:*/
  //   lens = document.createElement("DIV");
  //   lens.setAttribute("class", "img-zoom-lens");
  //   /*insert lens:*/
  //   img.parentElement.insertBefore(lens, img);
  //   /*calculate the ratio between result DIV and lens:*/
  //   cx = result.offsetWidth / lens.offsetWidth;
  //   cy = result.offsetHeight / lens.offsetHeight;
  //   /*set background properties for the result DIV:*/
  //   result.style.backgroundImage = "url('" + img.src + "')";
  //   result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  //   /*execute a function when someone moves the cursor over the image, or the lens:*/
  //   lens.addEventListener("mousemove", moveLens);
  //   img.addEventListener("mousemove", moveLens);
  //   /*and also for touch screens:*/
  //   lens.addEventListener("touchmove", moveLens);
  //   img.addEventListener("touchmove", moveLens);
  //   function moveLens(e) {
  //     var pos, x, y;
  //     /*prevent any other actions that may occur when moving over the image:*/
  //     e.preventDefault();
  //     /*get the cursor's x and y positions:*/
  //     pos = getCursorPos(e);
  //     /*calculate the position of the lens:*/
  //     x = pos.x - (lens.offsetWidth / 10);
  //     y = pos.y - (lens.offsetHeight / 10);
  //     /*prevent the lens from being positioned outside the image:*/
  //     if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
  //     if (x < 0) {x = 0;}
  //     if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
  //     if (y < 0) {y = 0;}
  //     /*set the position of the lens:*/
  //     lens.style.left = x + "px";
  //     lens.style.top = y + "px";
  //     /*display what the lens "sees":*/
  //     result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  //   }
  //   function getCursorPos(e) {
  //     var a, x = 0, y = 0;
  //     e = e || window.event;
  //     /*get the x and y positions of the image:*/
  //     a = img.getBoundingClientRect();
  //     /*calculate the cursor's x and y coordinates, relative to the image:*/
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //     /*consider any page scrolling:*/
  //     x = x - window.pageXOffset;
  //     y = y - window.pageYOffset;
  //     return {x : x, y : y};
  //   }
  // }

  render(){
    return (
      <div className='more'>
        <FontAwesomeIcon icon={faTimesCircle} className='more-close' onClick={this.hideMore} />
        <div className='more-img'>
          {/* <div className='more-big-img' style={{ background: `url(${this.props.img}) center/cover no-repeat` }} ></div> */}
          <img src={this.props.img} id='myimage' className='more-big-img' />
          {/* <br/> */}
          {/* <img src={this.props.img} className='more-small-img' onClick={this.changeImg}/>
          <img  className='more-small-img' onClick={this.changeImg}/> */}
        </div>
        <div className='more-info'>
          <h1 className='more-info-name'>{this.props.title}</h1>
          {/* <h1 className='more-info-price'>{this.props.price}
          <FontAwesomeIcon className="more-info-icon" icon={faTags}/>
          </h1> */}
          <table>
            <tr>
              <td className='name'>Marka: </td>
              <td>{this.props.brand}</td>
            </tr>
            <tr>
              <td className='name'>Model: </td>
              <td>{this.props.model}</td>
            </tr>
          </table>
          {/* <div id='myresult' class="img-zoom-result"></div> */}
          <div className='more-contact'>
            <div className="more-contact-knowledge">
              <FontAwesomeIcon icon={faPhoneSquareAlt} className="more-contact-icons"/>
              (+99412)493 75 09</div>
            <div className="more-contact-knowledge">
              <FontAwesomeIcon icon={faMobileAlt} className="more-contact-icons"/>
              (+99470)200 19 73</div>
            <div className="more-contact-knowledge">
              <FontAwesomeIcon icon={faFax} className="more-contact-icons"/>
              (+99412)493 34 46
            </div>
            <div className="more-contact-knowledge">
              <FontAwesomeIcon icon={faEnvelope} className="more-contact-icons"/>
              office@kainatprint.az</div>
            <div className="more-contact-knowledge">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="more-contact-icons"/>
              Azərbaycan, Bakı</div>
          </div>
        </div>
      </div>
    );
  }
}

export default More;
