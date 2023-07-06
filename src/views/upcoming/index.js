import React from 'react'
import { Box, Center, Flex, Grid, Button, Text } from '@chakra-ui/react'
import Card from '../../components/upcoming/card'

export default function Open() {
    return (
        <Box mb={5} py={10}>
            <Center>
                <Text
                    fontSize={'4xl'}
                    fontWeight={500}
                    mb="4"
                    align="left"
                    color={"#213555"}
                >
                    Open Engagement
                </Text>
            </Center>
            <Flex align="center" justify='space-between' direction="row" mb={5} mx={"11%"}>
                {cardList.map(() => (
                    <Card />
                ))}
            </Flex>
            <Flex align="center" justify='space-between' direction="row" mb={5} mx={"11%"}>
                {cardList.map(() => (
                    <Card />
                ))}
            </Flex>
            <Center>
                <Button color={"#213555"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" mt={10}>View all Upcoming Engagements</Button>
            </Center>
        </Box>
    )
}

const cardList = [1, 2, 3]