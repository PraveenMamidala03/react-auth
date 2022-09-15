import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../componants/Home';
import Login from '../componants/Login';
import Register from '../componants/Register';
import Forget from '../componants/Forget';
import Profile from '../componants/Profile';

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
class Header extends Component {
  render() {
    return (
        
        <Router>
            <div>
            <Nav/>
            <Routes>
                 <Route exact path="/" element={<Home/>} />
                 <Route exact path="/login" element={<Login/>} />
                 <Route exact path="/register" element={<Register/>} />
                 <Route exact path="/forget" element={<Forget/>} />
                 <Route exact path="/profile" element={<Profile/>} />
            </Routes>
            </div>
        </Router>
    )
  }
}

export default Header