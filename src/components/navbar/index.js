import {
    Box,
    Flex,
    Link,
    IconButton,
    Stack,
    Text,
    useDisclosure,
    useMediaQuery
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"
import {
    SearchIcon, 
    HamburgerIcon,
    CloseIcon,
    } from "@chakra-ui/icons"
import { useEffect } from 'react';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [isMdOrLarger] = useMediaQuery('(min-width: 768px)'); // "md" corresponde a 768px

    // Bloquear el desplazamiento
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Desbloquear el desplazamiento
    function enableScroll() {
        document.body.style.overflow = '';
    }

    useEffect(()=> {
        onToggle(false)
    // eslint-disable-next-line
    },[isMdOrLarger])

    useEffect(() => {
        if (isOpen && !isMdOrLarger) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isOpen, isMdOrLarger]);

    return (
        <Box w="100%" position="fixed" style={{zIndex: 50}}
            >
            {true && <Flex
                w="100%"
                bg="white"
                style={{ zIndex: 50 }}
                color={"#003153"}
                minH={'60px'}
                py={{ base: 0.5 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor="gray.100"
                align={'center'}
            >
                <Flex flex={{ base: 1 }} justify={"start"}>
                    <Text color={"#003153"} fontSize={30} fontWeight={400} >Cityville</Text>
                </Flex>
                {isMdOrLarger ? <Flex align="center" justify="space-between" >
                    <Link
                        as={RouterLink}
                        to="/"
                        _hover={{textDecoration:"none"}}
                        width="80px"
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        textAlign="center"
                        style={{ textDecoration: "none" }}
                    >
                        Home
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        width="110px"
                        fontSize={'md'}
                        fontWeight={500}
                        textAlign="center"
                        color={"#003153"}
                        style={{ textDecoration: "none" }}
                    >
                        City Website
                    </Link>
                    <Link
                        width="110px"
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none" }}
                        fontSize={'md'}
                        fontWeight={500}
                        color={"#003153"}
                        textAlign="center"
                        style={{ textDecoration: "none" }}
                    >
                        Why Engage?
                    </Link>
                    <Link
                        width="80px"
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
                    <Box>
                        <SearchIcon boxSize={5} w="50px" style={{ cursor: "pointer" }} />
                    {/*<InputGroup w="13%">
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon boxSize={5} style={{ cursor: "pointer" }} />
                        </InputLeftElement>
                        <Input
                            _focus={{
                                boxShadow: "none !important",
                                border: "1px solid rgba(0, 0, 0, 0.2) !important",
                            }}
                        />
                    </InputGroup>*/}
                    </Box>
                    <Link
                        width="80px"
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
                        width="80px"
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
                </Flex> : 
                    <Box>
                        {/*flex={{ base: 1, md: 'auto' }}
                        //ml={{ base: -2 }}
                        //display={{ base: 'flex', md: 'none' }}>*/}
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Box>
                }
            </Flex>}
            <Box position="relative" >
                <MobileNav isOpen={isOpen} onToggle={onToggle}/>
            </Box>
        </Box>
    );
}

const MobileNav = ({ isOpen, onToggle }) => {
    return (
        <Box position="fixed" zIndex="1" w="100%" bgColor=" #F0F6F5" /*h="100vh"*/>
        { isOpen ? (
           <Stack
            h="100vh"
            bgColor=" #F0F6F5"
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} onToggle={onToggle}/>
            ))}
        </Stack>) : null}
        </Box >
    );
};

const MobileNavItem = ({ label, onToggle }) => {

    return (
        <Stack spacing={4}>
            <Flex
                py={4}
                as={RouterLink}
                to="/"
                onClick={() => onToggle(false)}
                justify={'space-between'}
                align={'center'}
                fontSize={"xl"}
                _hover={{
                    textDecoration: 'none',
                    color: "yellow"
                }}>
                <Text
                    fontWeight={600}
                    color={'gray.500'}
                    _hover={{ color: "#003153"}}
                    >
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Home',
    },
    {
        label: 'City Website',
    },
    {
        label: 'Why Engage',
    },
    {
        label: 'Projects',
    },
    {
        label: "Sign in"
    },
    {
        label: "Register"
    }
];

