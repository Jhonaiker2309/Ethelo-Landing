import { Box, useDisclosure, Heading, Center, Input, Flex } from "@chakra-ui/react";
import InformationCard from "../../components/location/informationCard";
import "./index.css";

const Location = () => {
  return (
    <Box position="relative">
      <Box
        className="location"
        h={400}
        w="100%"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
        }}
      ></Box>
      <Box position="absolute" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
        <InformationCard />
      </Box>
      <Center>
        <Heading mt={120} mb={20}>Project Locations</Heading>
      </Center>
      <Flex direction="row" mb={10}>
        <Input placeholder='Search' />
        <Input placeholder='All status' />
      </Flex>
    </Box>
  );
};

export default Location;

// <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
