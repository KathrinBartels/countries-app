import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CountryItem from '../CountryItem.vue'

describe('CountryItem', () => {
  it('renders a country item', () => {
    const wrapper = mount(CountryItem, {
      props: {
        country: {
          code: 'AD',
          name: 'Andorra',
          emoji: '🇦🇩'
        }
      }
    })

    const span = wrapper.find('span')
    expect(span.text()).toContain('🇦🇩')

    const h2 = wrapper.find('.h2')
    expect(h2.text()).toContain('Andorra')

    const p = wrapper.find('p')
    expect(p.text()).toContain('AD')
  })
})
