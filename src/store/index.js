import { createStore } from "vuex";

//SE EXPORTA LA CONFIGURACION DE UN STORE VUEX COMO VALOR PREDETERMINADO
export default createStore({
    state: {
        counter: 0, // el estado del contador se establece en 0
    },
    mutations: {
        // aqui  establecen las mutaciones del estado counter
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
    },
    actions: {
        //se realiza el llamado a las mutaciones
        increment({ commit }) {
            commit("increment");
        },
        decrement({ commit }) {
            commit("decrement");
        },
    },
    getters: {
        counter: (state) => state.counter,
    },
});
