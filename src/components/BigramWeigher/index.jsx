import { chooseRandomBigram } from './helpers.js'

const getBigram = (bigrams, character, position, characterPosition) => {
  const validBigrams = bigrams.filter(
    (bigram) =>
      bigram &&
      bigram.bigram[characterPosition] === character && 
      bigram.sum_log_freq_pos &&
      bigram.sum_log_freq_pos[position.toString()]
  );

  if (validBigrams.length === 0) { 
    console.error(`no bigram selected. Character: '${character}' on position ${position}, characterPosition ${characterPosition}`)
    return null;
  }

  return chooseRandomBigram(validBigrams, position);
}

const getRandomBigram = (bigrams, position) => {
  const validBigrams = bigrams.filter(
    (bigram) =>
      bigram &&
      bigram.sum_log_freq_pos &&
      bigram.sum_log_freq_pos[position.toString()]
  );

  // this should never happend unless there are no bigrams at all or all without valid freq.
  if (validBigrams.length === 0) {
    console.error(`no valid random bigram`)
    return null;
  }

  return chooseRandomBigram(validBigrams, position)
}

const getY_X = (bigrams, left, right, position) => {
  const validLeftBigrams = bigrams.filter(
    (bigram) =>
      bigram &&
      bigram.bigram[0] === left && 
      bigram.sum_log_freq_pos &&
      bigram.sum_log_freq_pos[position.toString()]
  );
  if (validLeftBigrams.length === 0) {
    console.error(`no Y_X bigram selected '${left}_${right}' on position ${position} - couldn't found bigram from left`)
    return null;
  }

  const validRightBigrams = bigrams.filter(
    (bigram) =>
      bigram &&
      bigram.bigram[1] === right && 
      bigram.sum_log_freq_pos &&
      bigram.sum_log_freq_pos[position.toString()]
  );
  if (validRightBigrams.length === 0) {
    console.error(`no Y_X bigram selected '${left}_${right}' on position ${position} - couldn't found bigram from right`)
    return null;
  }

  // find intersectin of the two sets
  const validBigrams = validLeftBigrams.filter(lValue => validRightBigrams.filter(rValue => rValue.bigram[0] == lValue.bigram[1]));
  if (validBigrams.length === 0) {
    console.error(`no Y_X bigram selected '${left}_${right}' on position ${position} - couldn't intersection`)
    return null;
  }

  return chooseRandomBigram(validBigrams, position)[1]
}

export {getBigram, getRandomBigram, getY_X}

export default getBigram;
