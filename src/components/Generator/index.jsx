import React, { useState, useEffect } from "react";
import OutputDisplay from "../OutputDisplay";
import InputForm from "../InputForm";
import {getBigram, getRandomBigram} from "../BigramWeigher";
import DataLoader from "../DataLoader";
import ProbabilityCalculator from "../ProbabilityCalculator";

const Generator = () => {
  const [bigrams, setBigrams] = useState([]);
  const [pseudowords, setPseudowords] = useState([]);
  const [dataChoice, setDataChoice] = useState("orthotactic");

  const generatePseudoword = (bigrams, wordLength, characterInputs) => {
    let word = Array.from({ length: wordLength }, () => "");

    characterInputs.forEach((char, index) => {
      if (char) {
        word[index] = char;
      }
    });

    for (let i = 0; i < wordLength - 1; i++) {
      const currentCharacter = word[i]
      const nextCharacter = word[i + 1]
      if (currentCharacter) {
        if (nextCharacter) {
          continue;
        }
        // next position is empty -> find suitable candidate
        const randomBigram = getBigram(bigrams, currentCharacter,  i + 1, 0);
        if (randomBigram) {
          word[i + 1] = randomBigram[1];
        } else {
          console.error(`Did not find bigram 0. pos:${i}, word:${word.join("")}`)
        }
      } else {
        // current position is empty
        if (nextCharacter) {
          // and there is letter next to us
          const randomBigram = getBigram(bigrams, nextCharacter,  i + 1, 1);
          if (randomBigram) {
            word[i] = randomBigram[0];
          } else {
            console.error(`Did not find bigram 1. pos:${i}, word:${word.join("")}`)
          }
        } else {
          // no restriction
          const bigram = getRandomBigram(bigrams, i + 1)
          word[i] = bigram[0]
        }
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
