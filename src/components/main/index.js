import React from 'react';
import '../../styles/App.scss';
import { Switch, Route } from 'react-router-dom'
import Favorites from '../Favorites';
import About from '../About';
import Home from '../Home';
import MoviesAndSeries from '../movies_and_series';

const Main = () =>
 <div className="ybms-main">
   <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/favorites' component={Favorites} />
    <Route exact path='/movies-and-series' component={MoviesAndSeries} />
    <Route path='/about' component={About}/>
  </Switch>
 </div>
export default Main
