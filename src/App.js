import { ChakraProvider, Flex } from "@chakra-ui/react";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./layout/HomePage";
import Register from "./components/auth/Register";
import RequireAuth from "./features/auth/RequireAuth";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Flex h="100vh">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<HomePage />} />
            </Route>
          </Routes>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default App;
