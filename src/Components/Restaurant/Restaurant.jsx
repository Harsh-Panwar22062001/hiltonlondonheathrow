import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import restaurantData from './Dishes.json';
import './Restaurant.css'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height:80px;
  padding: 20px; /* Add padding to the container */
  margin-top: 20px; /* Add margin to separate from the top of the screen */
  box-sizing: border-box;
`;

const Card = styled(motion.div)`
  width: 300px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
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

const Name = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.span`
  color: #ffc107;
  margin-right: 5px;
`;

const RestaurantMenu = () => {
  return (
    <Container>
      {restaurantData.dishes.map((dish, index) => (
        <Card
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.1 }}
        >
          <Image src={dish.image} alt={dish.name} />
          <Content>
            <Name>{dish.name}</Name>
            <Description>{dish.description}</Description>
            <Price>Price: ${dish.price.toFixed(2)}</Price>
            <Rating>
              {[...Array(Math.floor(dish.rating))].map((_, i) => (
                <StarIcon key={i}>★</StarIcon>
              ))}
            </Rating>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default RestaurantMenu;
