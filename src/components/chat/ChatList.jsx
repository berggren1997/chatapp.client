import React, { useState } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

const ChatList = () => {
  const [conversations, setConversations] = useState([]);

  if (conversations) {
    console.log(conversations);
  }

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
      <Text>user@example.com</Text>
    </Flex>
  );
};

export default ChatList;
