import React, { Component } from 'react'
import { Link,Navigate  } from "react-router-dom";
import axios from 'axios';
export class Home extends Component {
      state = {
        email:'',
        password:'',
        token:'',
        meassage:'',

      }
      formSubmit = (e) => {
        e.preventDefault();
        const data ={
          email: this.state.email,
          password: this.state.password,
          token:this.state.token,
        }
        axios.post('/resetpassword',data)
        .then( (response)=> {
        //  console.log(response);
        this.setState({message:response.data.message});
        document.getElementById('forgetform').reset();
        this.setState({
          passwordChanged:true
        })
         
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
    if (this.state.passwordChanged) {
      return <Navigate  to="/login" />
    }
    if (localStorage.getItem('token')) {
      return <Navigate  to="/profile" />
    }
    return (
      <div><br /><br /><br /><br />
        <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
          <h3 class="text-center">Reset Password Form</h3>
          <form onSubmit={this.formSubmit} id="forgetform">
            {error}
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" class="form-control" required 
              onChange={(e)=>{this.setState({email:e.target.value})}}
              />
             </div>
            <div class="form-group">
              <label for="exampleInputPassword1">New Password</label>
              <input type="password" name="password" class="form-control" 
              onChange={(e)=>{this.setState({password:e.target.value})}}
              required/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Pin</label>
              <input type="text" name="token" class="form-control" 
              onChange={(e)=>{this.setState({token:e.target.value})}}
              required/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Reset Password</button><br/>
          </form>
        </div>
        </div>
        </div>
    )
  }
}

export default Home