import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import $ from "jquery"; 

// Katriclər
import Tuba from './pages/detailCards/catridges/Tuba';
import Lazer from './pages/detailCards/catridges/Lazer';
import InkCatridge from './pages/detailCards/catridges/InkCatridge';

// Mürəkkəb və toner
import Ink from './pages/detailCards/inkToner/Ink';
import Toner from './pages/detailCards/inkToner/Toner';

// OverView
import Catridges from './pages/overviewCards/catridges/Catridges';
import SpareParts from './pages/overviewCards/spareParts/SpareParts';
import CatridgeParts from './pages/overviewCards/catridgeParts/CatridgeParts';
import PrinterParts from './pages/overviewCards/printerParts/PrinterParts';

// Katric hissələri
import Baraban from './pages/detailCards/catridgesParts/Baraban';
import MaqnitVal from './pages/detailCards/catridgesParts/MaqnitVal';
import Rakel from './pages/detailCards/catridgesParts/Rakel';
import Karatron from './pages/detailCards/catridgesParts/Karatron';
import Chip from './pages/detailCards/catridgesParts/Chip';

// Printer hissələri
import Businq from './pages/detailCards/printerParts/Businq';
import PaperTaker from './pages/detailCards/printerParts/PaperTaker';
import RubberVal from './pages/detailCards/printerParts/RubberVal';
import Termoplyonka from './pages/detailCards/printerParts/Termoplyonka';
import Termoelement from './pages/detailCards/printerParts/Termoelement';

import About from './companents/about/About';
import Main from './main/Main';

class App extends Component {

  render(){
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About}  />

      <Route exact path='/tuba' component={Tuba}  />
      <Route exact path='/laser' component={Lazer}  />
      <Route exact path='/ink-catridge' component={InkCatridge}  />

      <Route exact path='/ink' component={Ink}  />
      <Route exact path='/toner' component={Toner}  />

      <Route exact path='/catridges' component={Catridges} />
      <Route exact path='/spare-parts' component={SpareParts} />
      <Route exact path='/catridges-parts' component={CatridgeParts} />
      <Route exact path='/printer-parts' component={PrinterParts} />

      <Route exact path='/maqnitVal' component={MaqnitVal} />
      <Route exact path='/baraban' component={Baraban} />
      <Route exact path='/rakel' component={Rakel} />
      <Route exact path='/karatron' component={Karatron} />
      <Route exact path='/chip' component={Chip} />

      <Route exact path='/businq' component={Businq} />
      <Route exact path='/paper-taker' component={PaperTaker} />
      <Route exact path='/rubber-val' component={RubberVal} />
      <Route exact path='/termoplyonka' component={Termoplyonka} />
      <Route exact path='/termoelement' component={Termoelement} />
    </Switch>
  );
}
}

export default App;
