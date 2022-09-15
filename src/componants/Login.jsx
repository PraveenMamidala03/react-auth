import React, { Component } from 'react'
import { Link,Navigate  } from "react-router-dom";
import axios from 'axios';
 class Login extends Component {

      state = {
        email:'',
        password:'',
        meassage:'',

      }
      formSubmit = (e) => {
        e.preventDefault();
        const data ={
          email: this.state.email,
          password: this.state.password
        }
        axios.post('/login',data)
        .then( (response)=> {
        //  console.log(response);
          localStorage.setItem('token',response.data.token);
          this.setState({
              loggedIn:true
          })
        })
        .catch( (error) =>{
          console.log(error);
        });
      }
  render() {
      if (this.state.loggedIn) {
        return <Navigate  to="/profile" />
      }
    return (
      <div><br /><br /><br /><br />
        <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
          <h3 class="text-center">Login Form</h3>
          <form onSubmit={this.formSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" class="form-control" required 
              onChange={(e)=>{this.setState({email:e.target.value})}}
              />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" class="form-control" 
              onChange={(e)=>{this.setState({password:e.target.value})}}
              required/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button><br/>
            Dont Have An Account <Link to="/register">Register </Link><br/>
            Forget My Password <Link to="/forget">click here </Link>
          </form>
        </div>
        </div>
        </div>
    )
  }
}

export default Login