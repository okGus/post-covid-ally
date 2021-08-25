class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    //Campus Solution Links
    handleCampusNavigationList = () => {
        const message = this.createChatBotMessage(
          "What navigation services do you need assistance for ? :",
          {
            widget: "CampusNavigationLinks",
          }
        );
    
        this.updateChatbotState(message);
    };

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }
    introduce() {
        const greetingMessage = this.createChatBotMessage("I am a bot created by TeamRocket to help Students on their journey of transitioning back to in-person life !")
        this.updateChatbotState(greetingMessage)
    }

    nervous() {
        const greetingMessage = this.createChatBotMessage("Transitioning Back to in-Person isn't easy after this Pandemic !")
        // const greetingMessage2 = this.createChatBotMessage("We are all in this together :)")
        this.updateChatbotState(greetingMessage)
        
        // this.updateChatbotState(greetingMessage2)
        // this.updateChatbotState(greetingMessage)
    }
    ext() {
        const greetingMessage2 = this.createChatBotMessage("We are all in this together :)")
        // this.sleep(50)
        this.updateChatbotState(greetingMessage2)
    }

    updateChatbotState(message){
        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message],
        }))
    }
  }
  
  export default ActionProvider;