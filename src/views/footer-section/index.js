import React from 'react'
import { Center, Grid, Heading, Button, Text, Box, Link, Flex } from '@chakra-ui/react'
export default function FooterSection() {
  return (
    <div>
      <Box bgColor="green" px={40}>
        <Heading color="white">Why Ethelo?</Heading>
        <Grid templateColumns='repeat(3, 1fr)'>
          {
            [1, 2, 3].map(() => (
              <Box color="white">
                aslkdmaslkdmalskdmalkal a sldnaskd aksndalskda ansjdnak ajnsldkans ndajksldjans djansdlajsd alskdmas
                alskdmas alskdmas alskdmas alskdmas alskdmas alskdmas alskdmas alskdmas alskdmas alskdmasalskdmas alskdmas
                alskdmas alskdmas alskdmas alskdmas alskdmas alskdmasalskdmasalskdmas alskdmasv
              </Box>
            ))
          } 
        </Grid>
        <Center borderTop="2px" borderColor="white"  mt={10}>
          <Heading color="white" mt={20} mb={10}>
            Make decisions that meet the needs of your whole community
          </Heading>        
        </Center>
        <Button>Register</Button>
      </Box>
      <Box>
        <Flex direction="row">
          <Text>
            ETHELO
          </Text>
          <Text>
            <Link>About us</Link>
            <Link>Privacy</Link>
            <Link>Disclaimer</Link>
          </Text>
        </Flex>
      </Box>
    </div>
  )
}
