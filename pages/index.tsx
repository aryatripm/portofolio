import { Container, Flex, VStack } from "@chakra-ui/react";

import Navbar from "../src/component/navbar"
import Main from "../src/component/main"
import Contact from "../src/component/contact";
import About from "../src/component/about";
import Footer from "../src/component/footer";

const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Navbar />
    <Flex maxW='full' h={{ base: 'auto', xl: 'auto' }} py={0} direction={{ base: 'column', xl: 'row' }}>
      <About />
      <Main />
      <Contact />
    </Flex>
    <Footer />
  </Container>
);

export default IndexPage;