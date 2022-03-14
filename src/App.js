import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Spacer,
  Container,
  HStack,
} from '@chakra-ui/react';
import theme from './theme';
import NavBar from './NavBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Spacer />
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Text fontSize="5xl">welcome to mealq</Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
            <Spacer />
            <Spacer />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
