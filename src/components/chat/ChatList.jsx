import React, { useEffect, useState } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";
import axios from "axios";

const ChatList = () => {
  const [conversations, setConversations] = useState([]);

  // const fetchConversations = async () => {
  //   axios.defaults.withCredentials = true;
  //   axios.defaults.headers.common["Authorization"] =
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYm9iIiwidXNlcklkIjoiMSIsImV4cCI6MTY2NjM4NDY2MH0.tq33nLZsqAYE-pgD93FeW530QQ9TAMCNHE_8WoS9cMg";
  //   await axios
  //     .get("https://localhost:7093/api/v1/conversation/userConversations")
  //     .then((conversations) => setConversations(conversations.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   // fetch conversations
  //   fetchConversations();
  // }, []);

  if (conversations) {
    console.log(conversations);
  }

  return (
    <Flex
      _hover={{
        bgColor: "blackAlpha.600",
        borderRadius: "10px",
        cursor: "pointer",
        color: "black",
      }}
      p={3}
      m={2}
      align="center"
    >
      <Avatar src="" marginEnd={2} />
      <Text>user@example.com</Text>
    </Flex>
  );
};

export default ChatList;
