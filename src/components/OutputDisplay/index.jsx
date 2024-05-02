import React from "react";

const OutputDisplay = ({ words }) => {
  return (
    <div>
      <h2>Generated Words</h2>
      <ul>
        {words.map((item, index) => (
          <li key={index}>
            <div>{item.word}</div>
            <div>probability: {item.probability.toFixed(4)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutputDisplay;
