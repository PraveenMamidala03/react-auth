import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";

 class Forget extends Component {
  render() {
    return (
      <div><br /><br /><br /><br />
      <div class="row">
      <div class="jumbotron col-lg-4 offset-lg-4">
        <h3 class="text-center">Forget Form</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit</button><br/>
          Dont Have An Account <Link to="/register">Register </Link><br></br>
          Have An Account <Link to="/login">Login </Link> 

        </form>
      </div>
      </div>
      </div>
    )
  }
}

export default Forget