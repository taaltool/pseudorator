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
    { ipa: "a", grapheme: "a", description: "open front", synExample: "tamto", different: "n" },
    { ipa: "aː", grapheme: "á", description: "open front long", synExample: "tepláky", different: "y" },
    { ipa: "a͡u", grapheme: "au", description: "from open front to close back rounded", synExample: "dinosaurus", different: "y" },
    { ipa: "b", grapheme: "b", description: "bilabial plosive voiced", synExample: "osoba", different: "n" },
    { ipa: "ʦ", grapheme: "c", description: "affricate voiceless from alveolar to alveolar", synExample: "cože", different: "y" },
    { ipa: "ʧ", grapheme: "č", description: "affricate voiceless from alveolar to postalveolar", synExample: "činky", different: "y" },
    { ipa: "d", grapheme: "d", description: "alveolar plosive voiced", synExample: "dál", different: "n" },
    { ipa: "ɟ", grapheme: "ď", description: "velar fricative voiceless", synExample: "děkanka", different: "y" },
    { ipa: "ʣ", grapheme: "dz", description: "affricate voiced from alveolar to alveolar", synExample: "podzimní", different: "y" },
    { ipa: "ʤ", grapheme: "dž", description: "affricate voiced from alveolar to postalveolar", synExample: "džus", different: "y" },
    { ipa: "ɛ", grapheme: "e", description: "open-mid front", synExample: "teď", different: "y" },
    { ipa: "ɛː", grapheme: "é", description: "open-mid front long", synExample: "trénink", different: "y" },
    { ipa: "ɛ͡u", grapheme: "eu", description: "from open-mid front to close back rounded", synExample: "neurolingvistika", different: "y" },
    { ipa: "f", grapheme: "f", description: "labiodental fricative voiceless", synExample: "formulace", different: "n" }, 
    { ipa: "ɡ", grapheme: "g", description: "velar plosive voiced", synExample: "galaxie", different: "y" },
    { ipa: "ɦ", grapheme: "h", description: "glottal fricative voiced", synExample: "houska", different: "y" },
    { ipa: "x", grapheme: "ch", description: "velar fricative voiceless", synExample: "chapadlo", different: "y" },
    { ipa: "ɪ", grapheme: "i", description: "mid-high mid-front", synExample: "kino", different: "y" },
    { ipa: "iː", grapheme: "í", description: "close front long", synExample: "přežít", different: "y" },
    { ipa: "j", grapheme: "j", description: "palatal approximant voiced", synExample: "ježišmarja", different: "n" },
    { ipa: "k", grapheme: "k", description: "velar plosive voiceless", synExample: "kilometr", different: "n" },
    { ipa: "l", grapheme: "l", description: "alveolar lateral approximant", synExample: "laboratoř", different: "n" },
    { ipa: "m", grapheme: "m", description: "bilabial nasal voiced", synExample: "kompost", different: "n" },
    { ipa: "ɱ", grapheme: "m", description: "labiodental nasal voiced", synExample: "famfrpál", different: "y" }, // todo: add to IPA guide
    { ipa: "ŋ", grapheme: "n", description: "velar nasal voiced", synExample: "kapitánky", different: "y" }, // todo: add to IPA guide
    { ipa: "n", grapheme: "n", description: "alveolar nasal voiced", synExample: "generátor", different: "n" }, // todo: add to IPA guide
    { ipa: "ɲ", grapheme: "ň", description: "alveolar trill syllabic voiced", synExample: "plameňák", different: "y" },
    { ipa: "o", grapheme: "o", description: "close-mid back rounded", synExample: "odmlka", different: "n" },
    { ipa: "oː", grapheme: "ó", description: "close-mid back rounded long", synExample: "jóga", different: "y" },
    { ipa: "o͡u", grapheme: "ou", description: "from close-mid back rounded to close back rounded", synExample: "šlahoun", different: "y" },
    { ipa: "p", grapheme: "p", description: "bilabial plosive voiceless", synExample: "špagety", different: "n" },
    { ipa: "r", grapheme: "r", description: "alveolar trill", synExample: "hrát", different: "n" },
    { ipa: "r̝", grapheme: "ř", description: "alveodental trill voiced", synExample: "říkám", different: "y" },
    { ipa: "r̝̊", grapheme: "ř", description: "alveodental trill voiceless", synExample: "stopař", different: "y" }, // todo: add to IPA guide
    { ipa: "s", grapheme: "s", description: "alveolar fricative voiceless", synExample: "sacharidy", different: "n" }, 
    { ipa: "ʃ", grapheme: "š", description: "postalveolar fricative voiceless", synExample: "šelest", different: "y" },
    { ipa: "t", grapheme: "t", description: "alveolar plosive voiceless", synExample: "troll", different: "n" }, 
    { ipa: "c", grapheme: "ť", description: "palatal plosive voiceless", synExample: "ještěrka", different: "y" }, 
    { ipa: "u", grapheme: "u", description: "close back rounded", synExample: "okurka", different: "n" },
    { ipa: "uː", grapheme: "ú", description: "close back rounded long", synExample: "úleva", different: "y" },
    { ipa: "v", grapheme: "v", description: "labiodental fricative voiced", synExample: "výzva", different: "n" }, 
    { ipa: "z", grapheme: "z", description: "alveolar fricative voiced", synExample: "nizozemský", different: "n" },
    { ipa: "ʒ", grapheme: "ž", description: "postalveolar fricative voiced", synExample: "louže", different: "y" },
];
