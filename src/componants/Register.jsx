import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";

 class Register extends Component {
  render() {
    return (
      <div><br /><br /><br /><br />
        <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
          <h3 class="text-center">Registation Forn</h3>
          <form>
          <div class="form-group">
              <label for="exampleInputEmail1">User Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" />
              </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Register</button><br/>
            Have An Account <Link to="/login">Login </Link>
          </form>
        </div>
        </div>
        </div>
    )
  }
}

export default Register