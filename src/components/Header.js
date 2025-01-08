import React, { useEffect, useRef } from "react";
import Navbar from "./Nav";
import '../styles/header.css'

const Header = () => {
  
  return (
    <>
            <ul>
                 <head>
                     <title>Little Lemon</title>
                     <meta name="description" content="Little Lemon is a restaurant that sells Mediterranean food"/>
                     <meta name="og:title" content="Little Lemon"/>
                     <meta name="og:description" content="Little Lemon is a restaurant that sells Mediterranean food"/>
                     <meta name="og:image" content="../images/logo.jpeg"/>
                 </head>
                 <div id="mainheader">
                    <div id="textContainer">
                            <h1 id="headerLittleLemon">Little Lemon</h1>
                            <h2 id="subTitle">Chicago</h2>
                            <p>We are a family owned Mediterranean restaurant, focused <br></br>
                            on traditional recipes served with a modern twist</p>
                            <a id="buttonreserve"><button type="button">Reserve a table</button></a>
                    </div>
                    <div id="imageContainers">
                            <a><img src={require('../images/restauranfood.jpg')} alt="restaurant" width="150" height="250" /></a>
                    </div>
                 </div>

            </ul>
   </>
  );
};
export default Header;
