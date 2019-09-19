import React, { Component } from 'react'
import Logo from '../assets/logo_white.png';

export default class Header extends Component {

  render() {
    return (
      <div className="header-jumbotron">
        <div className="header-jumbotron--brand">
          <img src={Logo} alt="Logo for
          the ybms app"/>
          <h1 className="text-center text-light">
            <strong>Your Beloves Music and Series</strong>
            </h1>
        </div>
        <div className="header-jumbotron--links">
        <ul className="text-light">
            <li>
              <a href="#">Home</a>
            </li>
            <li >
              <a href="#">Fav</a>
            </li>
        </ul>
        </div>
      </div>


    )
  }
}

