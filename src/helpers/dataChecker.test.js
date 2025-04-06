import { describe, expect, it } from 'vitest'
import { isOrtoBigramValid, isPhonoBigramValid } from './dataChecker.js'

describe('Orto bigram checks', () => {
    it.each`
    bigram
    ${"aa"}
    ${"ab"}
    ${"řá"}
    ${"rá"}
    ${"át"}
    `('Valid bigram is accepted', ({bigram}) => {
        const actual = isOrtoBigramValid(bigram)

        expect(actual).toBeTruthy()
    })

    it.each`
    bigram
    ${"aaa"}
    ${"a"}
    ${"😊"}
    ${"e:"}
    ${"15"}
    ${""}
    `('Invalid bigram is rejected', ({bigram}) => {
        const actual = isOrtoBigramValid(bigram)

        expect(actual).toBeFalsy()
    })
})

describe('Phono bigram checks', () => {
    it.each`
    bigram
    ${["v", "a͡u"]}
    ${["v", "a"]}
    ${["a͡u", "v"]}
    ${["aː", "a͡u"]}
    `
    ('Valid bigram is accepted', ({bigram}) => {
        const actual = isPhonoBigramValid(bigram)
        console.log(`${actual}\t${bigram}`)
        expect(actual).toBeTruthy()
    })

    it.each`
    bigram
    ${["v"]}
    ${["v", ""]}
    ${["a͡u", "1"]}
    ${["a:", "1"]}
    ${["1", "a͡u"]}
    ${["č", "e"]}
    ${["č", "👌"]}
    `
    ('Invalid bigram is rejected', ({bigram}) => {
        const actual = isPhonoBigramValid(bigram)
        
        expect(actual).toBeFalsy()
    })
})