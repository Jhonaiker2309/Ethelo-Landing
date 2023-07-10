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
                color={"#003153"}
                minH={'60px'}
                py={{ base: 7 }}
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
                    <Image src={ethelo} width="14%"/>
                </Flex>

                <Stack
                width={800}
                    flex={{ base: 2, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={27}>
                    <Flex align="center">
                    <Link
                        as={'a'}
                        width={140}
                        fontSize={'lg'}
                        fontWeight={600}
                        variant={'link'}
                        color={"#003153"}
                        mr="6%"
                        style={{textDecoration: "none"}}
                        href={'#'}>
                        About us
                    </Link>
                    <Link
                        width={140}
                        as={'a'}
                        fontSize={'lg'}
                        fontWeight={600}
                        variant={'link'}
                        mr="6%"
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        href={'#'}>
                        Sign In
                    </Link>
                    <Link
                        width={140}
                        as={'a'}
                        fontSize={'lg'}
                        fontWeight={600}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        mr="6%"
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