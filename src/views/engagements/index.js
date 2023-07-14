import React from 'react'
import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import Card from '../../components/open/card'
import city_budget from "../../images/city_budget_min.jpg"
import household_survey from "../../images/household_survey_min.jpg"
import taxes from "../../images/taxes_min.jpg"
import climate from "../../images/climate_min.jpg"
import traffic from "../../images/traffic_min.jpg"
import people from "../../images/people_min.jpg"

export default function Engagements() {
    return (
        <Box bgColor="#F0F6F5" py={2}>
            <Center>
                <Text
                    fontSize={'4xl'}
                    fontWeight={500}
                    mb="12"
                    mt="6"
                    align="left"
                    color={"#003153"}
                >
                    Past Engagements
                </Text>
            </Center>
            <Center >
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mb={5} mx={"11%"}>
                    {cardList.map((currentCard) => (
                        <Card imageCard={currentCard.image} name={currentCard.name} description={currentCard.description} linkAddress={currentCard.linkAddress} type={currentCard.type} color={currentCard.color} />
                    ))}
                </SimpleGrid>
            </Center>
        </Box>
    )
}
const cardList = [
    {
        name: "Climate Planning",
        description: "Empowering communities to shape their sustainable futures",
        image: climate,
        linkAddress: "https://carbonbudgetdemo.ethelo.net/page/climate-emergency-planning",
        type: "Survey",
        color: "#C1ECE4"
    },
    {
        name: "Traffic Survey",
        description: 'Facilitating community involvement in shaping safer, more efficient traffic environments',
        image: traffic,
        linkAddress: "https://itstimemv2.ethelo.net/projects/59d1910a70726f1fee841500/vote/project-user/background",
        type: "Survey",
        color: "#C1ECE4"
    },
    {
        name: "Community Dialogue",
        description: 'Create space for meaningful discussion and sentiment analysis',
        image: people,
        linkAddress: "https://surreywhiterock.ethelo.net/projects/53b5bcdcd4027acfa1000001/vote/project-user/background",
        type: "Survey",
        color: "#C1ECE4"
    },      
    {
        name: "Citizen Budget",
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