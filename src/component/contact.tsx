import { VStack, Center, Box, Button, useColorModeValue, FormControl, FormLabel, InputGroup, Input, Textarea } from "@chakra-ui/react";

const Contact = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={8} alignItems="center">
            <Center>
                <Box w="full" bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} p={4} rounded={'md'} overflow={'hidden'}>
                    <VStack spacing={2}>
                        <Button w={225} bg={useColorModeValue('#151f21', 'gray.900')} color={'white'} rounded={'md'}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Github
                        </Button>
                        <Button w={225} bg={useColorModeValue('#151f21', 'gray.900')} color={'white'} rounded={'md'}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Telegram
                        </Button>
                        <Button w={225} bg={useColorModeValue('#151f21', 'gray.900')} color={'white'} rounded={'md'}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Instagram
                        </Button>
                        <Button w={225} bg={useColorModeValue('#151f21', 'gray.900')} color={'white'} rounded={'md'}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Linkedin
                        </Button>
                    </VStack>
                </Box>
            </Center>
            <Center>
                <Box w={300} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} p={4} rounded={'md'} overflow={'hidden'}>
                    <VStack spacing={2}>
                        <FormControl id="email">
                            <InputGroup borderColor="#E0E1E7">
                                <Input type="text" size="md" placeholder="Email" />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="msg">
                            <Textarea
                                borderColor="gray.300"
                                _hover={{
                                    borderRadius: 'gray.300',
                                }}
                                placeholder="Message"
                            />
                        </FormControl>
                        <FormControl id="btn-submit">
                            <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}>
                                Send
                            </Button>
                        </FormControl>
                    </VStack>
                </Box>
            </Center>
        </VStack>
    );
}

export default Contact;