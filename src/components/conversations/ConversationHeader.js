import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ConversationHeader = ({ conversation }) => {
  const username = localStorage.getItem("user");
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      align="center"
      spacing={6}
      py={5}
      sx={{ height: "59px" }}
      px={4}
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Stack direction="row">
        <Text color="whiteAlpha.600">Recipient: </Text>
        {username === conversation.createdBy ? (
          <Text fontWeight={600}>{conversation.recipient}</Text>
        ) : (
          <Text fontWeight={600}>{conversation.createdBy}</Text>
        )}
      </Stack>
    </Stack>
  );
};

export default ConversationHeader;
