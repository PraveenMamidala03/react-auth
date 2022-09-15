import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">Learing</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/profile">Profile </Link>
            </li>
            </ul>
            <span class="navbar-text">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/register">Register</Link>
            </li>
            </ul>
            </span>
        </div>
        </nav>
      </div>
    )
  }
}

export default Nav