import React, { useState } from 'react';
import styled from 'styled-components';
import './RoomBooking.css'
import jsonData from './Book.json'; // Assuming your JSON data is in a file named Book.json

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  height:60px;
`;

const Card = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 255, 0.2); /* Bluish shadow */
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  font-family: 'Arial', sans-serif; /* Beautiful font */
  color: #333; /* Beautiful font color */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 255, 0.3); /* Hover effect with stronger bluish shadow */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Type = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Beds = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 0.9rem;
`;

const UserInputs = styled.div`
  margin-top: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #007bff; /* Focus color */
    box-shadow: 0 0 5px #007bff; /* Focus shadow */
  }
`;

const RoomBooking = () => {
  const [bookingData, setBookingData] = useState(jsonData);

  const handleInputChange = (roomId, field, value) => {
    setBookingData(prevData => ({
      ...prevData,
      rooms: prevData.rooms.map(room => {
        if (room.id === roomId) {
          return {
            ...room,
            userInputs: {
              ...room.userInputs,
              [field]: value
            }
          };
        }
        return room;
      })
    }));
  };

  return (
    <>

<Container>
      {bookingData.rooms.map(room => (
        <Card key={room.id}>
          <Image src={room.image} alt={room.type} />
          <Content>
            <Type>{room.type}</Type>
            <Beds>Beds: {room.beds}</Beds>
            <Price>Price: ${room.price.toFixed(2)}</Price>
            <Features>
              {room.features.map((feature, index) => (
                <Feature key={index}>{feature}</Feature>
              ))}
            </Features>
            <UserInputs>
              <Label>Check-In Date:</Label>
              <Input
                type="date"
                value={room.userInputs.checkInDate}
                onChange={(e) => handleInputChange(room.id, 'checkInDate', e.target.value)}
              />
              <Label>Check-Out Date:</Label>
              <Input
                type="date"
                value={room.userInputs.checkOutDate}
                onChange={(e) => handleInputChange(room.id, 'checkOutDate', e.target.value)}
              />
              <Label>Number of Guests:</Label>
              <Input
                type="number"
                value={room.userInputs.numberOfGuests}
                onChange={(e) => handleInputChange(room.id, 'numberOfGuests', parseInt(e.target.value))}
              />
              <Label>Number of Rooms:</Label>
              <Input
                type="number"
                value={room.userInputs.numberOfRooms}
                onChange={(e) => handleInputChange(room.id, 'numberOfRooms', parseInt(e.target.value))}
              />
            </UserInputs>
            <button className='book-now'>{room.bookButton}</button>
          </Content>
        </Card>
      ))}
    </Container>


    </>
    

    
  );
};

export default RoomBooking;
