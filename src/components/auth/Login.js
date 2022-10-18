import React, { useState, useEffect, useRef } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({ username, password }).unwrap();
      console.log("from login componenet: " + response);
      dispatch(setCredentials({ ...response }));
      setUsername("");
      setPassword("");
      history("/home");
    } catch (error) {
      console.log(error);
    }
    // const response = await axios
    //   .post(
    //     "/auth/login",
    //     {
    //       username,
    //       password,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(
    //     (token) =>
    //       (axios.defaults.headers.common[
    //         "Authorization"
    //       ] = `Bearer ${token.data.accessToken}`)
    //   )
    //   .catch((err) => console.log(err));

    // if (response) {
    //   history("/home");
    // }
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
