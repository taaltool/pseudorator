import { afterEach, describe, expect, it, vi } from 'vitest'
import { getRandomBigram, getBigram, getY_X } from './index.jsx'
import * as helperMod from './helpers.js'

const defaultPosition = 1

describe('BigramWeigher smokeTests', () => {
    afterEach(() => {
        vi.restoreAllMocks()
      })

      const fakeBigrams = [
        {
            bigram: "aa",
            sum_log_freq_pos: {
                "1": 1.1
            }
        },
        {
            bigram: "ab",
            sum_log_freq_pos: {
                "1": 3
            }
        },
        {
            bigram:[
                "a",
                "ɛ"
            ],
            sum_log_freq_pos: {
                "1": 0.9
            }
        }
    ]
    const fakeBigramsY_X = [
        {
            bigram: "y_",
            sum_log_freq_pos: {
                "1": 1,
                "2": 1
            }
        },
        {
            bigram: "_x",
            sum_log_freq_pos: {
                "1": 1,
                "2": 1
            }
        },
        {
            bigram: "aa",
            sum_log_freq_pos: {
                "1": 3,
                "2": 1
            }
        },
        {
            bigram: "ab",
            sum_log_freq_pos: {
                "1": 1,
                "2": 3
            }
        }
    ]

    it('getRandomBigram returns bigram when mock set', () => {
        const expected = fakeBigrams[0]
        vi.spyOn(helperMod, 'chooseRandomBigram').mockReturnValue(expected)

        var actual = getRandomBigram(fakeBigrams, defaultPosition)

        expect(actual).toBe(expected)
    })

    it('getBigram returns bigram when mock and bigrams set', () => {
        const expected = 'ab'
        vi.spyOn(helperMod, 'chooseRandomBigram').mockReturnValue(expected)

        var actual = getBigram(fakeBigrams, 'b', defaultPosition, 1)

        expect(actual).toBe(expected)
    })

    it('getY_X returns bigram when mock and bigrams set', () => {
        const expectedResult = '_'
        const expected = fakeBigramsY_X[0]
        let chooseSpy = vi.spyOn(helperMod, 'chooseRandomBigram')
        chooseSpy.mockReturnValue(expected.bigram)

        var actual = getY_X(fakeBigramsY_X, 'y', 'x' , defaultPosition)

        expect(chooseSpy).toBeCalledWith([expected], defaultPosition)
        expect(actual).toBe(expectedResult)
    })
})