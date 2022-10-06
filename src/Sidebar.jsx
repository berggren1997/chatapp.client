import { Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import ChatList from "./components/chat/ChatList";
import "./index.css";
import ModalForm from "./modals/ModalForm";

const Sidebar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = React.useRef(null);

  return (
    <>
      {isOpen && <ModalForm isOpen={isOpen} />}
      <Flex
        bg="blackAlpha.900"
        w="300px"
        borderEnd="1px solid"
        borderColor="blackAlpha.500"
        flexDirection="column"
      >
        <Flex
          h="81px"
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
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
          />
        </Flex>
        <Flex
          className="test"
          direction="column"
          sx={{
            overflowY: "scroll",
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
