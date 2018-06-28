import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand">My App</a>
        </nav>
      </div>
    )
  }
}
