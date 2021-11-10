import { Stack, Container, Box, Button, Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Flex bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'60px'} py={2} px={2} align={'center'}>
                <Container as={Stack} flex={{ base: 1, md: 0 }} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }} direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Button href={'#'} variant="outline" colorScheme="purple" isDisabled>
                        Blog
                    </Button>
                    <Button href={'#'} variant="solid" colorScheme="purple">
                        Home
                    </Button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Container>
            </Flex>
        </Box >
    );
}

export default Navbar;