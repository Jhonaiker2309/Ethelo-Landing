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
                        Smallville City Center
                    </Text>
                    <Text pr="27" align="center" color={"#003153"} fontWeight={500}>
                        Reach Beyond the usual suspects and meaningfully involve <br />
                        your community to make fair and inclusive decisions.  <br />
                        Help residents weigh priorities and evaluate trade-offs to <br />
                        reduce polarization and identify the option with broad <br />
                        support
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

/*
const Home = () => {
    const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

    return (
        <Flex
            align="center"
            w="full"
            px={isLargerThan62 ? '16' : '6'}
            minHeight="92vh"
            justifyContent="space-between"
            flexDirection={isLargerThan62 ? 'row' : 'column'}
            style={{
                backgroundImage: `url(${city}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',                
            }}
        >

                <Text
                    fontSize={'5xl'}
                    fontWeight={500}
                    lineHeight={1.3}
                    mb="4"
                    align="left"
                    color={"#003153"}
                >
                        Welcome to <br style={{height: '0px'}} />  
                    Smallville City Center
                </Text>
                    <Text pr="27" align="left" fontWeight={500}>
                    Reach Beyond the usual suspects and meaningfully involve <br/>
                    your community to make fair and inclusive decisions.  <br />
                    Help residents weigh priorities and evaluate trade-offs to <br />
                    reduce polarization and identify the option with broad <br />
                    support
                </Text>
                <Box align="left">
                    <Button
                        w="160px"
                        mt={6}
                        bgColor={"#D42758"}
                        color="white"
                        variant="solid"
                        borderRadius="100px"
                        _hover={{
                            bgColor:"#D42758"
                        }}
                        align="left"
                        size={isLargerThan62 ? 'lg' : 'md'}
                        mb={isLargerThan62 ? '0' : '10'}>
                        Register
                    </Button>
                </Box>
        </Flex>
    );
};
*/

