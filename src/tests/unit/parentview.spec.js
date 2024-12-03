// Parent.spec.js
import { mount } from '@vue/test-utils';
import ParentView from '@/components/views/ParentView.vue';

describe('PaternView.vue', () => {
  it('debería recibir texto desde el componente Child', async () => {
    const wrapper = mount(ParentView);

    // Encuentra el componente Child dentro de Parent
    const childComponent = wrapper.findComponent({ name: 'ChildView' });

    // Simula que se introduce texto en el campo y se hace clic en el botón
    await childComponent.setData({ inputText: 'Hola, mundo!' });
    await childComponent.find('button').trigger('click');

    // Verifica que el texto ha sido emitido y mostrado en el Parent
    expect(wrapper.text()).toContain('Texto recibido: Hola, mundo!');
  });
});
