import { Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { uniqueCategories } from "../utils/data";

const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <Flex
        mt={2}
        onClick={() => setFilter(filter)}
        _hover={{ bg: "blue.600", cursor: "pointer", color: "white" }}
        h={45}
        rounded={5}
        bg="blue.900"
        p={2}
        ml={2}
        // borderColor={"white"}
        // borderWidth={1}
      >
        <Text alignSelf={"center"} fontWeight={"200"}>
          {filter}
        </Text>
      </Flex>
    </>
  );
};

const Filters = ({ setFilter }) => {
  return (
    <>
      {/* <Select onChange={(e) => setFilter(e.target.value)} defaultValue={'All'} ml={2} w={200} >
        <option value="All">All</option>
        {uniqueCategories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </Select> */}
      <SimpleGrid columns={11}>
        <Filter filter={'All'} setFilter={setFilter} />
        {uniqueCategories.map((category, index) => (
          <Filter setFilter={setFilter} key={index} filter={category} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Filters;
