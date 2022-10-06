import React from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

const ChatList = () => {
  return (
    <Flex
      _hover={{
        bgColor: "blackAlpha.600",
        borderRadius: "10px",
        cursor: "pointer",
        color: "black",
      }}
      p={3}
      m={2}
      align="center"
    >
      <Avatar src="" marginEnd={2} />
      <Text>user you're talking to</Text>
    </Flex>
  );
};

export default ChatList;
