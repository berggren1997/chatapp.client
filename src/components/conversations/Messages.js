import {
  Flex,
  Avatar,
  Text,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";

const Messages = ({ chatMessages }) => {
  const username = localStorage.getItem("user");
  const [chatMessage, setChatMessage] = useState([chatMessages]);
  const [newMessage, setNewMessage] = useState("");

  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7093/chathub")
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then((result) => {
        console.log("Connected");
        connection.on("ReceiveMessage", (message) => {
          setChatMessage([...chatMessage, message]);
          console.log(message);
        });
      });
    }
  }, [connection]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (connection) {
      try {
        await connection.invoke("SendMessageAsync", newMessage);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Flex overflowY="scroll" flex={1} p={3} direction="column">
        {chatMessages &&
          chatMessages.map((message) => (
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
      </Flex>
      <Flex p={3}>
        <form style={{ width: "100%" }} onSubmit={sendMessage}>
          <Input
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
