import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async sendToRasa(message) {
    try {
      const response = await axios.post("http://localhost:5005/webhooks/rest/webhook", { message });
      return response.data;
    } catch (error) {
      return [{ text: "Sorry, an error occurred while processing your request." }];
    }
  }

  async handleSwapRequest(message) {
    const response = await this.sendToRasa(message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, this.createChatBotMessage(response[0].text)],
    }));
  }

  async handleMergeRequest(message) {
    const response = await this.sendToRasa(message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, this.createChatBotMessage(response[0].text)],
    }));
  }

  async handleMultiSendRequest(message) {
    const response = await this.sendToRasa(message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, this.createChatBotMessage(response[0].text)],
    }));
  }

  handleDefault(message) {
    const botMessage = this.createChatBotMessage("I'm not sure how to process that request.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
}

export default ActionProvider;
