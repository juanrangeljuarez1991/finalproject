
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import './styles/nav.css'
import Homepage from "./components/Homepage.js"
import Specials from './components/Specials.js'
import Customersay from "./components/customersay.js"
import Chicago from "./components/Chicago.js"
import Booking from './components/Booking.js'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";
import { useReducer } from 'react';

function updateTimes (){
  const availableTime = [
    {value: "17:00", label:"17:00"},
    {value: "18:00", label:"18:00"},
    {value: "19:00", label:"19:00"},
    {value: "20:00", label:"20:00"},
    {value: "21:00", label:"21:00"},
    {value: "22:00", label:"22:00"}
  ]
   return availableTime;
}

function initializeTimes (){
  return '';
}

function App() {
  const [availableTimes, setTime] = useReducer("");
  const availableTime = [
      {value: "17:00", label:"17:00"},
      {value: "18:00", label:"18:00"},
      {value: "19:00", label:"19:00"},
      {value: "20:00", label:"20:00"},
      {value: "21:00", label:"21:00"},
      {value: "22:00", label:"22:00"}
  ]
  return (
      
        <main>
            <div className='navbar'>
                  <ul>
                      <nav className='nav'>
                          <a><img src={require('./images/logo.jpeg')} width="200" height="50" /></a>
                          <Link to="/">Home</Link>
                          <Link to="/specials">Specials</Link>
                          <Link to="/customersay">CustomerSay</Link>
                          <Link to="/chicago">Chicago</Link>
                          <Link to="/booking">Booking</Link>
                      </nav>
                      <Routes>
                          <Route path="/" element={<Homepage />} />
                          <Route path="/specials" element={<Specials />} />
                          <Route path="/customersay" element={<Customersay />} />
                          <Route path="/chicago" element={<Chicago />} />
                          <Route path="/booking" element={<Booking availableTimes={availableTimes} setTime={setTime} availableTime={availableTime}/>} />
                      </Routes>
                  </ul>
              </div>
          
          <Footer />
       </main>

  );
}

export default App;

/*
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer"
<img src={require('./components/restaurant.jpg')} />

function App() {
  return (   
      <main>
        <Header />
        <Nav />
        <Main />
        <Footer/>
      </main>
  );
}

export default App;

*/
