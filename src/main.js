import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from "vue";
import { auth, onAuthStateChanged } from "./auth";
import { authState } from "./authState";
import App from "./App.vue";
import store from "./store";
import router from "./router";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Si el usuario está autenticado, actualizamos el estado global
        authState.currentUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
        };
    } else {
        // Si no hay usuario autenticado, limpiamos el estado
        authState.currentUser = null;
    }
});

createApp(App).use(store).use(router).mount('#app')
