import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

//CSS includes
import '../CSS/Header.css';

//imports
import websiteLogo from "../Images/logo2.png"


function Header() {

    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container px-8">
                    
                    <Link className="navbar-brand" to="/">
                        <div className="d-flex">
                            <img src={websiteLogo} id="websitelogo"></img>
                            <h3 className="mt-1 pt-1 ms-3" style={{ fontFamily:'serif',  fontWeight:'900' }}>DOCTECH</h3>
                        </div>
                    </Link>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <Link className="nav-link mx-2" to="/">Home</Link>
                            </li>                           
                            <Link to="/admin">
                                <li className="nav-item mx-2">
                                    <button type="button" class="btn btn-primary rounded-pill">Admin </button>
                                </li>
                            </Link>
                            <Link to="/doctor/dlogin">
                                <li className="nav-item mx-2">
                                    <button type="button" class="btn btn-warning rounded-pill">Doctor</button>
                                </li>
                            </Link>
                            <Link to="/patient/login">
                                <li className="nav-item mx-2">
                                    <button type="button" class="btn btn-warning rounded-pill">Patient</button>
                                </li>
                            </Link>                           
                                <Link to="/pathalogy/pathlogin">
                                    <li className="nav-item mx-2">
                                    <button type="button" class="btn btn-warning rounded-pill">Pathology</button>
                                </li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header