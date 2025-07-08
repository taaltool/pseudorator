import React, { useState } from "react";
import { ipaCharacters } from "../../helpers/constants.js";

const OutputDisplay = ({ words, isPhonotactic }) => {
  const [showIpaCharacters, setShowIpaCharacters] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(
    Array(ipaCharacters.length).fill(false)
  );

  const toggleIpaCharacters = () => {
    setShowIpaCharacters(!showIpaCharacters);
  };

  const toggleDetails = (index) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
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
                    <div className="ipaBasic">
                      {" "}
                      <span
                        className={`ipaChar ${
                          char.different === "y" ? "highlightDifferent" : ""
                        }`}
                      >
                        {" "}
                        {char.ipa}{" "}
                      </span>{" "}
                      <span className="ipaGrapheme"> ({char.grapheme}) </span>{" "}
                      <button
                        onClick={() => navigator.clipboard.writeText(char.ipa)}
                        className="copyButton"
                      >
                        copy
                      </button>
                      <button
                        onClick={() => toggleDetails(index)}
                        className="detailsButton"
                      >
                        i
                      </button>
                    </div>
                    {detailsVisible[index] && (
                      <div className="ipaDetails">
                        <span className="ipaDescription">
                          {char.description} as in
                        </span>{" "}
                        <span className="ipaExample"> {char.synExample}</span>
                      </div>
                    )}
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
