# Term deposit calculator

A very simple term deposit calculator that takes as inputs:

- Start deposit amount (e.g. $10,000)
- Interest rate (e.g. 1.10%)
- Investment term (e.g. 3 years)
- Interest paid (Monthly, Quarterly, Annually, At Maturity)

And produces as output: Final balance (e.g. $10,330 on the above inputs, interest paid At Maturity)

## Solution

It was fun! I've started with a [Compound interest Wikipedia article](https://en.wikipedia.org/wiki/Compound_interest) and tested the formula in a [Google sheet](https://docs.google.com/spreadsheets/d/1MhdWg2Seyuq1Ad4ekDuR-t9HwyG9ezGVJFci_Io88_0/edit?usp=sharing). It worked like charm.

Then I've spun up a SPA with [Vite](https://vitejs.dev/) and [Vue 3](https://vuejs.org/) and [Bootstrap](https://getbootstrap.com/). Added a helper `compoundInterest(...)` function that takes the inputs and returns the final balance into [src/helpers/index.ts](https://github.com/kakauandme/term-deposit-calculator/blob/main/src/helpers/index.ts) file. I've added a few unit tests in [src/helpers/index.test.ts](https://github.com/kakauandme/term-deposit-calculator/blob/main/src/helpers/index.test.ts) file as well.

After, I've created simple form in a [src/components/TermDepositCalculator.vue](https://github.com/kakauandme/term-deposit-calculator/blob/main/src/components/TermDepositCalculator.vue) component that validates the inputs and calls the `compoundInterest(...)` helper to display the final balance.

### Screenshot

![screen](https://github.com/kakauandme/term-deposit-calculator/assets/1184625/35aa15a4-6b8d-45bc-8984-95a3b6173305)


### Next steps

This was a quick prototype, and I timed myself to the ~2h limit. To finish this, I would:

0. Add error handling to the form
1. Increase test coverage
2. Add e2e tests
3. Tweak layout to make it responsive
4. etc.

## Setup

### IDE configuration

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Initialisation

```sh
npm install
```

### Run development server

```sh
npm run dev
```

### Build for deployment

```sh
npm run build
```

### Run unit tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run e2e tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Code quality

Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

and to format with [Prettier](https://prettier.io/) run

```sh
npm run format
```
