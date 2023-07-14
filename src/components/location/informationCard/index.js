import React from 'react'
import {Card, CardHeader, CardBody, Center, Text, Button, Link} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"

export default function InformationCard() {
  return (
    <Center>
      <Card align='center' bgColor="#003153" color="white" w="65vw" borderRadius="15px" pb={10} mb={10}>
          <CardHeader p={10} mb={0} mt="-20px">
            <Text fontSize='2xl' fontWeight={600}>MAKE CHANGE HAPPEN</Text>
          </CardHeader>
          <CardBody mt="-40px">
          <Text fontSize='lg' fontWeight={500}>Participating in social media discussions in a excelent way to share <br/>
            opinions, but it becomes ineffective for decision-making when we are <br />
            unaware of these conversations. Ethelo provides you with a platform to <br />
              express your thoughts, ideas and opinions.</Text>
          </CardBody>
          <Center>
          <Button color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={400}
           borderRadius="100px" py={6}>
            <Link as={RouterLink} to="/engagements" _hover={{textDecoration: "none"}}>View All Past Engagements</Link>
          </Button>
          </Center>
      </Card>
    </Center>
  )
}
