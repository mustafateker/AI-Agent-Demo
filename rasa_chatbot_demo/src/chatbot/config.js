import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "CryptoBot",
  initialMessages: [createChatBotMessage(`Hello! How can I assist you with your crypto transactions?`)],
};

export default config;
