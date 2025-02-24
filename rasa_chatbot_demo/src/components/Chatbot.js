import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

const ChatbotComponent = () => {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default ChatbotComponent;
