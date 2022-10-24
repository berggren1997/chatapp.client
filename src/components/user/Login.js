import React, { useState, useEffect, useRef } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import agent from "../../app/api/agent";

const Login = () => {
  const userRef = useRef();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [userName, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await agent.User.login({ userName, password });
      const { accessToken, username } = response;
      setUsername("");
      setPassword("");
      localStorage.setItem("jwt", accessToken);
      localStorage.setItem("user", username);
      history("/conversations");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Flex flex={1} bg="blackAlpha.900" justify="center">
        <Flex mt={4} flexDirection="column" marginTop="15%" w="30%">
          <form onSubmit={handleSubmit}>
            <Flex mb={4}>
              <Input
                h="50px"
                bg="black"
                ref={userRef}
                border="none"
                placeholder="Username"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Flex>
            <Flex>
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
            <Button
              h="50px"
              bg="blue"
              w="100%"
              type="submit"
              mt={3}
              mb={2}
              disabled={!userName || !password}
              _hover={{
                bg: "blue.900",
              }}
            >
              Login
            </Button>
            <Text>Don't have an account?</Text>
            <a style={{ textDecoration: "underline" }} href="/register">
              Register
            </a>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
