import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { mount } from '@vue/test-utils'
import FormTask from '../FormTask.vue'

describe('FormTask', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  const wrapper = mount(FormTask, {
    props: {
      tasks: [
        { name: 'eat', done: false, id: 1234 },
        { name: 'sleep', done: true, id: 5678 }
      ]
    }
  })

  it('renders a form', () => {
    expect(wrapper.find('form').exists()).toBe(true)
  })
  it('submits the form when the "Add task" button is clicked', async () => {
    const submit = wrapper.find('form')

    wrapper.vm.text = 'New task'

    await submit.trigger('submit')

    expect(wrapper.emitted('add-task')).toBeTruthy()
    expect(wrapper.emitted('add-task')[0]).toEqual(['New task'])
  })
  it('updates data when input value changes', async () => {
    const input = wrapper.find('input')

    await input.setValue('New Value')

    expect(wrapper.vm.text).toBe('New Value')
  })
})
