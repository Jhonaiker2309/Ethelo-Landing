import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Box, Button } from "@chakra-ui/react"
import art_gallery from "../../../images/art_gallery.jpg"

const CardComponent = () => {
    return (
        <Card maxW='sm' p="0px" borderRadius="10px" style={{ boxShadow: "none" }}>
            <CardBody p="0px" style={{position: "relative"}}>
                <Image
                    src={art_gallery}
                    alt='Art gallery'
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
                    <Heading size='md' align="left" color={"#003153"}>Art gallery</Heading>
                    <Text align="left">
                        Experience artistic perfection in our gallery: modern tropical, baroque-inspired, and earthy tones
                        blend seamlessly with vintage chic. Immerse yourself in timeless allure and
                        aesthetic harmony.
                    </Text>
                    <Button width="30%" color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px">View</Button>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardComponent