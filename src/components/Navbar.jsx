import React from "react";
import { Avatar, Flex, IconButton, Button, Spacer } from "@chakra-ui/react";
import { ChatIcon, SettingsIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex
        w="60px"
        h="100%"
        bg="blackAlpha.900"
        borderEnd="1px solid"
        borderColor="blackAlpha.400"
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
          bgColor="blackAlpha.100"
          size="lg"
          m={2}
          icon={<ChatIcon />}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="blackAlpha.100"
          size="lg"
          m={2}
          icon={<ChatIcon />}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="blackAlpha.100"
          size="lg"
          m={2}
          icon={<ChatIcon />}
        />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="blackAlpha.100"
          size="lg"
          m={2}
          icon={<ChatIcon />}
        />

        <Spacer />
        <IconButton
          _hover={{
            bgColor: "blue",
          }}
          bgColor="blackAlpha.100"
          m={2}
          size="lg"
          icon={<SettingsIcon />}
        />
      </Flex>
    </>
  );
};

export default Navbar;
