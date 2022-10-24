import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ConversationList from "./ConversationList";
// import "./index.css";
import ModalForm from "../../modals/ModalForm";

const ConversationSidebar = ({ conversations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <ModalForm isOpen={isOpen} onClose={onClose} />
      <Flex
        bg="blackAlpha.900"
        // flexGrow={1}
        w="300px"
        borderEnd="1px solid"
        borderColor="whiteAlpha.200"
        flexDirection="column"
      >
        <Flex
          h="60px"
          w="100%"
          align="center"
          justifyContent="center"
          p={3}
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
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
          backgroundColor="whiteAlpha.200"
        >
          <Text marginEnd={2} fontWeight="bold">
            New conversation
          </Text>
          <IconButton
            _hover={{
              bgColor: "blue",
            }}
            bgColor="whiteAlpha.200"
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
          {conversations && <ConversationList conversations={conversations} />}
        </Flex>
      </Flex>
    </>
  );
};
export default ConversationSidebar;
