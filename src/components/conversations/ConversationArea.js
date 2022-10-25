import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ConversationHeader from "./ConversationHeader";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Messages from "./Messages";

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

  return (
    <>
      <Flex
        bg="blackAlpha.900"
        flex={1}
        direction="column"
        width="100%"
        display={{ base: id ? "flex" : "none", md: "flex" }}
      >
        {id ? (
          <Flex
            direction="column"
            justify="space-between"
            flex={1}
            overflowY="scroll"
          >
            <ConversationHeader conversation={conversation} />
            <Messages />
          </Flex>
        ) : (
          <div>no conversation selected</div>
        )}
      </Flex>
    </>
  );
};

export default ConversationArea;
