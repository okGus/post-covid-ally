class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        if (lowerCaseMessage.includes("who are you")){
            this.actionProvider.introduce()
        }
        if (lowerCaseMessage.includes("nervous")){
            this.actionProvider.nervous()
            
        }
        if (lowerCaseMessage.includes("campus") || lowerCaseMessage.includes("navigation") ) {
            this.actionProvider.handleCampusNavigationList();
        }
        if (lowerCaseMessage.includes("talk") ) {
            this.actionProvider.moveToChat();
            // this.actionProvider.chatUser();
        }

      console.log(message)
    }
  }
  
  export default MessageParser;