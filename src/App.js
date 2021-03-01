import React from "react";
import {Route, Switch} from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.scss';
import Catriges from './pages/catriges/Catriges';
import Main from './main/Main';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/catriges' component={Catriges}  />
    </Switch>
  );
}

export default App;
