import React, { useState } from "react";

const OutputDisplay = ({ words, isPhonotactic }) => {
  const [showIpaCharacters, setShowIpaCharacters] = useState(false);
  const ipaCharacters = [
    { ipa: "aː", grapheme: "á" },
    { ipa: "a͡u", grapheme: "au" },
    { ipa: "ʦ", grapheme: "c" },
    { ipa: "ʧ", grapheme: "č" },
    { ipa: "ɟ", grapheme: "ď" },
    { ipa: "ʣ", grapheme: "dz" },
    { ipa: "ʤ", grapheme: "dž" },
    { ipa: "ɛ", grapheme: "e" },
    { ipa: "ɛː", grapheme: "é" },
    { ipa: "ɛ͡u", grapheme: "eu" },
    { ipa: "ɦ", grapheme: "h" },
    { ipa: "x", grapheme: "ch" },
    { ipa: "ɪ", grapheme: "i" },
    { ipa: "iː", grapheme: "í" },
    { ipa: "ɲ", grapheme: "ň" },
    { ipa: "oː", grapheme: "ó" },
    { ipa: "o͡u", grapheme: "ou" },
    { ipa: "r̝", grapheme: "ř" },
    { ipa: "ʃ", grapheme: "š" },
    { ipa: "c", grapheme: "ť" }, 
    { ipa: "uː", grapheme: "ú" },
    { ipa: "ʒ", grapheme: "ž" },
];

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
                  <li key={index}>
                    {char.ipa} ({char.grapheme})
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
