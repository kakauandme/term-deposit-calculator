/**
 * compoundInterest function calculates the compound interest over a given term. See https://en.wikipedia.org/wiki/Compound_interest for more information.
 *
 * @param {number} amount - The principal amount, the initial amount of money that is being compounded.
 * @param {number} rate - The annual interest rate (in decimal form, so 5% would be 0.05).
 * @param {number} term - The term over which the interest is compounded, in years.
 * @param {number} frequency - The number of times the interest is compounded per year.
 *
 * @returns {number} - The final balance amount after compounding.
 */

export const compoundInterest = (amount: number, rate: number, term: number, frequency: number) => {
  // validate the input
  if (amount <= 0) {
    throw new Error('Principal has to be more than $0 ')
  }
  if (rate <= 0 || rate > 1) {
    throw new Error('Rate must be between 0 and 1')
  }
  if (term <= 0) {
    throw new Error('Term must be more than 0 years')
  }
  if (frequency <= 0) {
    throw new Error('Frequency must be more than 0')
  }

  try {
    return amount * Math.pow(1 + rate / frequency, frequency * term)
  } catch (error) {
    // error handling
    console.error(error)
    throw error
  }
}
