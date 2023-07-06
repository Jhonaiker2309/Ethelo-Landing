import React from 'react'
import { Box, Grid, Flex, Image } from '@chakra-ui/react'
import logoImage from "../../images/logo.png"

export default function Brands() {
    return (
        <Box px="10%" my="6%">
            <Flex align="center" justify='space-between' direction="row">
                {listOfLogos.map((logo)=>(
                    <Image
                        boxSize='100px'
                        objectFit='cover'
                        src={logo}
                        alt='Dan Abramov'
                    />                
                ))}
            </Flex>
            <Flex align="center" justify='space-between' direction="row" mt="4%">
                {listOfLogos.map((logo) => (
                    <Image
                        boxSize='100px'
                        objectFit='cover'
                        src={logo}
                        alt='Dan Abramov'
                    />
                ))}
            </Flex>            
        </Box>
    )
}


/*export default function Brands() {
    return (
        <Box>
            <Flex align="center" justify='space' direction="row">
            <Grid templateColumns='repeat(5, 1fr)' w={'100%'} bgColor="red">
            {
                listOfLogos.map((logo)=>(
                    <Image
                        boxSize='100px'
                        objectFit='cover'
                        src={logo}
                        alt='Dan Abramov'
                    />                
                ))
            }
            </Grid>
            </Flex>
        </Box>
    )
}*/

//const listOfLogos = [logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage]
const listOfLogos = [logoImage, logoImage, logoImage, logoImage, logoImage]
