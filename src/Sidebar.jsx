import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import React from "react";
import ChatList from "./ChatList";
import "./index.css";

const Sidebar = () => {
  return (
    <>
      <Flex
        bg="blackAlpha.900"
        w="300px"
        // h="100vh"
        borderEnd="1px solid"
        borderColor="gray.200"
        flexDirection="column"
      >
        <Flex
          h="81px"
          // bg="red.100"
          w="100%"
          align="center"
          justifyContent="space-between"
          p={3}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Flex align="center">
            <Text fontSize="22px" fontWeight="bold">
              Chat
            </Text>
          </Flex>

          {/* <Flex align="center" direction="column">
            <Text marginEnd={1}>Profile</Text>
            <IconButton
              _hover={{
                bgColor: "blue",
              }}
              bgColor="black"
              icon={<ViewIcon />}
            />
          </Flex> */}
        </Flex>
        <Flex
          align="center"
          justifyContent="space-between"
          p={2}
          m={2}
          borderRadius="10px"
          backgroundColor="black"
        >
          <Text marginEnd={2} fontWeight="bold">
            New conversation
          </Text>
          <IconButton
            _hover={{
              bgColor: "blue",
            }}
            bgColor="black"
            icon={<ExternalLinkIcon />}
          />
        </Flex>
        <Flex
          direction="column"
          sx={{
            overflowY: "scroll",
            scrollbarColor: "black",
            scrollbarWidth: "1px",
          }}
        >
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
