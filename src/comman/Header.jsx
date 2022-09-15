import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../componants/Home';
import Login from '../componants/Login';
import Register from '../componants/Register';
import Forget from '../componants/Forget';
import Profile from '../componants/Profile';

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import axios from 'axios';

class Header extends Component {

    state = {
        user:{}
    }

    componentDidMount(){
      axios.get('/user')
      .then( (response)=> {
        this.setUser(response.data)
      })
      .catch( (error) =>{
        console.log(error);
      });
    }

    setUser = (user) =>{
      this.setState({user:user})
    }


  render() {
    return (
        
        <Router>
            <div>
            <Nav user={this.state.user} setUser={this.setUser} />
            <Routes>
                 <Route exact path="/" element={<Home/>} />
                 <Route exact path="/login" element={<Login/>} />
                 <Route exact path="/register" element={<Register/>} />
                 <Route exact path="/forget" element={<Forget/>} />
                 <Route exact path="/profile" element={<Profile user={this.state.user}/>} />
            </Routes>
            </div>
        </Router>
    )
  }
}

export default Header