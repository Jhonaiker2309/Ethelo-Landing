import React from 'react'
import { Box, Center, SimpleGrid, Button, Text } from '@chakra-ui/react'
import Card from '../../components/upcoming/card'
import climate from "../../images/climate_min.jpg"
import traffic from "../../images/traffic_min.jpg"
import people from "../../images/people_min.jpg"

export default function Upcoming() {
    return (
        <Box mb={5} py={10}>
            <Center>
                <Text
                    fontSize={'4xl'}
                    fontWeight={500}
                    mb="4"
                    align="left"
                    color={"#003153"}
                >
                    Upcoming Engagements
                </Text>
            </Center>
            <Center>
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mb={5} mx={"11%"}>
                    {cardList.map((currentCard) => (
                        <Card imageCard={currentCard.image} name={currentCard.name} description={currentCard.description} buttonText={currentCard.buttonText} />
                    ))}
                </SimpleGrid>
            </Center>
            <Center>
                <Button color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" mt={10}>View all Upcoming Engagements</Button>
            </Center>
        </Box>
    )
}
const cardList = [
    {
        name: "Climate Planning",
        description: "Vote on how you'd like the city to reduce 20,000 tonnes of GHG",
        image: climate,
        buttonText: "March 2024"
    },
    {
        name: "Traffic Survey",
        description: 'Share your perspective on enhancing active transportation',
        image: traffic,
        buttonText: "June 2024"
    },
    {
        name: "Community Dialogue",
        description: 'Join the conversation and contribute to meaningful discussions',
        image: people,
        buttonText: "August 2024"
    }
]

/*
export default function Upcoming() {
    return (
        <Box mb={5} py={10}>
            <Center>
                <Text
                    fontSize={'4xl'}
                    fontWeight={500}
                    mb="4"
                    align="left"
                    color={"#003153"}
                >
                    Upcoming Engagements
                </Text>
            </Center>
            <Center>
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} mb={5} mx={"11%"}>
                    {cardList.map((currentCard) => (
                        <Card imageCard={currentCard.image} name={currentCard.name} description={currentCard.description} linkAddress={currentCard.linkAddress} />
                    ))}
                </SimpleGrid>
            </Center>
            <Center>
                <Button color={"#003153"} bgColor="white" border="1px" borderColor="213555" fontWeight={500} borderRadius="100px" mt={10}>View all Upcoming Engagements</Button>
            </Center>
        </Box>
    )
}
const cardList = [
    {
        name: "Climate Planning",
        description: "Empowering communities to shape their sustainable futures",
        image: climate,
        linkAddress: "https://carbonbudgetdemo.ethelo.net/page/climate-emergency-planning"
    },
    {
        name: "Traffic Survey",
        description: 'Facilitating community involvement in shaping safer, more efficient traffic environments',
        image: traffic,
        linkAddress: "https://itstimemv2.ethelo.net/projects/59d1910a70726f1fee841500/vote/project-user/background"
    },
    {
        name: "Community Dialogue",
        description: 'Create space for meaningful discussion and sentiment analysis',
        image: people,
        linkAddress: "https://surreywhiterock.ethelo.net/projects/53b5bcdcd4027acfa1000001/vote/project-user/background"
    }
]

*/
