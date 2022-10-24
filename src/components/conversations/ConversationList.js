import { Flex, Avatar, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ConversationList = ({ conversations }) => {
  const username = localStorage.getItem("user");
  const navigate = useNavigate();

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
            onClick={() => navigate(`conversations/${conversation.id}`)}
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

export default ConversationList;
