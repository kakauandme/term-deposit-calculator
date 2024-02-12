import { describe, it, expect } from 'vitest'

import { compoundInterest } from '@/helpers/index'

describe('compoundInterest', () => {
  it('Task example monthly', () => {
    const amount = 10000
    const rate = 0.011
    const term = 3
    const frequency = 12

    const result = compoundInterest(amount, rate, term, frequency)

    expect(result).toBeCloseTo(10335, 0)
  })
  it('Task example quarterly', () => {
    const amount = 10000
    const rate = 0.011
    const term = 3
    const frequency = 4

    const result = compoundInterest(amount, rate, term, frequency)

    expect(result).toBeCloseTo(10335, 0)
  })
  it('Task example annually', () => {
    const amount = 10000
    const rate = 0.011
    const term = 3
    const frequency = 1

    const result = compoundInterest(amount, rate, term, frequency)

    expect(result).toBeCloseTo(10334, 0)
  })
  it('Task example at maturity ', () => {
    const amount = 10000
    const rate = 0.011
    const term = 3
    const frequency = 1 / term

    const result = compoundInterest(amount, rate, term, frequency)

    expect(result).toBeCloseTo(10330, 0)
  })
})
