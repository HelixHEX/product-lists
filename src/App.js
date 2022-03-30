import React, { useState } from "react";
import { Flex, Heading, Select, Text } from "@chakra-ui/react";
import Filters from "./components/Filters";
import Products from "./components/Products";

const App = () => {
  const [filter, setFilter] = useState("All");
  return (
    <>
      <Flex flexDir={"column"} w="100%" h="100vh">
        <Flex color="white" h={'auto'} bg="blue.700" p={3} flexDir={"column"}>
          <Heading fontSize={45}>Products</Heading>
          <Flex mt={20}>
            {/* <Flex>
              <Text alignSelf={"center"}>Sort by: </Text>
              <Select placeholder="Select option" ml={2} w={200}>
                <option>Name (asc)</option>
                <option>Name (desc)</option>
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
              </Select>
            </Flex> */}
            <Flex w='100%' justifyContent={'center'}>
              {/* <Text fontSize={25} fontWeight={"200"} alignSelf={"center"}>
                Filter by:{" "}
              </Text> */}
              <Filters setFilter={setFilter} />
            </Flex>
          </Flex>
        </Flex>
        <Flex bg='gray.300' w='100%' justifyContent={'center'}>
        <Products filter={filter} />
        </Flex>
      </Flex>
    </>
  );
};

export default App;
