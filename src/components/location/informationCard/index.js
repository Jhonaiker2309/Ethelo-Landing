import React from 'react'
import {Card, CardHeader, CardBody, Center, Heading, Text, Button} from "@chakra-ui/react"

export default function InformationCard() {
  return (
    <Center>
      <Card align='center' bgColor="#F2EAD3" border="1px" w="100%" pb={5} mb={10}>
          <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <Center>
            <Button>View All Past Engagements</Button>
          </Center>
      </Card>
    </Center>
  )
}
