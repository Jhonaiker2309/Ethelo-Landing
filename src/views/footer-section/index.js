import React from 'react'
import { Center, Grid, Heading, Button, Text, Box, Link, Flex } from '@chakra-ui/react'

const dataToShowInColumns = [
  {head: "Save Time",
  text: "Ethelo comes ready to "}
]

export default function FooterSection() {
  return (
    <div>
      <Box bgColor="#1F8A70" px={40} py={12}>
        <Text color="white" fontSize="5xl" fontWeight={600} mb="3%">Why Ethelo?</Text>
        <Flex direction="row" justifyContent="space-between">
          <Box color="white" textAlign="left">
            <Text fontSize="2xl" fontWeight={600}>Save time</Text>
            <Text fontSize="lg" fontWeight={300}>
              Ethelo comes ready to let you <br />
              seamlessly engage broad groups <br />
              of stakeholders and quickly <br/>
              understand their priorities
            </Text>
          </Box>
          <Box color="white" textAlign="left">
            <Text fontSize="2xl" fontWeight={600}>Find Agreement</Text>
            <Text fontSize="lg" fontWeight={300}>
              Discover common ground in <br />
              contentious, polarizing situations <br />
              with Ethelo's patented scenario <br />
              analysis technology
            </Text>
          </Box>
          <Box color="white" textAlign="left">
            <Text fontSize="2xl" fontWeight={600}>Make better decisions</Text>
            <Text fontSize="lg" fontWeight={300}>
              Create a well-articulated action <br />
              plan based on input from a <br />
              representative sample of your<br />
              unique community
            </Text>
          </Box>                  
        </Flex>
        <Center borderTop="2px" borderColor="white"  mt={10}>
          <Text fontSize="5xl" fontWeight={600} color="white" mt={20} mb={10}>
            Make decisions that meet the <br />
            needs of your whole community
          </Text>        
        </Center>
        <Button color={"#213555"} bgColor="white" w="14%" borderColor="213555" fontWeight={500} borderRadius="100px" py={6}>Register</Button>
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
