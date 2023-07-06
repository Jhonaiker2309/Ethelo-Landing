import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react"

const CardComponent = () => {
    return (
        <Card maxW='sm' border="1px" p="0px">
            <CardBody p="0px">
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    size="cover"
                    width="100%"
                />
                <Stack mt='6' spacing='3' align="left" mx="4%" py="3%">
                    <Heading size='md' align="left">Living room Sofa</Heading>
                    <Text align="left">
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Button width="30%" color={"#213555"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px">View</Button>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardComponent