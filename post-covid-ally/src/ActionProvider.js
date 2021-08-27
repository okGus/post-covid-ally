import './App.css';
import { db } from "./firebase";
var chat = [];

async function sendData() {
  await db
    .collection("bot")
    .add({ chatBot: chat })
    .then(() => {
      console.log("success");
      chat = [];
    })
    .catch((error) => {
      console.log(error);
    });
}
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }


  greet = () => {
    const message = this.createChatBotMessage(
      "Hello, Nice to meet you !"
    );
    this.addMessageToState(message);
  };

  askQuestion = () => {
    const message = this.createChatBotMessage("Before you get to talk to someone, Can you respond to some questions real quick?", {
      widget: "options1",
    }
    );
    this.addMessageToState(message);
  };
  askCollege = () => {
    const message = this.createChatBotMessage("What College or University do you got to?", {
      widget: "options2",
    }
    );
    this.addMessageToState(message);
  };

  handleYesInitial = () => {

    // const message = this.createChatBotMessage(
    //     "Question2 ",
    // );
    const output = "Yes";

    chat[chat.length - 1] = { ...chat[chat.length - 1], ans: output };

    sendData();
    this.askCollege();
  };
  handleCUNY = () => {

    const output = "SUNY";

    chat[chat.length - 1] = { ...chat[chat.length - 1], ans: output };

    sendData();
  };
  handleSUNY = () => {

    const output = "CUNY";


    chat[chat.length - 1] = { ...chat[chat.length - 1], ans: output };

    sendData();
  };
  moveToChat() {
    const message = this.createChatBotMessage(
      "Would you like to talk to user ?",
      {
        widget: "UserChatLink",
      }
    );

    this.updateChatbotState(message);

  };
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
  //Campus Solution Links
  handleCampusNavigationList = () => {
    const message = this.createChatBotMessage(
      "What navigation services do you need assistance for ? ",
      {
        widget: "CampusNavigationLinks",
      }
    );

    this.updateChatbotState(message);
  };

  addMessageToState = (message) => {
    chat.push({ ques: message.message });

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  updateChatbotState(message){
    // NOTE: This function is set in the constructor, and is passed in      
    // from the top level Chatbot component. The setState function here     
    // actually manipulates the top level state of the Chatbot, so it's     
    // important that we make sure that we preserve the previous state.
    this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message],
    }));
    }
}

export default ActionProvider;