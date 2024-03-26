import React, { useState } from "react";
import styled from "styled-components";
import "./RoomBooking.css";
import jsonData from "./Book.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: sticky;
marginTop:none ;

  top: 0;
  padding: 20px;
  height: 60px;
`;

const Card = styled.div`
  width: 300px;
  top: 0;
  position: sticky;
  backgroundColor:yellow ;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 255, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  color: #333;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 255, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
`;

const Type = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Beds = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 0.9rem;
`;

const UserInputs = styled.div`
  margin-top: 5px;
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
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border-color: #007bff; /* Focus color */
    box-shadow: 0 0 5px #007bff; /* Focus shadow */
  }
`;

const RoomBooking = () => {
  const [bookingData, setBookingData] = useState(jsonData);

  const handleInputChange = (roomId, field, value) => {
    setBookingData((prevData) => ({
      ...prevData,
      rooms: prevData.rooms.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            userInputs: {
              ...room.userInputs,
              [field]: value,
            },
          };
        }
        return room;
      }),
    }));
  };

  return (
    <>
      <Container className="Container">
        {bookingData.rooms.map((room) => (
          <Card className="Card" key={room.id}>
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
                  onChange={(e) =>
                    handleInputChange(room.id, "checkInDate", e.target.value)
                  }
                />
                <Label>Check-Out Date:</Label>
                <Input
                  type="date"
                  value={room.userInputs.checkOutDate}
                  onChange={(e) =>
                    handleInputChange(room.id, "checkOutDate", e.target.value)
                  }
                />
                <Label>Number of Guests:</Label>
                <Input
                  type="number"
                  value={room.userInputs.numberOfGuests}
                  onChange={(e) =>
                    handleInputChange(
                      room.id,
                      "numberOfGuests",
                      parseInt(e.target.value)
                    )
                  }
                />
                <Label>Number of Rooms:</Label>
                <Input
                  type="number"
                  value={room.userInputs.numberOfRooms}
                  onChange={(e) =>
                    handleInputChange(
                      room.id,
                      "numberOfRooms",
                      parseInt(e.target.value)
                    )
                  }
                />
              </UserInputs>
              <button className="book-now">{room.bookButton}</button>
            </Content>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default RoomBooking;
