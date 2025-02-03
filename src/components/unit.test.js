import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';



test('test', () => {

    expect(true).toBe(true);
    
   render(<BookingForm/>);
   const headingElement = screen.getByText("Booking portal");
    expect(headingElement).toBeInTheDocument();

   
    const initializeTimes  = screen.getByText("17:00");
    expect(initializeTimes).toBeInTheDocument();

    const updateTimes  = screen.getByText("17:00");
    expect(updateTimes).toBeInTheDocument();
    
})

