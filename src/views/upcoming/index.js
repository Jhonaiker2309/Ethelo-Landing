import React from 'react'
import { Box, Center, SimpleGrid, Button, Text } from '@chakra-ui/react'
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
                    color={"#213555"}>
                    Upcoming Engagement
                </Text>
            </Center>
            <Center>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mb={5} mx={"11%"}>
              {cardList.map(() => (
                  <Card />
              ))}
              </SimpleGrid> 
            </Center>  
            <Center>
                <Button color={"#213555"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" mt={10}>View all Upcoming Engagements</Button>
            </Center>
        </Box>
    )
}

const cardList = [1, 2, 3, 4, 5 ,6]