import { Flex, IconButton, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import ChatList from "./features/conversations/ChatList";
// import "./index.css";
import ModalForm from "./modals/ModalForm";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./features/auth/authSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectCurrentToken);

  const openModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <ModalForm isOpen={isOpen} onClose={onClose} />
      <Flex
        bg="blackAlpha.900"
        w="300px"
        borderEnd="1px solid"
        borderColor="blackAlpha.500"
        flexDirection="column"
      >
        <Flex
          h="60px"
          w="100%"
          align="center"
          justifyContent="center"
          p={3}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Flex align="center">
            <Text fontSize="19px" fontWeight="bold">
              Conversations
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justifyContent="space-between"
          p={2}
          m={2}
          borderRadius="10px"
          backgroundColor="blackAlpha.600"
        >
          <Text marginEnd={2} fontWeight="bold">
            New conversation
          </Text>
          <IconButton
            _hover={{
              bgColor: "blue",
            }}
            bgColor="blackAlpha.600"
            icon={<ExternalLinkIcon />}
            onClick={openModal}
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
          {token && <ChatList />}
        </Flex>
      </Flex>
    </>
  );
};
export default Sidebar;
