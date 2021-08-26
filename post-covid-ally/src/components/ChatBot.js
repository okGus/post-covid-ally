import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';
import config from '../config';

function ChatBot() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </header>
            </div>
        </div>
    )
}

export default ChatBot