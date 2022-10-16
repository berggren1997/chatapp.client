import { ChakraProvider, Flex } from "@chakra-ui/react";
import Login from "./components/auth/Login";
import { BrowserRouter } from "react-router-dom";
import ChatArea from "./components/chat/ChatArea";
import Navbar from "./components/Navbar";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <ChakraProvider>
      <Flex h="100vh">
        {/* <Login /> */}
        <Navbar />
        <Sidebar />
        <ChatArea />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
