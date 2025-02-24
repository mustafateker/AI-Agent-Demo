class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      if (message.includes("swap")) {
        this.actionProvider.handleSwapRequest(message);
      } else if (message.includes("merge")) {
        this.actionProvider.handleMergeRequest(message);
      } else if (message.includes("multisend")) {
        this.actionProvider.handleMultiSendRequest(message);
      } else {
        this.actionProvider.handleDefault(message);
      }
    }
  }
  
  export default MessageParser;
  