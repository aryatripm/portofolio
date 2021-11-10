import { Container, Flex, VStack } from "@chakra-ui/react";

import Navbar from "../src/component/navbar"
import Main from "../src/component/main"
import Contact from "../src/component/contact";
import About from "../src/component/about";

const IndexPage = () => (
  <Container maxW="full" p={0}>
    <Navbar />
    <Flex h={{ base: 'auto', md: '91vh' }} py={0} direction={{ base: 'column', md: 'row' }}>
      <About />
      <Main />
      <Contact />
    </Flex>
  </Container>
);

export default IndexPage;