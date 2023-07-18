import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    IconButton,
    Collapse,
    Stack,
    Text,
    InputLeftElement,
    InputGroup,
    Input,
    useDisclosure,
    Icon,
    useMediaQuery
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"
import {
    SearchIcon, 
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    } from "@chakra-ui/icons"
import { useEffect } from 'react';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [isMdOrLarger] = useMediaQuery('(min-width: 768px)'); // "md" corresponde a 768px

    useEffect(()=> {
        onToggle(false)
    },[isMdOrLarger])

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
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
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
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                }
            </Flex>}
            <Box position="relative" >
                <MobileNav isOpen={isOpen}/>
            </Box>
        </Box>
    );
}

const MobileNav = ({ isOpen }) => {
    return (
        <Box position="fixed" zIndex="1" w="100%" /*h="100vh"*/>
        { isOpen ? (
           <Stack
            h="100vh"
            bg={'gray.800'}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>) : null}
        </Box >
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen } = useDisclosure();

    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Inspiration',
        href: '#',
    },
    {
        label: 'Find Work',
        href: '#',
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
];

/*

*/