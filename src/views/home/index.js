import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Center,
    Card,
    CardHeader,
    CardBody,
    Text,
    border} from "@chakra-ui/react"
import city from "../../images/city.jpg"
import React from 'react';
import { color } from "framer-motion";

const Home = () => {

    return (
        <Flex
            align="center"
            px={'16'}
            minHeight="92vh"
            justify="center"
            style={{
                backgroundImage: `url(${city}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',                
            }}
        >
            <Center>
                <Card align='center' bgColor="rgba(255, 255, 255, 0.8)" px={"100px"} borderRadius="15px" py={10} mb={10}>
                    <Text
                        fontSize={'5xl'}
                        fontWeight={500}
                        lineHeight={1.3}
                        mb="4"
                        align="center"
                        color={"#003153"}
                    >
                        Welcome to <br style={{ height: '0px' }} />
                        Cityville City Center
                    </Text>
                    <Text pr="27" align="center" color={"#003153"} fontWeight={500}>
                        Cityville invites residents to actively engage in shaping our collective future. <br /> We are committed to comprehensive and inclusive public participation, and <br /> we highly value your insights. Engage with us to share your perspectives, and voice <br />  your questions and ideas. Your involvement is vital, and we are eager to showcase <br />  how your input enriches Cityville's initiatives, policies, and projects.
                    </Text>
                    <Box align="left">
                        <Button
                            w="160px"
                            mt={6}
                            bgColor={"#003153"}
                            color="white"
                            variant="solid"
                            borderRadius="100px"
                            _hover={{
                                bgColor:  "#003153"
                            }}
                            align="left"
                            size={'lg'}
                            mb={ '0'}>
                            Register
                        </Button>
                    </Box>
                </Card>
            </Center>
        </Flex>
    );
};

export default Home;
