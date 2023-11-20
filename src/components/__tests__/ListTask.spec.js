import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { mount } from '@vue/test-utils'
import ListTask from '../ListTask.vue'

describe('ListTask', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  const wrapper = mount(ListTask, {
    props: {
      tasks: [
        { name: 'eat', done: false, id: 1234 },
        { name: 'sleep', done: true, id: 5678 }
      ]
    }
  })
  it('renders two buttons', () => {
    expect(wrapper.findAll('button')).length(2)
  })
  it('deletes a task when the "Delete" button is clicked', async () => {
    const deleteButton = wrapper.find('button')
    await deleteButton.trigger('click')

    expect(wrapper.emitted('delete-task')).toBeTruthy()
    expect(wrapper.emitted('delete-task')[0]).toEqual([{ name: 'eat', done: false, id: 1234 }])
  })

  it('displays task names and checkboxes', () => {
    const taskItems = wrapper.findAll('.task-item')
    expect(taskItems).toHaveLength(2)

    expect(taskItems[0].find('input[type="text"]').element.value).toBe('eat')
    expect(taskItems[1].find('input[type="text"]').element.value).toBe('sleep')

    expect(taskItems[0].find('input[type="checkbox"]').element.checked).toBe(false)
    expect(taskItems[1].find('input[type="checkbox"]').element.checked).toBe(true)
  })

  it('updates data when input value changes', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked(true)

    expect(wrapper.vm.tasks[0].done).toBe(true)
  })

  it('updates data when name value changes', async () => {
    const checkbox = wrapper.find('input[type="text"]')
    await checkbox.setValue('New name')

    expect(wrapper.vm.tasks[0].name).toBe('New name')
  })
})
