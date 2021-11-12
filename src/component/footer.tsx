import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" fontSize='sm' opacity={0.5} p={1}>
            &copy; {new Date().getFullYear()} Arya Majiah. All Rights Reserved.
        </Box>
    );
}

export default Footer;