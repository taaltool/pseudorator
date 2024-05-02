import React, { useState, useEffect } from "react";
import OutputDisplay from "../OutputDisplay";
import InputForm from "../InputForm";
import BigramWeigher from "../BigramWeigher";
import DataLoader from "../DataLoader";
import ProbabilityCalculator from "../ProbabilityCalculator";

const Generator = () => {
  const [bigrams, setBigrams] = useState([]);
  const [pseudowords, setPseudowords] = useState([]);
  const [dataChoice, setDataChoice] = useState("orthotactic");

  const generatePseudoword = (bigrams, wordLength, characterInputs) => {
    let word = Array.from({ length: wordLength }, () => "");
    let startIndex = -1;
    let endIndex = -1;

    characterInputs.forEach((char, index) => {
      if (char) {
        word[index] = char;
        if (startIndex === -1) startIndex = index;
        endIndex = index;
      }
    });

    for (let i = startIndex - 1; i >= 0; i -= 2) {
      const randomBigram = BigramWeigher(bigrams, i + 1);
      if (randomBigram) {
        word[i] = randomBigram[0];
        if (i - 1 >= 0) word[i - 1] = randomBigram[1];
      }
    }

    for (let i = endIndex + 1; i < wordLength; i += 2) {
      const randomBigram = BigramWeigher(bigrams, i + 1);
      if (randomBigram) {
        word[i] = randomBigram[0];
        if (i + 1 < wordLength) word[i + 1] = randomBigram[1];
      }
    }

    return word.join("");
  };

  const handleGenerate = (
    wordLength,
    numWords,
    targetProbability,
    characterInputs
  ) => {
    console.log(
      "Generating words with:",
      wordLength,
      numWords,
      targetProbability,
      characterInputs
    );
    const newPseudowords = [];
    const tolerance = 0.0001;
    const maxAttempts = 1000;
    const generatedWordsSet = new Set();

    for (let i = 0; i < numWords; i++) {
      let generatedWord, probability;
      let attempts = 0;
      do {
        generatedWord = generatePseudoword(
          bigrams,
          parseInt(wordLength),
          characterInputs
        );
        probability = ProbabilityCalculator({
          bigramsData: bigrams,
          word: generatedWord,
        });
        attempts++;
      } while (
        (Math.abs(probability - targetProbability) > tolerance ||
          generatedWordsSet.has(generatedWord)) &&
        attempts < maxAttempts
      );

      if (!generatedWordsSet.has(generatedWord)) {
        generatedWordsSet.add(generatedWord);
        newPseudowords.push({ word: generatedWord, probability });
        console.log(
          "Generated word:",
          generatedWord,
          "Probability:",
          probability
        );
      }
    }
    setPseudowords(newPseudowords);
  };

  return (
    <div className="container">
      <DataLoader
        dataChoice={dataChoice}
        setDataChoice={setDataChoice}
        setBigrams={setBigrams}
      />
      <InputForm onGenerate={handleGenerate} />
      <OutputDisplay words={pseudowords} />
    </div>
  );
};

export default Generator;
