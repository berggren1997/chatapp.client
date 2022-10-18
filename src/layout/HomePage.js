import React from "react";
import ChatArea from "../components/chat/ChatArea";
import Navbar from "../components/Navbar";
import Sidebar from "../Sidebar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ChatArea />
    </>
  );
};

export default HomePage;
