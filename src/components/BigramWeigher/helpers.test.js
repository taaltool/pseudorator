import { afterEach, describe, expect, it, vi } from 'vitest'
import { chooseRandomBigram } from './helpers.js'
import * as randMod from './rand.js'

const defaultPosition = 1

describe('basic test', () => {    
    const bigrams = [
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

    afterEach(() => {
        vi.restoreAllMocks()
      })
    
    it('with low rand should return first item', () => {
        const expected = bigrams[0].bigram

        vi.spyOn(randMod, 'rand').mockReturnValueOnce(0.1)

        let actual = chooseRandomBigram(bigrams, defaultPosition)
        console.log(actual)
        expect(actual).toBe(expected)
    })

    it('with high rand should return last item', () => {
        const expected = bigrams[2].bigram

        vi.spyOn(randMod, 'rand').mockReturnValueOnce(0.9)

        let actual = chooseRandomBigram(bigrams, defaultPosition)
        console.log(actual)
        expect(actual).toBe(expected)
    })

    it('should return values according to weights', () => {
        const N = 1000*bigrams.length
        let results = {}
        bigrams.forEach(b => {results[b.bigram] = {hits: 0, log: b.sum_log_freq_pos[defaultPosition]}})
        for (let i = 0; i < N; i++)
        {
            const res = chooseRandomBigram(bigrams, defaultPosition)
            results[res].hits += 1
        }

        const total = bigrams.reduce((sum, acc) => sum += acc.sum_log_freq_pos[defaultPosition], 0)
        const expected1 = N/total

        console.log(`N:${N}, totalWeight:${total}, expected1:${expected1}`)
        console.log(results)
        const epsilon = 0.1 // +- 10% allowed
        bigrams.forEach(b => {
            const result = results[b.bigram]
            console.log(result)
            const expected = result.log * expected1
            const expectedLow = expected * (1 - epsilon)
            const expectedHigh = expected * (1 + epsilon)

            console.log(`actual epsilon:${result.hits - expected}, ${100*(result.hits - expected)/expected1} %`)
            expect(result.hits).toBeGreaterThanOrEqual(expectedLow)
            expect(result.hits).toBeLessThan(expectedHigh)
        })
    })
})