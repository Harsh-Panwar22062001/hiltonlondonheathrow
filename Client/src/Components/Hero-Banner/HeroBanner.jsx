import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import refdata from './Hero.json'; 

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position:relative;
  
  height:100px;
`;

const Card = styled(motion.div)`
  width: 300px;
 
 
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
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

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const HeroBanner = () => {
  return (
    <Container>
      {refdata.heroBanner.map((item) => ( 
        <Card
          key={item.id}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          <Image src={item.image} alt={item.title} />
          <Content>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <button>{item.buttonText}</button>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default HeroBanner;
