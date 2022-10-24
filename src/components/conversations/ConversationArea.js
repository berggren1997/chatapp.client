import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ConversationHeader from "./ConversationHeader";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";

const ConversationArea = () => {
  const { id } = useParams();
  const [conversation, setConversation] = useState({});

  const getConversation = async () => {
    if (id) {
      const response = await agent.Conversations.getConversations(parseInt(id));
      setConversation(response);
    }
  };
  useEffect(() => {
    getConversation();
  }, [id]);

  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Flex
        bg="blackAlpha.900"
        flexGrow={1}
        direction="column"
        // border="2px solid red"
        width="100%"
        display={{ base: id ? "flex" : "none", md: "flex" }}
      >
        {id ? (
          <Flex
            direction="column"
            justify="space-between"
            flexGrow={1}
            overflow="hidden"
            // border="1px solid red"
          >
            {/* conversation id: {id} */}
            <ConversationHeader conversation={conversation} />
            {/* <Messages /> */}
            <Flex flex={1} p={3} direction="column" border="1px solid red">
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
                  this is a dummy message from you
                </Text>
                <Text fontSize="2xs">14:10</Text>
              </Flex>

              <Flex align="center" p={3}>
                <Avatar src="" size="xs" />
                <Text
                  bg="whiteAlpha.300"
                  w="fit-content"
                  minWidth="100px"
                  borderRadius="10px"
                  p={2}
                  m={2}
                >
                  this is a dummy message from the one you're taling too
                </Text>
                <Text fontSize="2xs">14:28</Text>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <div>no conversation selected</div>
        )}
      </Flex>
    </>
  );
};

export default ConversationArea;
