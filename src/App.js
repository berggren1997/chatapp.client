import { ChakraProvider, Flex } from "@chakra-ui/react";
import ChatArea from "./components/chat/ChatArea";
import Navbar from "./components/Navbar";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <ChakraProvider>
      <Flex h="100vh">
        <Navbar />
        <Sidebar />
        <ChatArea />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
