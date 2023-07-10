import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Box, Button } from "@chakra-ui/react"

const CardComponent = () => {
    return (
        <Card maxW='sm' p="0px" borderRadius="10px" style={{ boxShadow: "none" }}>
            <CardBody p="0px" style={{position: "relative"}}>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    size="cover"
                    width="100%"
                    borderTopRadius="10px"
                />
                <Box bgColor="#C1ECE4" style={{
                    position: 'absolute',
                    top: '8%',
                    right: '-4%',
                    transform: 'translate(-50%, -50%)',
                    padding: '8px 15px',
                    borderRadius: '10px'
                }}>
                    Survey
                </Box>
                <Stack mt='6' align="left" px="4%" py="3%">
                    <Heading size='md' align="left" color={"#003153"}>Living room Sofa</Heading>
                    <Text align="left">
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Button width="30%" color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px">View</Button>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardComponent