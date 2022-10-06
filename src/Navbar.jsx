import React from "react";
import { Avatar, Flex, IconButton } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex
        w="60px"
        h="100%"
        bg="blackAlpha.900"
        borderEnd="1px solid"
        borderEndColor="gray"
        direction="column"
        align="center"
      >
        <Avatar
          src=""
          _hover={{
            bgColor: "gray",
            cursor: "pointer",
          }}
          size="sm"
          m={3}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="black"
          size="sm"
          m={2}
          icon={<ChatIcon />}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="black"
          size="sm"
          m={2}
          icon={<ChatIcon />}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="black"
          size="sm"
          m={2}
          icon={<ChatIcon />}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="black"
          size="sm"
          m={2}
          icon={<ChatIcon />}
        />
      </Flex>
    </>
  );
};

export default Navbar;
