import { Avatar, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ChatArea = () => {
  return (
    <>
      <Flex bg="blackAlpha.900" flex={1}>
        {/* top area */}
        <Flex bg="blackAlpha.900" h="73px" w="100%" align="center">
          <Avatar src="" marginLeft={2} marginEnd={3} />
          <Heading size="lg">chatting with: username</Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default ChatArea;
