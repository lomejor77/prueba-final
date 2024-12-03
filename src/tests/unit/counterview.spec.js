import { shallowMount } from "@vue/test-utils";
import CounterView from "@/components/views/CounterView.vue"; // Ajusta la ruta si es necesario
import { createStore } from "vuex";

describe("CounterView.vue", () => {
  let store;
  let state;
  let actions;

  beforeEach(() => {
    // Mock del estado de Vuex
    state = {
      counter: 0,
    };

    // Mock de las acciones
    actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };

    store = createStore({
      state,
      getters: {
        counter: (state) => state.counter,
      },
      actions,
    });
  });

  it("muestra el valor del contador desde el estado de Vuex", () => {
    const wrapper = shallowMount(CounterView, {
      global: {
        plugins: [store],
      },
    });

    // Verificamos que el contador inicial es 0
    expect(wrapper.text()).toContain("Contador: 0");
  });

  it('debe llamar a la acción increment cuando se hace clic en el botón "+"', async () => {
    const wrapper = shallowMount(CounterView, {
      global: {
        plugins: [store],
      },
    });

    // Simula un clic en el botón "+"
    await wrapper.find("button:nth-of-type(2)").trigger("click");

    // Verifica que la acción increment ha sido llamada
    expect(actions.increment).toHaveBeenCalled();
  });

  it('debe llamar a la acción decrement cuando se hace clic en el botón "-"', async () => {
    const wrapper = shallowMount(CounterView, {
      global: {
        plugins: [store],
      },
    });

    // Simula un clic en el botón "-"
    await wrapper.find("button:nth-of-type(1)").trigger("click");

    // Verifica que la acción decrement ha sido llamada
    expect(actions.decrement).toHaveBeenCalled();
  });
});
