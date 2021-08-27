
// import React from 'react'
// import '../App.css';
import React, { useState } from "react";
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';
import config from '../config';
import { render } from "@testing-library/react";

// render() {
//     const back ={
//         backgroundColor: "DodgerBlue",
//     };
// }

function ChatBot() {

    // render() {
    //     const back ={
    //         backgroundColor: "DodgerBlue",
    //     };
    // }

    const [showBot, toggleBot] = useState(false);

    const saveMessages = (messages) => {
        localStorage.setItem("chat_messages", JSON.stringify(messages));
    };
    
    const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
        return messages;
    };


    return (
        
        <div className="App" >
            <div   >
                {showBot && (    
                    <header className="App-header">
                        <Chatbot 
                            config={config} 
                            actionProvider={ActionProvider} 
                            // messageHistory={loadMessages()}
                            messageParser={MessageParser}
                            // saveMessages={saveMessages}
                            
                        />
                    </header>
                )}
            </div>
            <br/>
            <button className="btn" onClick={() => toggleBot((prev) => !prev)}>Access Bot</button>
            <br/><br/>
            <button className="btn" onClick={() => toggleBot((prev) => !prev)}>Close Bot</button>
        </div>
    )

}

export default ChatBot;
