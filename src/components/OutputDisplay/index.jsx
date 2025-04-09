import React, { useState } from "react";
import { ipaCharacters } from "../../helpers/constants.js";

const OutputDisplay = ({ words, isPhonotactic }) => {
  const [showIpaCharacters, setShowIpaCharacters] = useState(false);

  const toggleIpaCharacters = () => {
    setShowIpaCharacters(!showIpaCharacters);
  };

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
      {isPhonotactic && (
        <div className="ipaForm">
          <h3 onClick={toggleIpaCharacters} style={{ cursor: "pointer" }}>
            IPA Characters Guide
            <span
              onClick={toggleIpaCharacters}
              style={{ cursor: "pointer", paddingLeft: "10px" }}
            >
              ❓
            </span>
          </h3>
          {showIpaCharacters && (
            <div className="ipaField">
              <p>
                When selecting phonotactic pobability, the following IPA
                characters can be entered as input:
              </p>
              <ul>
                {ipaCharacters.map((char, index) => (
                  <li key={index} className="ipaItem">
                    <span className={`ipaChar ${char.different === 'y' ? 'highlightDifferent' : ''}`}> {char.ipa} </span>{" "}
                    <span className="ipaGrapheme"> ({char.grapheme}) </span>{" "}
                    <span className="ipaDescription"> {char.description} </span>{" "}
                    <span className="ipaExample"> {char.synExample} </span>
                  </li>
                ))}
              </ul>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OutputDisplay;
