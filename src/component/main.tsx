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
        <VStack w="full" h="full" p={4} spacing={5} alignItems="center" order={{ base: 1, xl: 2 }}>
            <Circle size={250} bg={useColorModeValue('gray.200', 'gray.700')} ></Circle>
            <VStack alignItems="center" spacing={0}>
                <Heading>Arya Majiah</Heading>
            </VStack>
            <Menu closeOnBlur={false} closeOnSelect={false} matchWidth={false} direction='rtl'>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w={225} bgColor={useColorModeValue('gray.200', 'gray.700')} _active={{ bgColor: useColorModeValue('gray.200', 'gray.700') }}>
                    Fullstack Developer
                </MenuButton>
                <MenuList w={225} overflow="inherit" bgColor={useColorModeValue('gray.200', 'gray.700')} rounded="2xl" border='0'>
                    <MenuItem>Python</MenuItem>
                    <MenuItem>Java</MenuItem>
                    <MenuItem>Blender</MenuItem>
                </MenuList>
            </Menu>
        </VStack >
    );
}

export default Main;