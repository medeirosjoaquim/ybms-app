import React from 'react';
import '../../styles/App.scss';
import { Switch, Route } from 'react-router-dom'

const Main = () =>
   <div className="ybms-main">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
   </div>
export default Main
