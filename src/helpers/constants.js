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
    { ipa: "aː", grapheme: "á" },
    { ipa: "a͡u", grapheme: "au" },
    { ipa: "ʦ", grapheme: "c" },
    { ipa: "ʧ", grapheme: "č" },
    { ipa: "ɟ", grapheme: "ď" },
    { ipa: "ʣ", grapheme: "dz" },
    { ipa: "ʤ", grapheme: "dž" },
    { ipa: "ɛ", grapheme: "e" },
    { ipa: "ɛː", grapheme: "é" },
    { ipa: "ɛ͡u", grapheme: "eu" },
    { ipa: "ɦ", grapheme: "h" },
    { ipa: "x", grapheme: "ch" },
    { ipa: "ɪ", grapheme: "i" },
    { ipa: "iː", grapheme: "í" },
    { ipa: "ɲ", grapheme: "ň" },
    { ipa: "oː", grapheme: "ó" },
    { ipa: "o͡u", grapheme: "ou" },
    { ipa: "r̝", grapheme: "ř" },
    { ipa: "ʃ", grapheme: "š" },
    { ipa: "c", grapheme: "ť" }, 
    { ipa: "uː", grapheme: "ú" },
    { ipa: "ʒ", grapheme: "ž" },
];
