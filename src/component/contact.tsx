import { VStack, Center, Box, Button, useColorModeValue, FormControl, FormLabel, InputGroup, Input, Textarea } from "@chakra-ui/react";

const Contact = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={8} alignItems="center" order={{ base: 3, md: 3 }}>
            <Center>
                <Box w={96} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} p={4} rounded={'md'} overflow={'hidden'}>
                    <VStack spacing={2}>
                        <Button w={"full"}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Github
                        </Button>
                        <Button w={"full"}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Telegram
                        </Button>
                        <Button w={"full"}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Instagram
                        </Button>
                        <Button w={"full"}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                            Linkedin
                        </Button>
                    </VStack>
                </Box>
            </Center>
            <Center>
                <Box w={96} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} p={4} rounded={'md'} overflow={'hidden'}>
                    <VStack spacing={2}>
                        <FormControl id="email">
                            <Input type="text" placeholder="Email" />
                        </FormControl>
                        <FormControl id="msg">
                            <Textarea placeholder="Message" rows={8} />
                        </FormControl>
                        <FormControl id="btn-submit">
                            <Button
                                variant="solid"
                                float="right">
                                Send
                            </Button>
                        </FormControl>
                    </VStack>
                </Box>
            </Center>
        </VStack >
    );
}

export default Contact;