import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Product = ({ product }) => {
  return (
    <>
      <Flex flexDir={"column"} rounded={3} p={2} w={"90%"} h={'auto'} bg="white">
        <Flex rounded={5} p={2} w={85} color='white' bg='blue.300'>
          <Text fontWeight={'700'} fontSize={13}>{product.category}</Text>
        </Flex>
        <Text fontSize={20} fontWeight="200">
          {product.name}
        </Text>
        <Text>{product.price}</Text>
      </Flex>
    </>
  );
};

export default Product;
