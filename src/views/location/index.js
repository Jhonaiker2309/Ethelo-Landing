import { Box, Heading, Center, Input, Flex } from "@chakra-ui/react";
import InformationCard from "../../components/location/informationCard";
import bike_marathon from "../../images/bike_marathon.jpg"
import "./index.css";

const Location = () => {
  return (
    <Box position="relative">
      <Box
        className="location"
        h={400}
        w="100%"
        style={{
          backgroundImage: `url(${bike_marathon})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', 
        }}
      ></Box>
      <Box position="absolute" left="50%" top="55%" transform="translate(-50%, -50%)" zIndex={10}>
        <InformationCard />
      </Box>
      <Center>
        <Heading mt={180} mb={20} color={"#003153"} >Project Locations</Heading>
      </Center>
      <Flex direction="row" mb={10} justify="center">
          <Input placeholder='Search' w="30%" mr="3%"/>
          <Input placeholder='All status' w="20%" />
      </Flex>
    </Box>
  );
};

export default Location;

