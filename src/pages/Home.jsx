import React from 'react';
import { Container,Text } from '@chakra-ui/react';
import Password from '../components/Password';
import Form from '../components/Form';

const Home = () => {
  return (
    //mt -20%
    <Container maxW="2xl" bg="#100F0F" centerContent >
      <Text color="#3C4048" fontWeight="bold" letterSpacing="wider">
        Password Generator
      </Text>
      <Password />
      <Form />
    </Container>
  );
};

export default Home;
