const ProbabilityCalculator = ({ totalData, bigramsData, word }) => {
  const calculateProbability = () => {
    let sumRatios = 0;

    for (let i = 0; i < word.length - 1; i++) {
      const bigram = word.slice(i, i + 2);
      const positionData = bigramsData.find((b) => b.bigram[0] === bigram[0] && b.bigram[1] === bigram[1]);

      if (positionData && totalData) {
        const positionIndex = i + 1;
        const bigramLogFreq =
          positionData.sum_log_freq_pos[positionIndex.toString()] || 0;
        const totalLogFreq = totalData[positionIndex.toString()] || 1;

        if (bigramLogFreq > 0 && totalLogFreq > 0) {
          const ratio = bigramLogFreq / totalLogFreq;
          sumRatios += ratio;
        }
        console.debug(
          `Bigram: ${bigram}, Position: ${positionIndex}, Bigram Log Frequency: ${bigramLogFreq}, Total Log Frequency: ${totalLogFreq}`
        );
      }
    }

    const numberOfBigrams = word.length - 1;
    return sumRatios / numberOfBigrams;
  };
  return calculateProbability();
};

export default ProbabilityCalculator;
