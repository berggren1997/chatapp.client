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

const ModalForm = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");

  const onSearch = async (event) => {
    // search users request
    event.preventDefault();
    console.log(username);
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
                  bg="whiteAlpha.100"
                  _hover={{ bg: "blue" }}
                  type="submit"
                  disabled={!username}
                >
                  Search
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForm;
