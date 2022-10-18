import { Flex, Avatar, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../auth/authSlice";
import { useGetConversationsQuery } from "./conversationsApiSlice";

const ChatList = () => {
  const {
    data: conversations,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetConversationsQuery();
  const username = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const loadConversation = (conversation) => {
    navigate(`/conversation/${conversation.id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>something went wrong</div>;
  return (
    <>
      {conversations &&
        conversations.map((conversation) => (
          <Flex
            key={conversation.id}
            _hover={{
              bgColor: "blackAlpha.600",
              borderRadius: "10px",
              cursor: "pointer",
              color: "black",
            }}
            p={3}
            m={2}
            align="center"
            onClick={() => loadConversation(conversation)}
          >
            <Avatar src="" size="sm" />
            {conversation.recipient === username ? (
              <Text ml={4}>{conversation.createdBy}</Text>
            ) : (
              <Text ml={4}>{conversation.recipient}</Text>
            )}
          </Flex>
        ))}
    </>
  );
};

export default ChatList;
