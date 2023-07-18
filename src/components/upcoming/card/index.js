import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Box, Button } from "@chakra-ui/react"

const CardComponent = ({ imageCard, name, description, buttonText, type }) => {

    return (
        <Card maxW='sm' py="0px" borderRadius="10px" style={{ boxShadow: "none" }} h="450">
            <CardBody p="0px"  style={{ position: "relative" }}>
                <Image
                    src={imageCard}
                    alt='cityville'
                    size="cover"
                    width="100%"
                    borderTopRadius="10px"
                    height="200"
                />
                <Box bgColor={type == "Budget" ? "#FF9F0A" : "#C1ECE4"} style={{
                    position: 'absolute',
                    top: '8%',
                    right: '-4%',
                    transform: 'translate(-50%, -50%)',
                    padding: '8px 15px',
                    borderRadius: '10px'
                }}>
                    {type}
                </Box>
                <Stack align="left" px="4%" py="0px" pt="8%" h="250" flexDirection="column" borderBottomRadius="10px" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderColor: "#F5F5F5", border: " 0px 1px 1px 1px" }}>
                    <Heading size='md' align="left" color={"#003153"}>{name}</Heading>
                    <Text align="left">
                        {description}
                    </Text>
                    <Button width="28%" fontSize={"70%"} position="absolute" color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" bottom="20px">
                        {buttonText}
                    </Button>
                    <Button width="28%" fontSize={"90%"} position="absolute" color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" bottom="20px" left="35%"
                    >Report</Button>
                    <Button width="28%" fontSize={"80%"} position="absolute" color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" bottom="20px" left="67%"
                    >Case Study</Button>                                         
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardComponent;
