import { Flex, Avatar, Text } from "@chakra-ui/react";
import { useGetConversationsQuery } from "./conversationsApiSlice";

const ChatList = () => {
  // const [conversations, setConversations] = useState([]);
  const {
    data: conversations,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetConversationsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>something went wrong</div>;
  return (
    <>
      {conversations &&
        conversations.map((conversation) => (
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
            key={conversation.id}
          >
            <Avatar src="" size="sm" />
            <Text ml={4}>{conversation.recipient}</Text>
          </Flex>
        ))}
    </>
  );
};

export default ChatList;
