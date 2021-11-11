import {
    VStack, Heading, Text, Circle, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useColorModeValue
} from "@chakra-ui/react";

import { ChevronDownIcon } from '@chakra-ui/icons'


const Main = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={5} alignItems="center" order={{ base: 1, md: 2 }}>
            <Circle size={250} bg={useColorModeValue('gray.100', 'gray.700')} ></Circle>
            <VStack alignItems="center" spacing={0}>
                <Heading>Arya Majiah</Heading>
            </VStack>
            <Menu closeOnBlur={false} closeOnSelect={false} matchWidth={false}>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w={225}>
                    Fullstack Developer
                </MenuButton>
                <MenuList maxW={30} textAlign="center" overflow="inherit">
                    <MenuItem textAlign="center">Python</MenuItem>
                    <MenuItem>Java</MenuItem>
                    <MenuItem>Blender</MenuItem>
                </MenuList>
            </Menu>
        </VStack>
    );
}

export default Main;