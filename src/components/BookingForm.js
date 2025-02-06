import React, { useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    //var timeSelected = false;
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    var countButton = 0;
    const [ncounter, setNcounter] = useState(0);
    
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
        //console.log(e.target.label);
        setDate(e.target.value);
    }

    const handleBooking = () => {
        setShowBooking(true);
    };

    const validateButton = () => {
        countButton = countButton + 2;
       // setNcounter(ncounter+1);
        if(countButton > 0){
            setIsButtonEnabled(true); 
        }
    };

    const handleOccasion = (e) =>{
        setOccasion(e.target.value);
        countButton = countButton + 2;
        setNcounter(ncounter+1);
        console.log("C "+countButton + " Z "+ncounter);
        if(countButton > 0){
            setIsButtonEnabled(true); 
        }
    }

    const getTime = (e) => {
        setDate(e.target.value);
        countButton = countButton + 2;
        setNcounter(ncounter+1);
        if(countButton > 0){
            setIsButtonEnabled(true); 
        }
    }

    const getGuests = (e) => {
        setNguests(e.target.value);
        if(nguests > 0){
            countButton = countButton + 2;
            setNcounter(ncounter+1);
        }
        if(countButton > 0){
            setIsButtonEnabled(true); 
        }
    }

    return (
            <div>
                  <h4>Booking portal</h4>
                <form>
                    <div data-testid="todo-1">
                        <label for="res-date">Choose date</label>
                        <input value={date} type="date" id="res-date" onChange={ getTime }/>
                    </div>
                     <div>
                        <label for="res-time">Choose time</label>
                        <select id="res-time" value={props.availableTimes} onChange={ () =>{
                            handleTime()
                            validateButton()
                        }
                        }>
                            { props.availableTime.map(option => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                     </div>
                    <div>
                        <label for="guests">Number of guests</label>
                        <input value={nguests} type="number" placeholder="1" min="1" max="10" id="guests" onChange={ getGuests }/>
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
                        <button disabled={!isButtonEnabled} onClick={handleBooking}>Make Your reservation</button>
                        {showBooking && <ConfirmedBooking />}
                    </div>
                </form>
            </div>
    );
  };
  export default BookingForm;