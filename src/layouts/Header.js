import React, { Component } from 'react';
import logo from '../logo.svg';
import searchIc from '../search-ic.svg'

export default class Header extends Component {
  render() {
    return (
      <header className="page-header bg-dark">
        <nav className="navbar justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} width="50" height="50" alt="logo" />
          </a>
          <ul class="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Menu 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu 3</a>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={searchIc} alt="search icon"/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}


