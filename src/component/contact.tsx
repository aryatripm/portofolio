import { VStack, Center, Box, Button, useColorModeValue, FormControl, FormLabel, InputGroup, Input, Textarea } from "@chakra-ui/react";

const Contact = () => {
    return (
        <VStack w="full" h="full" p={4} spacing={8} alignItems="center" order={{ base: 3, xl: 3 }}>
            <Center>
                <Box w={96} bg={useColorModeValue('gray.200', 'gray.700')} boxShadow={'2xl'} rounded={'2xl'} p={6} overflow={'hidden'}>
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
                <Box w={96} bg={useColorModeValue('gray.200', 'gray.700')} boxShadow={'2xl'} rounded={'2xl'} p={6} overflow={'hidden'}>
                    <VStack spacing={2}>
                        <FormControl id="email">
                            <Input type="text" placeholder="Email" variant='filled' focusBorderColor='purple.700' rounded='full' _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }} />
                        </FormControl>
                        <FormControl id="msg">
                            <Textarea placeholder="Message" rows={6} variant='filled' focusBorderColor='purple.700' rounded='3xl' _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }} />
                        </FormControl>
                        <FormControl id="btn-submit">
                            <Button
                                variant="solid"
                                float="right"
                                colorScheme="purple">
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