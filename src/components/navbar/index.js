import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Collapse,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';

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
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        fontSize='2xl'
                        color={"#213555"}>
                        ETHELO
                    </Text>
                </Flex>

                <Stack
                width={600}
                    flex={{ base: 2, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={3}>
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
                        href={'#'}>
                        Register
                    </Link>                    
                </Stack>
            </Flex>
        </Box>
    );
}