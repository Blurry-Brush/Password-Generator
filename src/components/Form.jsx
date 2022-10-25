import { Button, Container, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { uppercase, lowercase, symbols, numbers, shuffle } from '../helper';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useContext, useEffect } from 'react';
import PasswordContext from './Context/PasswordContext';
const Form = () => {
  const {
    password,
    setPassword,
    passwordLength,
    setPasswordLength,
    includeUppercase,
    setIncludeUppercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    includeLowercase,
    setIncludeLowercase,
    setStrength,
    strength,
    strengthColor,
    setStrengthColor
  } = useContext(PasswordContext);


  useEffect(() => {
    let counter = 0;
    if(includeUppercase){
      counter++;
    }
    if(includeNumbers){
      counter++;
    }
    if(includeSymbols){
      counter++;
    }
    if(includeLowercase){
      counter++;
    }

    switch(counter){
      case 1:
        setStrength('Weak');
        setStrengthColor('white');
        break;
      case 2:
        setStrength('Medium');
        setStrengthColor('green');
        break;
      case 3:
        setStrength('Strong');
        setStrengthColor('orange');
        break;
      case 4:
        setStrength('Very Strong');
        setStrengthColor('red');
        break;
      default:
        setStrength('Weak');
        setStrengthColor('white');
        break;
    }
  },[includeLowercase, includeNumbers, includeSymbols, includeUppercase, password, setStrength, setStrengthColor])

  // useEffect(()=> {
  //   alert(`includeUppercase: ${includeUppercase} includeNumbers: ${includeNumbers} includeSymbols: ${includeSymbols} includeLowercase: ${includeLowercase}`);
  // },[includeUppercase,includeNumbers,includeSymbols,includeLowercase]);

  const handleSubmit = () => {
    let finalArray = [];
    if (includeUppercase) finalArray.push(...uppercase);
    if (includeLowercase) finalArray.push(...lowercase);
    if (includeNumbers) finalArray.push(...numbers);
    if (includeSymbols) finalArray.push(...symbols);
    finalArray = shuffle(finalArray);



    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += finalArray[Math.floor(Math.random() * finalArray.length)];
    }
    setPassword(password);
  };

  return (
    <Container mt="5" maxW="2xl" bg="#3C4048">
      <Flex mt="3" align="center">
        <Text color="white" opacity="0.8" fontWeight="semibold">
          Character Length
        </Text>
        <Spacer />
        <Text color="lime.400" fontWeight="bold" fontSize="2xl">
          {passwordLength}
        </Text>
      </Flex>

      <Slider
        mt="3"
        mb="3"
        onChange={val => setPasswordLength(val)}
        aria-label="slider-ex-1"
        colorScheme="lime"
        defaultValue={passwordLength}
        min={0}
        max={20}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <CheckboxGroup colorScheme={'lime'} defaultValue={['uppercase']}>
        <Stack direction={'column'} spacing="2">
          <Checkbox
            spacing="1rem"
            color="white"
            opacity="0.8"
            value="uppercase"
            checked={includeUppercase}
            onChange={e => setIncludeUppercase(e.target.checked)}
            defaultChecked
          >
            Include Uppercase Letters
          </Checkbox>
          <Checkbox
            spacing="1rem"
            color="white"
            opacity="0.8"
            value="lowercase"
            checked={includeLowercase}
            onChange={e => setIncludeLowercase(e.target.checked)}
          >
            Include Lowercase Letters
          </Checkbox>
          <Checkbox
            spacing="1rem"
            color="white"
            opacity="0.8"
            value="numbers"
            checked={includeNumbers}
            onChange={e => setIncludeNumbers(e.target.checked)}
          >
            Include Numbers
          </Checkbox>
          <Checkbox
            spacing="1rem"
            color="white"
            opacity="0.8"
            value="symbols"
            checked={includeSymbols}
            onChange={e => setIncludeSymbols(e.target.checked)}
          >
            Include Symbols
          </Checkbox>
        </Stack>
      </CheckboxGroup>

      <Flex bg="#100F0F" p="2" mb="2" mt="4" align={'center'}>
        <Text
          ml="2"
          color="white"
          opacity="0.4"
          fontSize={'lg'}
          letterSpacing="widest"
          textTransform={'uppercase'}
        >
          Strength
        </Text>
        <Spacer />
        <Text color={strengthColor} fontSize="xl" opacity="0.7">
          {strength}
        </Text>
      </Flex>

      <Button onClick={handleSubmit} w={'full'} h="16" colorScheme="lime" rounded="none" mt="3" mb="5">
        <Text>Generate Password</Text>
        <ArrowForwardIcon fontSize={'xl'} ml={'2'} />
      </Button>

      <Text pb="4" align={'center'} color="pink.600">Made by Blurry Brush</Text>
    </Container>
  );
};

export default Form;
