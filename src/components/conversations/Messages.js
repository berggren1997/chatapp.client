import { Flex, Avatar, Text, Input, Button } from "@chakra-ui/react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../app/api/agent";
import { isNullOrWhiteSpace } from "../../utils/utils";
import { useRef } from "react";

const Messages = () => {
  const { id } = useParams();
  const username = localStorage.getItem("user");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomOfChat = useRef();

  const [connection, setConnection] = useState(null);

  const getMessages = async () => {
    if (id) {
      const response = await agent.Messages.getMessagesInConversation(
        parseInt(id)
      );

      if (response) {
        setMessages(response);
      }
    }
  };

  useEffect(() => {
    scrollToRef();
  }, [messages]);
  const scrollToRef = () => {
    bottomOfChat.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    getMessages();
  }, [id]);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7093/chathub", {
        accessTokenFactory: () => {
          return localStorage.getItem("jwt");
        },
      })
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then((result) => {
        console.log("Connected");
        try {
          connection.on("ReceiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [connection]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (connection && !isNullOrWhiteSpace(newMessage) && id) {
      try {
        await connection.invoke("SendMessageAsync", newMessage, parseInt(id));
        setNewMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Flex overflowY="scroll" flex={1} p={3} direction="column">
        {messages &&
          messages.map((message) => (
            <Flex
              justify={username === message.fromUsername ? "flex-end" : ""}
              align="center"
              p={2}
              key={message.id}
            >
              <Avatar src="" size="xs" />
              <Text
                bg={
                  message.fromUsername === username
                    ? "blue.500"
                    : "whiteAlpha.300"
                }
                w="fit-content"
                minWidth="100px"
                borderRadius="10px"
                p={2}
                m={2}
              >
                {message.message}
              </Text>
              <Text fontSize="2xs">{message.createdAt.split("T")[0]}</Text>
            </Flex>
          ))}
        <div ref={bottomOfChat}></div>
      </Flex>
      <Flex p={3}>
        <form style={{ width: "100%" }} onSubmit={sendMessage}>
          <Input
            borderRadius="15px"
            border="none"
            type="text"
            autoComplete="off"
            placeholder="Enter message..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <Button type="submit" hidden></Button>
        </form>
      </Flex>
    </>
  );
};

export default Messages;
