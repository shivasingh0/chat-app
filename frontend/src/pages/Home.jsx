import React from "react";
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const Home = () => {
  return (
    <Container maxW={"xl"} h={"full"}>
      <Box
        p={"10px"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        bg={"white"}
        textAlign={"center"}
      >
        <Text fontSize={"3xl"} fontFamily={"work sans"}>
          Welcome to my website
        </Text>
      </Box>
      <Box
        mt={"20px"}
        p={"10px"}
        borderRadius={"lg"}
        bg={"white"}
        borderWidth={"1px"}
        textAlign={"center"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
