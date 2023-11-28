import React from "react";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png";

export default function Navigation () {

    return (
        <nav className="nav">
            <img src={logo} className="nav-logo" />
            <h3 className="nav-logo_text">ReactFacts</h3>
            <p className="nav-title">React Couse - Project 1</p>
            <p className="nav-title">Home</p>
            <p className="nav-title">Contact</p>


                

        </nav>

      
    );


}