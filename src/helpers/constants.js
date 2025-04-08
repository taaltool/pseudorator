export const ORTHO = "orthotactic"
export const PHONO = "phonotactic"

/** @constant RegExp for bigrams in CZ orthotactic alphabet
    @type {RegExp}
*/
export const regexAlphabetCZ = /^[a-záčďéěíňóřšťúůýž]{2}$/

/** @constant RegExp for checking phonotactic bigrams
    @type {RegExp}
*/

export const regexAZ = /^[a-z]$/
/** @constant other valid characters for phonotactic bigrams
    @type {Array}
*/

export const ipaCharacters = [
    { ipa: "aː", grapheme: "á", description: "" },
    { ipa: "a͡u", grapheme: "au", description: "" },
    { ipa: "ʦ", grapheme: "c", description: "" },
    { ipa: "ʧ", grapheme: "č", description: "" },
    { ipa: "ɟ", grapheme: "ď", description: "" },
    { ipa: "ʣ", grapheme: "dz", description: "" },
    { ipa: "ʤ", grapheme: "dž", description: "" },
    { ipa: "ɛ", grapheme: "e", description: "" },
    { ipa: "ɛː", grapheme: "é", description: "" },
    { ipa: "ɛ͡u", grapheme: "eu", description: "" },
    { ipa: "ɡ", grapheme: "g", description: "" }, // todo: add to IPA guide
    { ipa: "ɦ", grapheme: "h", description: "" },
    { ipa: "x", grapheme: "ch", description: "" },
    { ipa: "ɪ", grapheme: "i", description: "" },
    { ipa: "iː", grapheme: "í", description: "" },
    { ipa: "ɲ", grapheme: "ň", description: "" },
    { ipa: "oː", grapheme: "ó", description: "" },
    { ipa: "o͡u", grapheme: "ou", description: "" },
    { ipa: "r̝", grapheme: "ř", description: "alveodental trill voiced" },
    { ipa: "r̝̊", grapheme: "ř", description: "alveodental trill voiceless" }, // todo: add to IPA guide
    { ipa: "ʃ", grapheme: "š", description: "" },
    { ipa: "c", grapheme: "ť", description: "" }, 
    { ipa: "uː", grapheme: "ú", description: "" },
    { ipa: "ʒ", grapheme: "ž", description: "" },
];
