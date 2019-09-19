import React, { Component } from 'react'
import Logo from '../assets/logo_white.png';

export default class Header extends Component {

  render() {
    return (
      <div className="header-jumbotron">
        <div className="header-jumbotron--brand">
          <img src={Logo} alt="Logo for
          the ybms app"/>
          <h1 className="header-jumbotron--title text-center text-light">
            <strong>Your Beloves Music and Series</strong>
            </h1>
        </div>
        <div className="header-jumbotron--links">
        <ul className="text-light">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Favorites</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Movies/Series</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">About</a>
            </li>
        </ul>
        </div>
      </div>


    )
  }
}

