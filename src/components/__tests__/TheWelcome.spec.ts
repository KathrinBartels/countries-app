import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders the welcome page', () => {
    const wrapper = mount(TheWelcome)

    const h1 = wrapper.find('.h1')
    expect(h1.text()).toContain('Welcome to a little country collection')

    const p = wrapper.find('p')
    expect(p.text()).toContain('This is a simple app to show you some countries.')

    const button = wrapper.find('.btn-primary')
    expect(button.text()).toContain('Explore all countries')
  })
})
