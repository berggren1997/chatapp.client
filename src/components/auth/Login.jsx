import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const currentUser = () => {
    axios.get("auth/current-user").catch((err) => console.log(err));
    // .then((x) => console.log(x.data));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      // .then((token) => setAccessToken(token.data.accessToken))
      .then(
        (token) =>
          (axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token.data.accessToken}`)
      )
      .catch((err) => console.log(err));

    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${data["accessToken"]}`;
  };
  return (
    <>
      <Flex flex={1} bg="blackAlpha.900" justify="center">
        <Flex mt={4} flexDirection="column" marginTop="15%" w="30%">
          <form onSubmit={onSubmit}>
            <Flex mb={4}>
              <Input
                h="50px"
                bg="black"
                border="none"
                placeholder="Username"
                value={username}
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
              disabled={!username || !password}
              _hover={{
                bg: "blue.900",
              }}
            >
              Login
            </Button>
            <Button
              onClick={currentUser}
              h="50px"
              bg="blue"
              w="100%"
              mt={3}
              mb={2}
              _hover={{
                bg: "blue.900",
              }}
            >
              Fetch current user
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
