import React, { useState, useEffect } from "react";

const Legend = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const toggleLegend = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const container = document.querySelector(".container");
      if (container) {
        const containerRect = container.getBoundingClientRect();

        if (window.innerWidth > 1100) {
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
          style={{
            left: windowSize.width > 500 ? `${leftOffset}px` : "0",
            maxHeight: `${windowSize.height}px`,
          }}
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
      to generate pseudowords based on phonotactic or orthotactic probability
      values. This tool is particularly useful for linguistic research,
      providing users with a way to to control linguistic experiments with
      pseudowords better, hence study language processing better. In addition,
      it can also count the value of phonotactic or orthotactic probability for
      a given word or pseudoword.
    </p>
    <h3>How to generate?</h3>
    <p>
      Choose between orthotactic or phonotactic probability (
      <a href="#PropPhon" className="custom-link">
        see bellow
      </a>
      ; the default option is orthotactic), optionally specify other parameters
      and press “generate”:
    </p>
    <ul>
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
          probability. The default value is 0.003, the usual phonotactic
          probability value of Czech words (see the figure below). Note that the
          values are rounded to four decimal places.
        </p>
      </li>
      <li>
        <h4>Required characters</h4>
        <p>
          You can also enter required characters (useful for pre-established
          prefixes, roots or suffixes), graphemes for orthotactic, and phonemes
          for phonotactic probability. Phonemes must be specified as IPA
          characters, for your convenience, the IPA help is available. (Note
          that this feature means you can also count the phonotactic or
          orthotactic probability for an existing word or a pseudoword.)
        </p>
      </li>
    </ul>
    <h3>How is it generated?</h3>
    <p>
      The application searches through lists of bigrams extracted from the
      synchronous corpus of contemporary Czech{" "}
      <a
        href="https://wiki.korpus.cz/doku.php/en:cnk:syn2020#:~:text=The%20SYN2020%20corpus%20is%20a,%2C%20including%20punctuation%20(tokens)."
        target="_blank"
        className="custom-link link-legend"
      >
        SYN2020
      </a>
      , including frequency data, and tries to satisfy the user's request. If,
      even after thousands of attempts, it fails to build a pseudoword of the
      required probability value, it will ignore this parameter.
    </p>
    <h3>What does the probability value mean?</h3>
    <ul>
      <li>
        <h4 id="PropPhon">Phonotactic probability</h4>
        <p>
          Phonotactic probability tells you how frequent phoneme sequences are
          in contemporary Czech. The calculation works with bigrams, logarithms
          and frequency data from the Czech corpus{" "}
          <a
            href="https://wiki.korpus.cz/doku.php/en:cnk:syn2020#:~:text=The%20SYN2020%20corpus%20is%20a,%2C%20including%20punctuation%20(tokens)."
            target="_blank"
            className="custom-link link-legend"
          >
            SYN2020
          </a>
          . It provides you with a number between 0 and 1 for every word or
          pseudoword, the closer it is to 1, the more probable it is. The number
          also correlates with how wordlike a pseudoword is rated by native
          speakers.
        </p>
      </li>
      <li>
        <h4>Orthotactic probability</h4>
        <p>
          Orthotactic probability works just the same as the phonotactic one,
          except it uses grapheme sequences instead of phonemes to run the
          calculation.
        </p>
      </li>
      <li>
        <h4>Density plot</h4>
        <p>
          <img
            src="https://taaltool.github.io/pseudorator/krivka.png"
            alt="Janova křivka"
            width="600"
            height="400"
          />
        </p>
        <p>
          You can look at the example words’ and pseudowords’ values to get more
          familiar with the phonotactic probability in Czech:
        </p>
        <p>
          <ul>
            <div className="example-words">
              <li className="example-word">praha 0.0119</li>
              <li className="example-word">prasátko 0.0084</li>
              <li className="example-word">slovo 0.0051</li>
              <li className="example-word">slon 0.0050</li>
              <li className="example-word">žirafa 0.0038</li>
              <li className="example-word">hrát 0.0034</li>
              <li className="example-word">smích 0.0018</li>
              <li className="example-word">křivka 0.0015</li>
              <li className="example-word">ržát 0.0005</li>
              <li className="example-word">gól 0.0001</li>
            </div>
            <div className="example-pseudowords">
              <li className="example-word">polonice 0.0102</li>
              <li className="example-word">zamtel 0.0101</li>
              <li className="example-word">vyplomit 0.0099</li>
              <li className="example-word">přůvka 0.0073</li>
              <li className="example-word">brořík 0.0069</li>
              <li className="example-word">brátlo 0.0041</li>
              <li className="example-word">klkpo 0.0028</li>
              <li className="example-word">fnopka 0.0025</li>
              <li className="example-word">fufdke 0.0009</li>
              <li className="example-word">přtíč 0.0006</li>
            </div>
          </ul>
        </p>
      </li>
    </ul>

    <h3>How to cite the tool?</h3>
    <p>
      The tool was developed by Martina Vokáčová for the needs of Petra
      Čechová's research team investigating the role of phonotactic probability
      in pseudoword processing.
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
