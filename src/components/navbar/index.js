import {
    Box,
    Flex,
    Stack,
    Link,
    useColorModeValue,
    Image
} from '@chakra-ui/react';
import ethelo from "../../images/ethelo.png"
import { SearchIcon } from "@chakra-ui/icons"

export default function WithSubnavigation() {

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={"#213555"}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image src={ethelo} width="10%"/>
                </Flex>

                <Stack
                width={800}
                    flex={{ base: 2, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={5}>
                    <Flex  align="center">
                    <Link
                        as={'a'}
                        width={100}
                        fontSize={'md'}
                        fontWeight={600}
                        variant={'link'}
                        color={"#213555"}
                        style={{textDecoration: "none"}}
                        href={'#'}>
                        About us
                    </Link>
                    <Link
                        width={100}
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={600}
                        variant={'link'}
                        color={"#213555"}
                        style={{ textDecoration: "none" }}
                        href={'#'}>
                        Sign In
                    </Link>
                    <Link
                        width={100}
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={600}
                        variant={'link'}
                        color={"#213555"}
                        style={{ textDecoration: "none" }}
                        mr="5%"
                        href={'#'}>
                        Register
                    </Link>   
                    <SearchIcon boxSize={6} style={{cursor: "pointer"}}/>  
                    </Flex>               
                </Stack> 
            </Flex>
        </Box>
    );
}