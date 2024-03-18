import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const RoomBookingPage = ({ room }) => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const navigate = useNavigate(); 

  const handleBooking = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <Container>
      <h2>Room Booking</h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <img src={room.image} alt={room.type} />
        <div>
          <h3>{room.type}</h3>
          <p>Beds: {room.beds}</p>
          <p>Price: ${room.price.toFixed(2)}</p>
        </div>
      </motion.div>
      <BookingForm onSubmit={handleBooking}>
        <Label>
          Check-in Date:
          <Calendar
            onChange={setCheckInDate}
            value={checkInDate}
          />
        </Label>
        <Label>
          Check-out Date:
          <Calendar
            onChange={setCheckOutDate}
            value={checkOutDate}
          />
        </Label>
        <Label>
          Number of Guests:
          <Input
            type="number"
            min="1"
            value={numGuests}
            onChange={(e) => setNumGuests(parseInt(e.target.value))}
          />
        </Label>
        <Label>
          Number of Rooms:
          <Input
            type="number"
            min="1"
            value={numRooms}
            onChange={(e) => setNumRooms(parseInt(e.target.value))}
          />
        </Label>
        <Button type="submit">Book Room</Button>
      </BookingForm>
    </Container>
  );
};

export default RoomBookingPage;
