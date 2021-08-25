import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
    botName : "Post Covid Ally",
    initialMessages: [
        createChatBotMessage(`Hello, I'm here if you need any assistance`, {
            // widget: "LearningOptions",
        }),

    ],
    
    widgets: [
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

        }
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