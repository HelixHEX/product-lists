import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import data from "../utils/data";
import Product from "./Product";

const Products = ({ filter, sort }) => {
  return (
    <>
      {/* <Flex w={100} h={100} bg='red' /> */}
      <SimpleGrid
        w="90%"
        h='100%'
        alignSelf={"center"}
        columns={[4]}
        rowGap={5}
        pt={10}
        pb={5}
        justifyContent='center'
      >
        {data
          .filter((item) => {
            return item.category === filter || filter === "All";
          })
          .map((product, index) => (
            <Flex alignSelf={'center'}>
              <Product product={product} />
            </Flex>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
