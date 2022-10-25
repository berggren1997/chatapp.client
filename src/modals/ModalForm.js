import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import ConversationSearchList from "./ConversationSearchList";
import agent from "../app/api/agent";

const ModalForm = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  const onSearch = async (event) => {
    event.preventDefault();

    const response = await agent.User.searchUser(username).catch((err) =>
      console.log(err)
    );

    if (response) {
      setSearchedUsers(response);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#2d2d2d" pb={4}>
          <ModalHeader>New Conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input
                  placeholder="Search for a username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <Button
                  bg="blue"
                  _hover={{ bg: "blue.900" }}
                  type="submit"
                  disabled={!username}
                >
                  Search
                </Button>
              </Stack>
            </form>
            {searchedUsers && <ConversationSearchList users={searchedUsers} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForm;
