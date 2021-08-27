import React from "react";

import "./Options.css";

const Options = (props) => {
  const options1 = [
    {
      text: "Yes !",
      handler: props.actionProvider.handleYesInitial,
      id: 1,
    },
    { text: "No !", handler: () => {}, id: 2 },
    
  ];
  const options2 = [
    {
      text: "CUNY",
      handler: props.actionProvider.handleCUNY,
      id: 3,
    },
    { 
      text: "SUNY", 
      handler: props.actionProvider.handleSUNY, 
      id: 4 
    },
    
  ];

  const buttonsMarkup = options1.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));
  // return <div className="options-container">{buttonsMarkup}</div>;
  // const buttonsMarkup = options2.map((option) => (
  //   <button key={option.id} onClick={option.handler} className="option-button">
  //     {option.text}
  //   </button>
  // ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;