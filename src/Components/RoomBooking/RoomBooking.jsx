import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import roomData from './Book.json';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Card = styled(motion.div)`
  width: 300px; /* Set a fixed width for the card */
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Type = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Beds = styled.p`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
`;

const Feature = styled.li`
  font-size: 14px;
`;

const BookButton = styled.button`
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

const RoomBooking = () => {
  return (
    <Container>
      {roomData.rooms.map(room => (
        <Card
          key={room.id}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
            <BookButton>{room.bookButton}</BookButton>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default RoomBooking;
