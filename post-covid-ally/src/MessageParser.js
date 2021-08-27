class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    // parse = () => {
    //     if (rule) {
    //         this.actionProvider.handleSomething()
    //     }
        
    //     this.actionProvider.catchMessages()
    //  }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        if (lowerCaseMessage.includes("campus") || lowerCaseMessage.includes("navigation") ) {
            this.actionProvider.handleCampusNavigationList();
        }
        if (lowerCaseMessage.includes("talk") ) {
            this.actionProvider.askQuestion();
            // this.actionProvider.moveToChat();
            // this.actionProvider.chatUser();
        }
        if (lowerCaseMessage.includes("collab") ) {
            this.actionProvider.handleOptionThree(lowerCaseMessage);
            // this.actionProvider.chatUser();
        }
        if (lowerCaseMessage.includes("number") ) {
            this.actionProvider.handleOptionFour(message);
            // this.actionProvider.chatUser();
        }
        if (lowerCaseMessage.includes("user") ) {
            this.actionProvider.moveToChat();
            // this.actionProvider.chatUser();
        }
       
        // if (lowerCaseMessage.includes("Yes") ) {
        //     this.actionProvider.askCollege();
        //     // this.actionProvider.chatUser();
        // }
        if (lowerCaseMessage.includes("who are you")){
            this.actionProvider.introduce()
        }
        if (lowerCaseMessage.includes("nervous")){
            this.actionProvider.nervous()
            
        }
    
      console.log(message)
    }
  }
  
  export default MessageParser;