import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    Text,
    InputLeftElement,
    InputGroup,
    Input
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons"

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
                    <Text fontSize='30px' color='#003153' cursor="pointer">Cityville</Text>
                </Flex>
                <Flex align="center" justify="space-between" pl="10%">
                    <Link
                        as={'a'}
                        width={100}
                        fontSize={'md'}
                        fontWeight={500}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        Home
                    </Link>
                    <Link
                        as={'a'}
                        width={120}
                        fontSize={'md'}
                        fontWeight={500}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        href={'#'}
                    >
                        City Website
                    </Link>
                    <Link
                        width={120}
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={500}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        href={'#'}
                    >
                        Why Engage?
                    </Link>
                    <Link
                        width={100}
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={500}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        href={'#'}
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
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={500}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        href={'#'}
                    >
                        Sign In
                    </Link>
                    <Link
                        width={100}
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={500}
                        variant={'link'}
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                        href={'#'}
                    >
                        Register
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}
