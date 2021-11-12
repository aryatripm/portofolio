import React from "react";
import { Stack, VStack, Center, Box, useColorModeValue, UnorderedList, ListItem, Image, IconButton, useBreakpointValue, Heading, Text, Container, } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Slider from 'react-slick';


const About = () => {

    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({ base: '50%', md: '50%' });
    const side = useBreakpointValue({ base: '10%', md: '10%' });

    const cards = [
        {
            title: 'Weather App',
            text:
                "Java, Kotlin",
            image:
                'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
            title: 'Movies App',
            text:
                "Java",
            image:
                'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
        }
    ];

    return (
        <VStack w="full" h="full" p={4} spacing={8} alignItems="center" order={{ base: 2, xl: 1 }}>
            <Center>
                <Box p={6} minH={36} maxW={96} w={96} bg={useColorModeValue('gray.200', 'gray.700')} boxShadow={'2xl'} rounded={'2xl'}  >
                    <UnorderedList>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                    </UnorderedList>
                </Box>
            </Center>
            <Center>
                <Box p={6} maxW={96} w={'full'} bg={useColorModeValue('gray.200', 'gray.700')} boxShadow={'2xl'} rounded={'2xl'}  >
                    <Box
                        position={'relative'}
                        height={'full'}
                        width={'full'}
                        overflow={'hidden'}>
                        {/* CSS files for react-slick */}
                        <link
                            rel="stylesheet"
                            type="text/css"
                            charSet="UTF-8"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        {/* Left Icon */}
                        <IconButton
                            aria-label="left-arrow"
                            variant="ghost"
                            position="absolute"
                            left={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickPrev()}>
                            <ArrowBackIcon size={10} color="GrayText" />
                        </IconButton>
                        {/* Right Icon */}
                        <IconButton
                            aria-label="right-arrow"
                            variant="ghost"
                            position="absolute"
                            right={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickNext()}>
                            <ArrowForwardIcon size={10} color="GrayText" />
                        </IconButton>
                        {/* Slider */}
                        <Slider {...settings} ref={(slider) => setSlider(slider)}>
                            {cards.map((card, index) => (
                                <Box
                                    key={index}
                                    maxH={80}
                                    w="full"
                                    rounded={'2xl'}
                                    position="relative"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    backgroundImage={`url(${card.image})`}>
                                    {/* This is the block you need to change, to customize the caption */}
                                    <Container w="full" height="full">
                                        <Stack
                                            spacing={3}
                                            w={'full'}
                                            h={80}
                                            my='50%'
                                            textAlign="center">
                                            <Heading fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color="GrayText">
                                                {card.title}
                                            </Heading>
                                            <Text fontSize={{ base: 'sm', lg: 'md' }} color="GrayText">
                                                {card.text}
                                            </Text>
                                        </Stack>
                                    </Container>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>
            </Center>
        </VStack>
    );
}

export default About;