import React from 'react'
import { Box, Center, SimpleGrid, Button, Text } from '@chakra-ui/react'
import Card from '../../components/open/card'
import city_budget from "../../images/city_budget_min.jpg"
import household_survey from "../../images/household_survey_min.jpg"
import taxes from "../../images/taxes_min.jpg"

export default function Open() {
  return (
    <Box mb={5} bgColor="#F0F6F5" py={10}>
        <Center>
              <Text
                  fontSize={'4xl'}
                  fontWeight={500}
                  mb="4"
                  mt="4"
                  align="left"
                  color={"#003153"}
                >
                  Open Engagements
              </Text> 
            </Center>
            <Center >
              <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mb={5} mx={"11%"}>
              {cardList.map((currentCard) => (
                  <Card imageCard={currentCard.image} name={currentCard.name} description={currentCard.description} linkAddress={currentCard.linkAddress} type={currentCard.type} color={currentCard.color}/>
              ))}
              </SimpleGrid> 
            </Center>  
        <Center>
          <Button color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" mt={10}>View all Open Engagements</Button>
        </Center>
    </Box>
  )
}
const cardList = [
  { name: "Citizen Budget",
    description: "Empowering citizens to actively participate in their community's financial decision-making",
    image: city_budget,
    linkAddress: "https://citizenbudget.ethelo.net/page/welcome",
    type: "Budget",
    color: "#FF9F0A"
  },
  {
    name: "Household Survey",
    description: 'Amplifying community voices through user-friendly surveys',
    image: household_survey,
    linkAddress: "https://householdsurvey-demo.ethelo.net/",
    type: "Survey",
    color: "#C1ECE4"    
  },  
  {
    name: "Property Tax Calculator",
    description: 'Raising awareness and support through participatory tax allocation decisions',
    image: taxes,
    linkAddress: "https://citizenbudget.ethelo.net/page/your-property-taxes",
    type: "Budget",
    color: "#FF9F0A"    
  }  
]
