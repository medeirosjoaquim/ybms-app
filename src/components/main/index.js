import React from 'react';
import '../../styles/App.scss';
import { Switch, Route } from 'react-router-dom'
import Favorites from '../Favorites';
import About from '../About';
import Home from '../Home';

const Main = () =>
   <div className="ybms-main">
      <Switch>
      <Route exact path='/home' component={Home}/>
         <Route exact path='/favorites' component={Favorites} />
        <Route path='/about' component={About}/>
      </Switch>
   </div>
export default Main
