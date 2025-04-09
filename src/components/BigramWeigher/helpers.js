import {rand} from './rand.js'

/**
* Choose random bigram taking into account it's weight defined by it's frequency on given position
* @method chooseRandomBigram
* @param {Array.<Object>} bigrams Array of bigram objects
* @param {number} position Position in the world
* @returns {Object} bigram as eiter string or array of UTF-8 characters
*/
const chooseRandomBigram = (bigrams, position) => {
    const weights = bigrams.map((bigram) => ({
        bigram: bigram.bigram,
        weight: bigram.sum_log_freq_pos[position.toString()]
    }));

    // as default - select the one with highest weight
    let selectedBigram = weights.reduce((max, cur) => {
        if (cur.weight > max.weight) {
           return max = cur;
        }
        return max
    }).bigram;

    const totalWeight = weights.reduce((acc, next) => acc + next.weight, 0);
    const random = rand() * totalWeight;
    
    let sum = 0;

    for (const { bigram, weight } of weights) {
        sum += weight;
        if (random < sum) {
          selectedBigram = bigram;
          break;
        }
    }

    return selectedBigram;
}

export {chooseRandomBigram}
