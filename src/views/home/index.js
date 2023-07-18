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
import city from "../../images/city_min.jpg"
import React from 'react';

const Home = () => {

    return (
        <Flex
            align="center"
            px={'16'}
            pt={20}
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
                <Card align='center' textAlign="center" bgColor="rgba(255, 255, 255, 0.8)" px={"100px"} borderRadius="15px" py={10} mb={10}>
                    <Text
                        fontSize={'5xl'}
                        fontWeight={500}
                        lineHeight={1.3}
                        textAlign="center"
                        mb="4"
                        align="center"
                        color={"#003153"}
                    >
                        Welcome to <br style={{ height: '0px' }} />
                        Cityville City Center
                    </Text>
                    <Text pr={{base: 0, md:"27"}} align="center" color={"#003153"} fontWeight={500} textAlign="center">
                        Cityville invites residents to actively engage in shaping our collective future.<br /> We are committed to comprehensive and inclusive public participation, <br />and we highly value your insights. Engage with us now to share your perspectives and ensure <br />your voice is heard. Your input will enrich Cityville's initiatives, policies and projects.
                    </Text>
                    <Box >
                        <Center>
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
                            align="center"
                            textAlign="center"
                            size={'lg'}
                            mb={ '0'}>
                                Register
                            </Button>
                        </Center>
                    </Box>
                </Card>
            </Center>
        </Flex>
    );
};

export default Home;
