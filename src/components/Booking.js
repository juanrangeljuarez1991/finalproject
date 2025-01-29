import React from "react";
import BrookingForm from './BookingForm';
import '../styles/booking.css'
import { useState } from "react";


const Booking = (props) => {
   
    return (
        <div className="containerBooking">
            <BrookingForm availableTimes={props.availableTimes} setTime={props.setTime} availableTime={props.availableTime}/>
        </div>
    );
  };
  export default Booking;