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
          this.setState({message:response.data.message});
          this.setState({
              loggedIn:true
          })
          this.props.setUser(response.data.user);
        })
        .catch( (error) =>{
          console.log(error);
          this.setState({message:error.response.data.message})
        });

      }
  render() {
    let error;
    if (this.state.message) {
      error = (
        <div>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{this.state.message}</strong> 
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        </div>
      )
    }
      if (this.state.loggedIn) {
        return <Navigate  to="/profile" />
      }
      if (localStorage.getItem('token')) {
        return <Navigate  to="/profile" />
      }
    return (
      <div><br /><br /><br /><br />
        <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
          <h3 class="text-center">Login Form</h3>
          <form onSubmit={this.formSubmit}>
            {error}
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