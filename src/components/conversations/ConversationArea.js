import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ConversationHeader from "./ConversationHeader";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import Messages from "./Messages";

const ConversationArea = () => {
  const { id } = useParams();
  const [conversation, setConversation] = useState({});
  const [connection, setConnection] = useState(null);

  const getConversation = async () => {
    if (id) {
      const response = await agent.Conversations.getConversations(parseInt(id));
      setConversation(response);
    }
  };
  // useEffect(() => {
  //   const newConnection = new HubConnectionBuilder()
  //     .withUrl("https://localhost:7093/chathub")
  //     .withAutomaticReconnect()
  //     .build();

  //   setConnection(newConnection);
  // }, []);

  // useEffect(() => {
  //   if (connection) {
  //     connection.start().then((result) => {
  //       console.log("Connected");
  //       connection.on("ReceiveMessage");
  //     });
  //   }
  // }, [connection]);
  useEffect(() => {
    getConversation();
  }, [id]);

  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Flex
        bg="blackAlpha.900"
        flex={1}
        direction="column"
        // border="2px solid red"
        width="100%"
        display={{ base: id ? "flex" : "none", md: "flex" }}
      >
        {id ? (
          <Flex
            direction="column"
            justify="space-between"
            flex={1}
            // flexGrow={1}
            overflowY="scroll"
            // border="1px solid red"
          >
            {/* conversation id: {id} */}
            <ConversationHeader conversation={conversation} />
            {/* <Messages /> */}
            <Messages chatMessages={conversation.chatMessages} />
          </Flex>
        ) : (
          <div>no conversation selected</div>
        )}
      </Flex>
    </>
  );
};

export default ConversationArea;
