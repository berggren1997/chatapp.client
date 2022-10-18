import React from "react";
import { useSelector } from "react-redux";
import ChatArea from "../components/chat/ChatArea";
import Navbar from "../components/Navbar";
import { selectCurrentToken } from "../features/auth/authSlice";
import Sidebar from "../Sidebar";

const WrapperPage = () => {
  const token = useSelector(selectCurrentToken);
  return (
    <>
      <Navbar />
      <ChatArea />
    </>
  );
};

export default WrapperPage;
