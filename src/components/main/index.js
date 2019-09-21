import React from 'react';
import '../../styles/App.scss';
import { Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Favorites from '../Favorites';
import About from '../About';
import Home from '../Home';
import RedirectLink from '../RedirectLink'


const Main = () => {
  const {isLogged} = useSelector(state => state);
  return (
    <div className="ybms-main">
      {isLogged ?
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/favorites' component={Favorites} />
        <Route path='/about' component={About}/>
      </Switch>
        : <RedirectLink/>}
 </div>
  )
}

export default Main
