import { ChakraProvider, Flex } from "@chakra-ui/react";
import ChatArea from "./ChatArea";
import Navbar from "./Navbar";
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
