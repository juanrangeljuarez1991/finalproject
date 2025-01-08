import React from 'react'
import '../styles/nav.css'
import Homepage from "./Homepage.js"
import Specials from './Specials.js'
import Customersay from "./customersay.js"
import Chicago from "./Chicago.js"
import { Routes, Route, Link } from 'react-router-dom'


const Navbar = () => {
  
    return (
        <div className='navbar'>
            <ul>
                <nav className='nav'>
                    <a><img src={require('../images/logo.jpeg')} width="200" height="50" /></a>
                    <Link to="#">Home</Link>
                    <Link to="/specials">Specials</Link>
                    <Link to="/customersay">CustomerSay</Link>
                    <Link to="/chicago">Chicago</Link>
                    <a>Logs</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/specials" element={<Specials />} />
                    <Route path="/customersay" element={<Customersay />} />
                    <Route path="/chicago" element={<Chicago />} />
                </Routes>
            </ul>
        </div>
    );
  };
  export default Navbar;