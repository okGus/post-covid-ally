import db from "../firebase";
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

    handleOptionOne = () => {
        const message = this.createChatBotMessage("Whats Your Business?", {
            widget: "optionOne",
        });

        this.addMessageToState(message);
    };

    handleJavascriptQuiz = (ans) => {
        chat[chat.length - 1] = { ...chat[chat.length - 1], ans: ans };

        const message = this.createChatBotMessage(
            "Fantastic.So what type of collaborations are you looking for?",
            {
                widget: "optionTwo",
            }
        );

        this.addMessageToState(message);
    };

    handleOptionTwo = (ans) => {
        chat[chat.length - 1] = { ...chat[chat.length - 1], ans: ans };
        const message = this.createChatBotMessage("Whats your budget?", {
            widget: "optionThree",
        });

        this.addMessageToState(message);
    };
    handleOptionThree = (ans) => {
        chat[chat.length - 1] = { ...chat[chat.length - 1], ans: ans };
        const message = this.createChatBotMessage(
            "Are You looking for Online Collaboration?",
            {
                widget: "optionFour",
            }
        );

        this.addMessageToState(message);
    };
    handleOptionFour = (ans) => {
        chat[chat.length - 1] = { ...chat[chat.length - 1], ans: ans };
        const message = this.createChatBotMessage(
            "Thanks for the details,Please drop your contact number",
            {
                widget: "",
            }
        );

        this.addMessageToState(message);
    };
    details = (ans) => {
        if (ans) {
            chat[chat.length - 1] = { ...chat[chat.length - 1], ans: ans };
        } else chat.pop();

        const message = this.createChatBotMessage(
            "Write additional details,which will help to grab attention of <influencer>(Start with writing 'The Details are:'):"
        );
        this.addMessageToState(message);
    };

    greet = (ans) => {
        if (ans) {
            chat[chat.length - 1] = { ...chat[chat.length - 1], ans: ans };
        } else chat.pop();

        const message = this.createChatBotMessage(
            "Fabulous,will talk to you soon.Livi"
        );
        this.addMessageToState(message);

        sendData();
    };
    phonenumber = (inputtxt) => {
        var phoneno = /^\d{10}$/;

        if (inputtxt)
            chat[chat.length - 1] = { ...chat[chat.length - 1], ans: inputtxt };
        else chat.pop();
        if (inputtxt.value.match(phoneno)) {
            return true;
        } else {
            alert("Not a valid Phone Number");
            return false;
        }
    };

    addMessageToState = (message) => {
        chat.push({ ques: message.message });

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;