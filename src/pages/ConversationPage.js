import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConversationArea from "../components/conversations/ConversationArea";
import ConversationSidebar from "../components/conversations/ConversationSidebar";
import agent from "../app/api/agent";

const ConversationPage = () => {
  const [conversations, setConversations] = useState([]);
  const { id } = useParams();
  const getConversations = async () => {
    const response = await agent.Conversations.getUserConversations();
    setConversations(response);
  };
  useEffect(() => {
    getConversations();
  }, [id]);

  return (
    <>
      {/* <Navbar /> */}
      <ConversationSidebar conversations={conversations} />
      <ConversationArea />
    </>
  );
};

export default ConversationPage;
