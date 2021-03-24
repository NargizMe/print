import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.scss';
import $ from "jquery"; 

import Tuba from './pages/detailCards/catridges/Tuba';
import Lazer from './pages/detailCards/catridges/Lazer';
import Ink from './pages/detailCards/inkToner/Ink';
import Toner from './pages/detailCards/inkToner/Toner';

import Catridges from './pages/overviewCards/catridges/Catridges';
import CatridgeParts from './pages/overviewCards/catridgeParts/CatridgeParts';
import PrinterParts from './pages/overviewCards/printerParts/PrinterParts';

import Baraban from './pages/detailCards/catridgesParts/Baraban';
import MaqnitVal from './pages/detailCards/catridgesParts/MaqnitVal';
import Rakel from './pages/detailCards/catridgesParts/Rakel';

import Businq from './pages/detailCards/printerParts/Businq';
import PaperTaker from './pages/detailCards/printerParts/PaperTaker';
import RubberVal from './pages/detailCards/printerParts/RubberVal';

import About from './companents/about/About';
import Main from './main/Main';

class App extends Component {
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $(".up").css("color","var(--primaryColor)");
    } 
    else{
      $(".up").css("color","var(--mainBlack)");
    }
  };

  render(){
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About}  />

      <Route exact path='/tuba' component={Tuba}  />
      <Route exact path='/laser' component={Lazer}  />
      <Route exact path='/ink' component={Ink}  />
      <Route exact path='/toner' component={Toner}  />

      <Route exact path='/catridges' component={Catridges} />
      <Route exact path='/catridges-parts' component={CatridgeParts} />
      <Route exact path='/printer-parts' component={PrinterParts} />

      <Route exact path='/maqnitVal' component={MaqnitVal} />
      <Route exact path='/baraban' component={Baraban} />
      <Route exact path='/rakel' component={Rakel} />

      <Route exact path='/businq' component={Businq} />
      <Route exact path='/paper-taker' component={PaperTaker} />
      <Route exact path='/rubber-val' component={RubberVal} />
    </Switch>
  );
}
}

export default App;
