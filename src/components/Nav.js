import React from 'react'
import '../styles/nav.css'

const Navbar = () => {
  
    return (
        <div className='navbar'>
            <ul>
                <a><img src={require('../images/logo.jpeg')} width="200" height="50" /></a>
                <a>Home</a>
                <a>About</a>
                <a>Menu</a>
                <a>Reservations</a>
                <a>Order Online</a>
                <a>Logs</a>
            </ul>
        </div>
    );
  };
  export default Navbar;