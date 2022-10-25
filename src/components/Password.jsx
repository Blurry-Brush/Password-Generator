import { Container, Flex, Text, Box, Spacer } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CopyIcon } from '@chakra-ui/icons';
import { CloseIcon } from '@chakra-ui/icons';
import PasswordContext from './Context/PasswordContext';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader, 
  PopoverCloseButton,
} from '@chakra-ui/react';

const Password = () => {
  const { password } = useContext(PasswordContext);

  return (
    <Container mt="2" maxW="2xl" bg="#3C4048">
      <Flex alignItems="center" justify="start">
        <Box w="fit-content">
          <Text
            fontWeight="extrabold"
            color="white"
            opacity="0.7"
            fontSize="3xl"
          >
            {password}
          </Text>
        </Box>
        <Spacer />
        <Box w="fit-content">
          <Popover>
            <PopoverTrigger>
              <CopyIcon
                onClick={() => window.navigator.clipboard.writeText(password)}
                _hover={{
                  height: '30px',
                  width: '30px',
                  cursor: 'pointer',
                  color: '#82CD47',
                }}
                h="25px"
                w="25px"
                color="lime.400"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>Succesfully copied to clipboard</PopoverHeader>
              <PopoverCloseButton>
                {' '}
                <CloseIcon></CloseIcon>{' '}
              </PopoverCloseButton>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
    </Container>
  );
};

export default Password;
