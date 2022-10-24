import { Avatar, Flex, Stack, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Participant from "./Participant";
import { useNavigate } from "react-router-dom";
import agent from "../app/api/agent";

const ConversationSearchList = ({ users }) => {
  const [recipient, setRecipient] = useState("");
  const navigate = useNavigate();

  const createConversation = async (username) => {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // const response = await axios
    //   .post(`https://localhost:7093/api/v1/conversation/${username}`)
    //   .catch((err) => console.log(err));
    const response = await agent.Conversations.createConversation(username);

    if (response.status === 200) {
      const conversationId = response.data;
      navigate(`/conversations/${conversationId}`);

      setRecipient("");
    }
  };

  const removeParticipant = () => {
    setRecipient("");
  };

  if (users.length === 0) {
    return (
      <>
        <Flex mt={6} justify="center">
          <Text>No users found</Text>
        </Flex>
      </>
    );
  }
  if (users.length > 0) {
    return (
      <>
        <Stack mt={6}>
          {users.map((user) => {
            return (
              <Stack
                key={user.id}
                direction="row"
                align="center"
                spacing={4}
                py={2}
                px={4}
                borderRadius={4}
                _hover={{
                  bg: "whiteAlpha.200",
                  cursor: "pointer",
                }}
              >
                <Avatar size="sm" />
                <Flex justify="space-between" w="100%" align="center">
                  <Text color="whiteAlpha.700">{user.username}</Text>
                  <Button
                    bg="blue"
                    _hover={{
                      bg: "blue.900",
                    }}
                    onClick={() => setRecipient(user.username)}
                  >
                    Select
                  </Button>
                </Flex>
              </Stack>
            );
          })}
        </Stack>
        {recipient && (
          <>
            <Participant
              username={recipient}
              removeParticipant={removeParticipant}
            />
            <Button
              mt={4}
              w="100%"
              bg="blue"
              _hover={{ bg: "blue" }}
              onClick={() => createConversation(recipient)}
            >
              Create conversation
            </Button>
          </>
        )}
      </>
    );
  }
};

export default ConversationSearchList;
