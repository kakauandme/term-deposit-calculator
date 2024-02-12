<script setup lang="ts">
import { ref, computed } from 'vue'

import { compoundInterest } from '@/helpers/index'

defineProps<{
  msg: string
}>()

// set initial values
let amount = ref(10000)
let rate = ref(1.1)
let term = ref(3)
let frequency = ref('at_maturity')

const balance = computed(() => {
  // frequency as the number of times the interest is compounded per year
  let yearly_frequency = 1 / term.value // default to maturity

  switch (frequency.value) {
    case 'monthly':
      yearly_frequency = 12
      break
    case 'quarterly':
      yearly_frequency = 4
      break
    case 'annually':
      yearly_frequency = 1
      break
  }

  // interest rate in decimal form
  const decimal_rate = rate.value / 100

  // calculate and return final balance as integer
  return compoundInterest(amount.value, decimal_rate, term.value, yearly_frequency).toFixed(0)
})
</script>

<template>
  <h1 class="mt-5 mb-3">{{ msg }}</h1>
  <form>
    <div class="mb-3">
      <label for="amount" class="form-label">Start deposit amount</label>
      <div class="input-group">
        <span class="input-group-text">$</span>
        <input
          v-model="amount"
          type="number"
          class="form-control"
          id="amount"
          aria-label="Start deposit amount in Australian dollars"
          min="1"
          step="1"
          required
          placeholder="Enter amount ..."
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="rate" class="form-label">Interest rate</label>
      <div class="input-group">
        <input
          v-model="rate"
          type="number"
          class="form-control"
          id="rate"
          aria-label="Interest rate in percent"
          min="0.1"
          step="0.1"
          max="100"
          required
          placeholder="Enter interest rate ..."
        />
        <span class="input-group-text">%</span>
      </div>
    </div>
    <div class="mb-3">
      <label for="term" class="form-label"
        >Investment term: {{ term }} year{{ term > 1 ? 's' : '' }}</label
      >
      <input v-model="term" type="range" class="form-range" id="term" min="1" max="30" step="1" />
    </div>
    <div class="mb-3">
      <label for="frequency" class="form-label d-block">Interest paid</label>

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input
          v-model="frequency"
          value="monthly"
          type="radio"
          class="btn-check"
          name="frequency"
          id="frequency_monthly"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="frequency_monthly">Monthly</label>

        <input
          v-model="frequency"
          value="quarterly"
          type="radio"
          class="btn-check"
          name="frequency"
          id="frequency_quarterly"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="frequency_quarterly">Quarterly</label>

        <input
          v-model="frequency"
          value="annually"
          type="radio"
          class="btn-check"
          name="frequency"
          id="frequency_annually"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="frequency_annually">Annually</label>

        <input
          v-model="frequency"
          value="at_maturity"
          type="radio"
          class="btn-check"
          name="frequency"
          id="frequency_at_maturity"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="frequency_at_maturity">At maturity</label>
      </div>
    </div>
    <div class="mb-3">
      <label for="balance" class="form-label">Final balance</label>
      <div class="input-group">
        <span class="input-group-text">$</span>
        <input
          v-model="balance"
          type="number"
          class="form-control form-control-lg"
          id="balance"
          aria-label="Final balance in Australian dollars"
          readonly
        />
      </div>
    </div>
  </form>
</template>

<style scoped></style>
