import React, { Component } from 'react'
import Logo from '../assets/logo_white.png';
import { NavLink } from 'react-router-dom'
import { requestMoviesAndSeriesList } from '../actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


class Header extends Component {
  componentDidMount() {
    this.props.requestMoviesAndSeriesList();
  }
  render() {
    return (
      <div className="header">
        <div className="header--brand">
          <img src={Logo} alt="Logo for
          the ybms app"/>
          <h1 className="header--title text-center font-weight-bold">
            <strong>Your Beloved Music and Series</strong>
            </h1>
        </div>
        <div className="header--links">
        <ul className="text-light font-weight-bold">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/favorites">Favorites</NavLink>
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

const mapStateToProps = state => ({ testeDataRequest: state.testeDataRequest });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestMoviesAndSeriesList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);