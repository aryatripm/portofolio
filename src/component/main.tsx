import {
    VStack, Heading, Text, Circle, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from "@chakra-ui/react";

import { ChevronDownIcon } from '@chakra-ui/icons'


const Main = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={5} alignItems="center">
            <Circle size={200} bg="gray.200"></Circle>
            <VStack alignItems="center" spacing={0}>
                <Text fontSize="3xl">Name</Text>
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