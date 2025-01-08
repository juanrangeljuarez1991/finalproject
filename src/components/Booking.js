import React from "react";
import '../styles/booking.css'

const Booking = () => {
    return (
        <div className="containerBooking">
            <h4>Booking portal</h4>
            <p id="questions">Please select when you want to book</p>
            <input type="datetime-local"></input>
            <a id="buttonreserve"><button type="button">Submit</button></a>
        </div>
    );
  };
  export default Booking;