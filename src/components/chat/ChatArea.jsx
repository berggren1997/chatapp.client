import {
  Avatar,
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ChatArea = () => {
  return (
    <>
      <Flex bg="blackAlpha.900" flex={1} direction="column">
        {/* top area */}
        <Flex bg="blackAlpha.300" h="58px" w="100%" align="center">
          <Avatar src="" marginLeft={2} marginEnd={3} />
          <Heading size="lg">chatting with: username</Heading>
        </Flex>

        {/* chatarea */}
        <Flex flex={1} bgColor="blackAlpha.400" direction="column" p={3}>
          <Flex align="center" p={3}>
            <Avatar src="" size="xs" />
            <Text
              bg="blue.500"
              w="fit-content"
              minWidth="100px"
              borderRadius="10px"
              p={2}
              m={2}
            >
              this is a dummy message
            </Text>
          </Flex>
          <Flex align="center" p={3}>
            <Avatar src="" size="xs" />
            <Text
              bg="blue.500"
              w="fit-content"
              minWidth="100px"
              borderRadius="10px"
              p={2}
              m={2}
            >
              this is a dummy message
            </Text>
          </Flex>
          <Flex align="center" p={3}>
            <Avatar src="" size="xs" />
            <Text
              bg="blue.500"
              w="fit-content"
              minWidth="100px"
              borderRadius="10px"
              p={2}
              m={2}
            >
              this is a dummy message
            </Text>
          </Flex>
        </Flex>

        {/* input area  */}
        <FormControl
          bgColor="blackAlpha.400"
          borderTopColor="gray.100"
          p={3}
          // borderTop=".5px solid"
        >
          <Input
            autoComplete="off"
            borderRadius="10px"
            placeholder="Type a message..."
          />
          <Button type="submit" hidden></Button>
        </FormControl>
      </Flex>
    </>
  );
};

export default ChatArea;
