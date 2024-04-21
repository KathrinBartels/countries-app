import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders a welcome message', () => {
    const wrapper = mount(TheWelcome)

    const h1 = wrapper.find('.h1')
    expect(h1.text()).toContain('Welcome to a little country collection')

    const p = wrapper.find('p')
    expect(p.text()).toContain('This is a simple app to show you some countries.')

    const link = wrapper.find('a')
    expect(link.text()).toContain('To countries')
  })
})
