import React, { Component } from 'react'
import { BrowserRouter as Navigate, Link } from "react-router-dom";
import axios from 'axios';
 class Forget extends Component {

      state={
          email:'',
          message:''
      }
      formSubmit = (e) =>{
        e.preventDefault();
        const data={
             email:this.state.email,
        }

        axios.post('/forgetpassword',data)
           .then((response) => {
            console.log(response);
            this.setState({message:response.data.message})
            document.getElementById('forgetform').reset();
           })
           .catch((error) => {
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
    if (localStorage.getItem('token')) {
      return <Navigate  to="/profile" />
    }
    return (
      <div><br /><br /><br /><br />
      <div class="row">
      <div class="jumbotron col-lg-4 offset-lg-4">
        <h3 class="text-center">Forget Form</h3>
        <form onSubmit={this.formSubmit} id="forgetform">
          {error}
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name='email'
               onChange={(e)=>{this.setState({email:e.target.value})}} 
            />
            
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