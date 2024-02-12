import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TermDepositCalculator from '../TermDepositCalculator.vue'

describe('TermDepositCalculator component', () => {
  it('renders properly', () => {
    const wrapper = mount(TermDepositCalculator, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
