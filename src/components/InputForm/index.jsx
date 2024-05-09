import React, { useState, useEffect, useRef } from "react";

const InputForm = ({ onGenerate, dataChoice }) => {
  const [wordLength, setWordLength] = useState(5);
  const [numWords, setNumWords] = useState(10);
  const [targetProbability, setTargetProbability] = useState(0.003);
  const [characterInputs, setCharacterInputs] = useState(Array(5).fill(""));
  const inputRefs = useRef([]);
  const isPhonotactic = dataChoice === "phonotactic";

  useEffect(() => {
    const length = Math.max(2, parseInt(wordLength) || 2);
    setCharacterInputs(Array(length).fill(""));
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [wordLength]);

  const handleWordLengthChange = (event) => {
    const newLength = event.target.value;
    setWordLength(newLength);
  };

  const handleWordLengthBlur = () => {
    const parsedLength = parseInt(wordLength, 10);

    if (!isNaN(parsedLength) && parsedLength >= 2) {
      setWordLength(parsedLength);
    } else {
      setWordLength(2);
    }
  };
  const handleNumWordsChange = (event) => {
    setNumWords(event.target.value);
  };

  const handleNumWordsBlur = () => {
    const parsedNumWords = parseInt(numWords, 10);
    if (!isNaN(parsedNumWords) && parsedNumWords > 0) {
      setNumWords(parsedNumWords);
    } else {
      setNumWords(1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate(wordLength, numWords, targetProbability, characterInputs);
  };

  const handleCharacterChange = (index, value) => {
    const updatedInputs = [...characterInputs];
    updatedInputs[index] = value;
    setCharacterInputs(updatedInputs);

    if (value && index + 1 < characterInputs.length) {
      if (isPhonotactic) {
        if (value.length === 3) {
          inputRefs.current[index + 1].focus();
        }
      } else {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <form className="inputForm" key={dataChoice} onSubmit={handleSubmit}>
      <div>
        <label>
          Word Length:
          <input
            type="number"
            className="inputField"
            value={wordLength}
            onChange={handleWordLengthChange}
            onBlur={handleWordLengthBlur}
            min="2"
          />
        </label>
      </div>
      <div>
        <label>
          Number of Words:
          <input
            type="number"
            className="inputField"
            value={numWords}
            onChange={handleNumWordsChange}
            onBlur={handleNumWordsBlur}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>
          Target Probability:
          <input
            type="number"
            className="inputField"
            step="0.0001"
            max="1"
            min="0"
            value={targetProbability}
            onChange={(e) => setTargetProbability(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div className="characterInputs">
        <label>Required characters: </label>
        <div className="charForm">
          {characterInputs.map((char, index) => (
            <input
              key={index}
              type="text"
              autoCapitalize="none"
              className="charField"
              maxLength={isPhonotactic ? 3 : 1}
              value={char}
              onChange={(e) => handleCharacterChange(index, e.target.value)}
              ref={(el) => (inputRefs.current[index] = el)}
              placeholder={`${index + 1}`}
            />
          ))}
        </div>
      </div>
      <button className="calculateButton" type="submit">
        Generate
      </button>
    </form>
  );
};

export default InputForm;
