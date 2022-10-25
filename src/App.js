import React from 'react';
import Home from './pages/Home';
import { ChakraProvider, Center, extendTheme } from '@chakra-ui/react';
import '@fontsource/space-mono';
import { PasswordProvider } from './components/Context/PasswordContext';

const theme = extendTheme({
  fonts: {
    heading: `'Space Mono', monospace`,
    body: `'Space Mono', monospace`,
  },
  colors: {
    lime: {
      50: '#dcffcc',
      100: '#defcb2',
      200: '#caf884',
      300: '#b5f554',
      400: '#a1f226',
      500: '#88d90d',
      600: '#69a905',
      700: '#4a7801',
      800: '#2b4800',
      900: '#0b1900',
    },
  },
});

function App() {
  return (
    <PasswordProvider>
      <ChakraProvider theme={theme}>
        <Center bg={'#100F0F'} height={'100vh'} width={'100vw'}>
          <Home />
        </Center>
      </ChakraProvider>
    </PasswordProvider>
  );
}

export default App;
