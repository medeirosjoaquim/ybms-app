import React, { Component } from 'react'
import Logo from '../assets/logo_white.png';
import { NavLink } from 'react-router-dom'

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
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Movies/Series</a>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/about">About</NavLink>
            </li>
        </ul>
        </div>
      </div>


    )
  }
}

