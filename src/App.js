import { ChakraProvider, Flex } from "@chakra-ui/react";
import Login from "./components/user/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/user/Register";
import RequireAuth from "./features/auth/RequireAuth";
import ConversationPage from "./pages/ConversationPage";
import ConversationArea from "./components/conversations/ConversationArea";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Flex h="100vh">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="/conversations" element={<ConversationPage />}>
                <Route path=":id" element={<ConversationArea />} />
              </Route>
            </Route>
          </Routes>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default App;
