import React, { useEffect } from "react";

const DataLoader = ({ dataChoice, setDataChoice, setBigrams }) => {
  const handleDataChoice = (choice) => {
    setDataChoice(choice);
  };

  useEffect(() => {
    const loadData = async (choice) => {
      try {
        const file =
          choice === "orthotactic"
            ? "/bigram-database.json"
            : "/phonetic_bigram_database.json";
        const response = await fetch(file);
        const data = await response.json();
        console.log("Načtená data:", data);
        if (data.length > 0 && data[0].bigram) {
          setBigrams(data);
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
          className="button"
          onClick={() => handleDataChoice("orthotactic")}
        >
          orthotactic
        </button>
        <button
          className="button"
          onClick={() => handleDataChoice("phonotactic")}
        >
          phonotactic
        </button>
      </label>
    </div>
  );
};

export default DataLoader;
