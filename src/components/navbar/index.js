import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    Image,
    InputLeftElement,
    InputGroup,
    Input
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"
import { SearchIcon } from "@chakra-ui/icons"
import logo_ciudad from "../../images/logo_ciudad.png"

export default function WithSubnavigation() {
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={"#003153"}
                minH={'60px'}
                py={{ base: 0.5 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                ></Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image src={logo_ciudad} w="100px"/>
                </Flex>
                <Flex align="center" justify="space-between" pl="10%">
                    <Link
                        as={RouterLink}
                        to="/"
                        _hover={{textDecoration:"none"}}
                        width={100}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        Home
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        width={120}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        City Website
                    </Link>
                    <Link
                        width={120}
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        Why Engage?
                    </Link>
                    <Link
                        width={100}
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        Projects
                    </Link>
                    <InputGroup w="13%">
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon boxSize={5} style={{ cursor: "pointer" }} />
                        </InputLeftElement>
                        <Input
                            _focus={{
                                boxShadow: "none !important",
                                border: "1px solid rgba(0, 0, 0, 0.2) !important",
                            }}
                        />
                    </InputGroup>
                    <Link
                        width={100}
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        Sign In
                    </Link>
                    <Link
                        width={100}
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        Register
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}
