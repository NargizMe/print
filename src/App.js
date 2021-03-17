import React from "react";
import {Route, Switch} from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.scss';
import Tuba from './pages/catriges/Tuba';
import Lazer from './pages/catriges/Lazer';
import Ink from './pages/catriges/Ink';
import About from './companents/about/About';
import Main from './main/Main';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/tuba' component={Tuba}  />
      <Route exact path='/laser' component={Lazer}  />
      <Route exact path='/ink' component={Ink}  />
      <Route exact path='/about' component={About}  />
    </Switch>
  );
}

export default App;
