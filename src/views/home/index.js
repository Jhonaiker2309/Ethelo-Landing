import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import communityImage from "../../images/community.jpg"
import React from 'react';

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
                backgroundImage: `url(${communityImage}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',                
            }}
        >
            <Grid templateColumns='repeat(2, 1fr)' gap={220} mt="-10px">
            <div></div>
                <GridItem w="100%" pl={10}>
                <Text
                    fontSize={'5xl'}
                    fontWeight={500}
                    lineHeight={1.3}
                    mb="4"
                    align="left"
                    color={"#003153"}
                >
                        Welcome to <br style={{height: '0px'}} />  
                    Ethelo City Center
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
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default Home;

