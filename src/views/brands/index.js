import React from 'react';
import { Box, SimpleGrid, Image, Center } from '@chakra-ui/react';
import logoImage from "../../images/logo.png";

export default function Brands() {
    const listOfLogos = [logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage]
    return (
        <Box px="5%" my="6%">
            <Center>
                <SimpleGrid columns={[2, null, 5]} w="100%" justifyItems="center">
                    {listOfLogos.map((logo) => (
                        <Image
                            key={logo}
                            boxSize='100px'
                            objectFit='cover'
                            src={logo}
                            alt='Logo'
                        />
                    ))}
                </SimpleGrid>
            </Center>
        </Box>
    );
}

//const listOfLogos = [logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage, logoImage]

