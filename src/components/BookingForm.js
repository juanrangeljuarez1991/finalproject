import React, { useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    var timeSelected = false;
    
    const [nguests, setNguests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [showBooking, setShowBooking] = useState(false);

    
    const optionsOccasion = [
        {value: "Birthday"},
        {value: "Anniversary"}
    ]

    console.log(date);
    console.log(nguests);
    const handleTime = (e) => {
        console.log(e.target.label);
        props.setTime(e.target.value);
        timeSelected = true;
    }

    const handleBooking = () => {
        setShowBooking(true);
        alert("Booked");
    };

    const handleOccasion = (e) =>{
        console.log(e.target.value);
        setOccasion(e.target.value);
    }

    return (
            <div>
                  <h4>Booking portal</h4>
                <form>
                    <div data-testid="todo-1">
                        <label for="res-date">Choose date</label>
                        <input value={date} type="date" id="res-date" onChange={ e=>setDate(e.target.value) }/>
                    </div>
                     <div>
                        <label for="res-time">Choose time</label>
                        <select id="res-time" value={props.availableTimes} onChange={handleTime}>
                            { props.availableTime.map(option => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                     </div>
                    <div>
                        <label for="guests">Number of guests</label>
                        <input value={nguests} type="number" placeholder="1" min="1" max="10" id="guests" onChange={ e=>setNguests(e.target.value)}/>
                    </div>
                    <div>
                        <label for="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={handleOccasion}>
                            { optionsOccasion.map(option => (
                                <option value={option.value}>{option.value}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button onClick={handleBooking}>Make Your reservation</button>
                        {showBooking && <ConfirmedBooking />}
                    </div>
                </form>
            </div>
    );
  };
  export default BookingForm;