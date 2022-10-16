import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Participant = ({ username, removeParticipant }) => {
  return (
    <>
      <Flex align="center" mt={4} flexWrap="wrap">
        <Stack
          direction="row"
          align="center"
          bg="whiteAlpha.200"
          borderRadius={4}
          p={2}
        >
          <Text>Participant: {username}</Text>
          {/* remove icon */}
          <IoIosCloseCircleOutline
            size={20}
            cursor="pointer"
            onClick={removeParticipant}
          />
        </Stack>
      </Flex>
    </>
  );
};

export default Participant;
