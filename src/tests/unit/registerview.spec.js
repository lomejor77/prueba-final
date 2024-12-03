import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import RegisterView from '@/components/views/RegisterView.vue'

describe('RegisterView', () => {
  test('Probando que existe la vista RegisterView', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/registro',
        name: 'registro',
        components: RegisterView,
      }],
    })
    router.push('/registro')
    await router.isReady()
    const wrapper = mount(RegisterView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(RegisterView).exists()).toBe(true)
  })
})
