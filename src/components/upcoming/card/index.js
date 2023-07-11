import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Button, Box } from "@chakra-ui/react"
import art_gallery from "../../../images/art_gallery.jpg"

const CardComponent = () => {
    return (
        <Card maxW='sm' p="0px" borderRadius="10px">
            <CardBody p="0px" style={{ position: "relative" }}>
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
                <Stack spacing='3' align="left" borderBottomRadius="10px" px="4%" pt="8%" pb="3%" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderColor: "#F5F5F5", border: " 0px 1px 1px 1px" }}>
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