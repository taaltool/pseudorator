import React, { useState, useEffect } from "react";

const Legend = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleLegend = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const container = document.querySelector(".container");
      if (container) {
        const containerRect = container.getBoundingClientRect();

        if (window.innerWidth > 500) {
          setLeftOffset(containerRect.right + 20);
        } else {
          setLeftOffset(0);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);

  return (
    <>
      <button
        className="legendButton"
        onClick={toggleLegend}
        style={{ cursor: "pointer" }}
      >
        {isVisible ? ":)" : "?"}
      </button>
      {isVisible && (
        <div
          className="legendPopup"
          style={{ left: windowWidth > 500 ? `${leftOffset}px` : "0" }}
        >
          <LegendContent />
        </div>
      )}
    </>
  );
};

const LegendContent = () => (
  <>
    <h3>What is this tool?</h3>
    <p>
      Pseudoword Generator for Czech is a React-based web application designed
      to generate pseudowords based on phonotactic or orthostatic probability
      calculations. This tool is particularly useful for linguistic research,
      providing users with a way to consider the Czech language's phonotactic
      possibilities.
    </p>
    <h3>How to generate?</h3>
    <p>
      There are two options available for generating pseudowords and several
      parameters to specify the request.
    </p>
    <ul>
      <li>
        <h4>Orthotactic or phonotactic probability</h4>
        <p>
          First, you can choose between orthotactic and phonotactic probability
          (see below for what that means). The default option is orthotactic
          probability.
        </p>
      </li>
      <li>
        <h4>Word Length</h4>
        <p>
          You can set the length of the generated pseudoword/s. The default
          value is 5 characters, corresponding to the average length of Czech
          words.
        </p>
      </li>
      <li>
        <h4>Number of Words</h4>
        <p>
          You can also specify how many pseudowords you want to generate. The
          default value is 10 words. With higher tens, the tool may not work
          properly.
        </p>
      </li>
      <li>
        <h4>Target Probability</h4>
        <p>
          The major innovation of this tool is that you can set a target
          probability. The default value is 0,003, the usual probability value
          of actual Czech words (see graph below).
        </p>
      </li>
      <li>
        <h4>Required characters</h4>
        <p>
          You can also enter required characters, grapgemes for orthotactic, and
          phonemes for phonotactic probability. Phonemes must be specified as
          IPA characters; IPA help is available.
        </p>
      </li>
    </ul>
    <h3>How is it generated?</h3>
    <p>
      The application searches through lists of bigrams extracted from the
      synchronous corpus of contemporary Czech SYN2020, including frequency
      data, and tries to satisfy the user's request. If, even after thousands of
      attempts, it fails to build a pseudoword of the required probability
      value, it will ignore this parameter.
    </p>
    <h3>What does the probability value mean?</h3>
    <p>
      <img
        src="../pages/HomePage/img/krivka.png"
        alt="Janova křivka"
        width="600"
        height="400"
      />
    </p>
    <h3>How to cite the tool?</h3>
    <p>
      The tool was developed by Martina Vokáčová for the needs of Petra
      Čechová's research team investigating the role of probability in
      pseudoword processing.
    </p>
    <p>
      If you use this tool in your research or for other purposes, please cite
      the following references:
    </p>
    <ul>
      <li>
        Vokáčová, M. (2024): Pseudorator: Pseudoword Generator for Czech
        (Version 1.0.1) [Computer software].
        https://taaltool.github.io/pseudorator/
      </li>
      <li>
        Čechová, P., Cilibrasi, L., Henyš, J., & Čecho, J. (2023). Introducing a
        phonotactic probability calculator for Czech. Naše Řeč, 106(1), 72–83.
      </li>
    </ul>
  </>
);

export default Legend;
