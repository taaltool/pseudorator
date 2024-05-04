const getBigram = (bigrams, character, position, characterPosition) => {
  const validBigrams = bigrams.filter(
    (bigram) =>
      bigram &&
      bigram.bigram[characterPosition] === character && 
      bigram.sum_log_freq_pos &&
      bigram.sum_log_freq_pos[position.toString()]
  );
  if (validBigrams.length === 0) { 
    return null;
  }

  const weights = validBigrams.map((bigram) => ({
    bigram: bigram.bigram,
    weight: bigram.sum_log_freq_pos[position.toString()],
  }));
  const totalWeight = weights.reduce((acc, next) => acc + next.weight, 0);
  const random = Math.random() * totalWeight;
  let sum = 0;

  for (const { bigram, weight } of weights) {
    sum += weight;
    if (random <= sum) {
      return bigram;
    }
  }
  
  console.error(`no bigram selected ${character}, ${position}, ${sum}, ${random}`)
  return null;
};

const getRandomBigram = (bigrams, position) => {
  const validBigrams = bigrams.filter(
    (bigram) =>
      bigram &&
      bigram.sum_log_freq_pos &&
      bigram.sum_log_freq_pos[position.toString()]
  );
  const randomIndex = Math.floor(Math.random() * validBigrams.length)
  return validBigrams[randomIndex].bigram
}

export {getBigram, getRandomBigram}

export default getBigram;
