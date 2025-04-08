import { regexAlphabetCZ, regexAZ, ipaCharacters, ORTHO, PHONO } from './constants'

const isOrtoBigramValid = (bigram) => {
    if(bigram.length < 2) {
        return false
    }
    return bigram.match(regexAlphabetCZ)
}

// todo: shoudl this REALLY accept ["e", "a"], any other similar?
const isPhonoBigramValid = (bigram) => {
    let valid = false
    if(bigram.length != 2) {
        return false
    }
    for (let i = 0; i < bigram.length; i++)
    {
        if(bigram[i] && bigram[i].length < 1) {
            return false
        }
        valid = false
        if (bigram[i].match(regexAZ))
        {
            valid = true
            continue
        }

        if (ipaCharacters.some(c => c.ipa === bigram[i]))
        {
            valid = true
            continue
        }

        if(!valid) {
            return false
        }
    }

    return true
}

const isBigramAcceptable = (bigram, choice) => {
    if (choice === ORTHO) {
        return isOrtoBigramValid(bigram)
    }
    else if (choice === PHONO) {
        return isPhonoBigramValid(bigram)
    }
    else {
        console.error(`Invalid choice:'${choice}'.`)
        return false
    }
}

export {isOrtoBigramValid, isPhonoBigramValid, isBigramAcceptable}