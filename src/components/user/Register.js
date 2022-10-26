import React, { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import agent from "../../app/api/agent";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await agent.User.register({
        username,
        email,
        password,
        confirmPassword,
      });
      if (response) {
        history("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Problem registering user", {
        theme: "dark",
      });
    }
  };
  return (
    <>
      <Flex flex={1} bg="blackAlpha.900" justify="center">
        <Flex mt={4} flexDirection="column" marginTop="15%" w="30%">
          <form onSubmit={onSubmit}>
            {/* <Flex mb={4}>
              <Input
                h="50px"
                bg="black"
                border="none"
                placeholder="Firstname"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <Input
                ml={2}
                h="50px"
                bg="black"
                border="none"
                placeholder="Lastname"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Flex> */}
            <Flex mb={2}>
              <Input
                h="50px"
                bg="black"
                border="none"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <Input
                ml={2}
                h="50px"
                bg="black"
                border="none"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Flex>
            <Flex mb={2}>
              <Input
                h="50px"
                bg="black"
                border="none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Flex>
            <Flex>
              <Input
                h="50px"
                bg="black"
                border="none"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Flex>
            <Button
              h="50px"
              bg="blue"
              w="100%"
              type="submit"
              mt={3}
              mb={2}
              disabled={!username || !password}
              _hover={{
                bg: "blue.900",
              }}
            >
              Register
            </Button>
            <Text>Already have an account?</Text>
            <a style={{ textDecoration: "underline" }} href="/">
              Login
            </a>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
