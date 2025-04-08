import React, { useEffect } from "react";
import { PHONO, ORTHO } from '../../helpers/constants.js'
import { isBigramAcceptable } from '../../helpers/dataChecker.js'

const DataLoader = ({ dataChoice, setDataChoice, setBigrams, setTotalData }) => {
  const handleDataChoice = (choice) => {
    console.log("Changing data choice to:", choice);
    setDataChoice(choice);
  };

  useEffect(() => {
    const loadData = async (choice) => {
      try {
        const file =
          choice === ORTHO
            ? "https://taaltool.github.io/pseudorator/bigram-database.json"
            : "https://taaltool.github.io/pseudorator/phonetic_bigram_database.json";
        const response = await fetch(file);
        const data = await response.json();
        console.log("Loaded data:", data);

        const totalData = data.find(
          (b) => b.bigram === "total"
        ).sum_log_freq_pos;

        setTotalData(totalData)

        if (data.length > 0 && data[0].bigram) {
          const validBigrams = data.filter(({bigram}) => isBigramAcceptable(bigram, choice));
          console.debug("valid bigrams:", validBigrams);
          const invalidBigrams = data.filter(({bigram}) => !isBigramAcceptable(bigram, choice));
          console.debug("invalid bigrams:", invalidBigrams);
          if (validBigrams.length > 0 && validBigrams[0].bigram) {
            setBigrams(validBigrams);
          }
          else {
            console.error("No valid bigrams", validBigrams);
          }
        } else {
          console.error("Data are empty or incorrectly formatted", data);
        }
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };

    loadData(dataChoice);
  }, [dataChoice, setBigrams]);

  return (
    <div className="buttonGroup">
      <label>
        {" "}
        Probability type:
        <button
          className={`button  ${
            dataChoice === ORTHO ? "buttonActive" : ""
          }`}
          onClick={() => handleDataChoice(ORTHO)}
        >
          orthotactic
        </button>
        <button
          className={`button  ${
            dataChoice === PHONO ? "buttonActive" : ""
          }`}
          onClick={() => handleDataChoice(PHONO)}
        >
          phonotactic
        </button>
      </label>
    </div>
  );
};

export default DataLoader;
