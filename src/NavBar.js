import { Flex, Button, HStack, chakra } from '@chakra-ui/react';

import React from 'react';
const CTA = 'Get Started';
export default function NavBar() {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="3"
        align="center"
        justify="space-between"
        position="fixed"
        top={0}
        sx={{ backdropFilter: 'blur(10px)' }}
      >
        <HStack as="nav" spacing="5"></HStack>
        <HStack>
          <Button>{CTA}</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
