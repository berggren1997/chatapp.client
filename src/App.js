import { ChakraProvider, Flex } from "@chakra-ui/react";
import Login from "./components/user/Login";
import { Route, Routes } from "react-router-dom";
import WrapperPage from "./layout/WrapperPage";
import Register from "./components/user/Register";
import RequireAuth from "./features/auth/RequireAuth";
import ChatArea from "./components/chat/ChatArea";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Flex h="100vh">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<WrapperPage />} />
            </Route>
          </Routes>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default App;
