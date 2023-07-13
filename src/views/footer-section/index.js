import React from 'react';
import { Center, Button, Text, Box, Link, Flex, Image, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import ethelo from "../../images/ethelo.png";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import footer_icon_1 from "../../images/icon_time.png";
import footer_icon_2 from "../../images/icon_contract.svg";
import footer_icon_3 from "../../images/icon_win.png";

export default function FooterSection() {
  return (
    <div>
      <Box bgColor="#107A66" px={40} py={12}>
        <Text color="white" fontSize={["3xl", "4xl", "5xl"]} fontWeight={600} mb={3}>
          Why Engage?
        </Text>
        <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={[6, 10]}>
          <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem colSpan={1}>
              <Image src={footer_icon_1} w="70%" />
            </GridItem>
            <GridItem colSpan={5}>
              <Box color="white" textAlign="left">
                <Text fontSize={["xl", "2xl"]} fontWeight={600}>
                  Save time
                </Text>
                <Text fontSize={["md", "lg"]} fontWeight={400}>
                  Ethelo comes ready to let you <br />
                  seamlessly engage broad groups <br />
                  of stakeholders and quickly <br />
                  understand their priorities
                </Text>
              </Box>
            </GridItem>
          </Grid>
          <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem colSpan={1}>
              <Image src={footer_icon_2} w="70%" />
            </GridItem>
            <GridItem colSpan={5}>
              <Box color="white" textAlign="left">
                <Text fontSize={["xl", "2xl"]} fontWeight={600}>
                  Find Agreement
                </Text>
                <Text fontSize={["md", "lg"]} fontWeight={400}>
                  Discover common ground in <br />
                  contentious, polarizing situations <br />
                  with Ethelo's patented scenario <br />
                  analysis technology
                </Text>
              </Box>
            </GridItem>
          </Grid>
          <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem colSpan={1}>
              <Image src={footer_icon_3} w="70%" />
            </GridItem>  
            <GridItem colSpan={5}>        
            <Box color="white" textAlign="left">
              <Text fontSize={["xl", "2xl"]} fontWeight={600} textAlign="left">
                Make better decisions
              </Text>
              <Text fontSize={["md", "lg"]} fontWeight={400}>
                Create a well-articulated action <br />
                plan based on input from a <br />
                representative sample of your<br />
                unique community
              </Text>
            </Box>
            </GridItem>
          </Grid>
        </SimpleGrid>
        <Center borderTop="2px" borderColor="white" mt={10}>
          <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight={600} color="white" mt={20} mb={10}>
            Make decisions that meet the <br />
            needs of your whole community
          </Text>
        </Center>
        <Button
          color={"#003153"}
          bgColor="white"
          w={["80%", "60%", "14%"]}
          borderColor="#003153"
          fontWeight={500}
          borderRadius="100px"
          py={[4, 5, 6]}
        >
          Register
        </Button>
      </Box>
      <Box>
        <Box h="13vh" py={5} px={20} w="100%">
          <Grid templateColumns='repeat(5, 1fr)' gap={10}>
            <GridItem colSpan={2}>
              <Flex align="center">
                <Image src={ethelo} width="20%" />
              </Flex>
            </GridItem>
            <GridItem colSpan={2} pl="15%">
              <Flex direction="row" align="center">
                <Link width={100} fontSize={'md'} fontWeight={600} color={"#003153"}>
                  About us
                </Link>
                <Link width={100} fontSize={'md'} fontWeight={600} color={"#003153"}>
                  Privacy
                </Link>
                <Link width={100} fontSize={'md'} fontWeight={600} color={"#003153"}>
                  Disclaimer
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex direction="row" justify="space-between" align="center" mt={-1}>
                <Image src={facebook} w="12%" />
                <Image src={twitter} w="12%" />
                <Image src={instagram} w="12%" />
              </Flex>
            </GridItem>
          </Grid>
          <Box textAlign="left" mt="0.7%">
            © 2023, Ethelo | All Rights Reserved
          </Box>
        </Box>
      </Box>
    </div>
  )
}
