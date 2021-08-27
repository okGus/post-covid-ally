import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";


import Options from "./components/Options/Options";
import QA from "./components/QA/QA";

const config = {
    botName : "Post Covid Ally",
    initialMessages: [
        createChatBotMessage(`Hello, I'm here anytime you need me`, {
            // widget: "LearningOptions",
        }),

    ],
    
    widgets: [

        {
          widgetName: "options1",
          widgetFunc: (props) => <Options {...props} />,
        },
        {
          widgetName: "options2",
          widgetFunc: (props) => <Options {...props} />,
        },
        {
          widgetName: "QuestionAnswer",
          widgetFunc: (props) => <QA {...props} />,
          props: {
            questions: [
              {
                question: "What is closure?",
                answer:
                  "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
                id: 1,
              },
              {
                question: "Explain prototypal inheritance",
                answer:
                  "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
                id: 2,
              },
            ],
          },
        },
        {
            widgetName : "LearningOptions",
            widgetFunc : (props) => <LearningOptions {...props} />,
        },
        {
            widgetName : "CampusNavigationLinks",
            widgetFunc : (props) => <LinkList {...props} />,
            props: {
                options: [
                  {
                    text: "CUNY Maps",
                    url:
                      "https://reps.carto.com/viz/834726ea-105f-11e5-9863-0e9d821ea90d/public_map",
                    id: 1,
                  },
                  {
                    text: "NYC Subway",
                    url:
                      "https://reps.carto.com/viz/34361e72-105e-11e5-a1b9-0e6e1df11cbf/public_map",
                    id: 2,
                  },
                ],
              },

        },
        {
            widgetName : "UserChatLink",
            widgetFunc : (props) => <LinkList {...props} />,
            props: {
                options: [
                  {
                    text: "talk to user",
                    url:
                      "/Chat",
                    id: 1,
                  },
                ],
              },

        },
    ],

    
    customStyles: {
        botMessageBox : {
            backgroundColor : "#10877c",
        },
        chatButton: {
            backgroundColor : "#10877c",
        },
    },

}

export default config