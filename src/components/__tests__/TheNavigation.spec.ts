import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheNavigation from '../TheNavigation.vue'

describe('TheNavigation', () => {
  it('renders a navigation bar', () => {
    const wrapper = mount(TheNavigation)

    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)

    const links = wrapper.findAll('.nav-primary')
    expect(links.length).toBe(2)

    const homeLink = links[0]
    expect(homeLink.text()).toContain('Home')

    const countryLink = links[1]
    expect(countryLink.text()).toContain('Countries')
  })
})
