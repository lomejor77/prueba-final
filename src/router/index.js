import { createRouter, createWebHistory } from "vue-router";
//import { auth } from "@/auth";
import { authState } from "@/authState";
import HomeView from "@/components/views/HomeView.vue";
//import { meta } from "@babel/eslint-parser";

//SE DECLARAN LAS RUTAS
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: { requiresAuth: true },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/components/views/LoginView.vue"),
        meta: { requiresAuth: false },
    },
    {
        path: "/counter",
        name: "counter",
        component: () => import("@/components/views/CounterView.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/registro",
        name: "registro",
        component: () => import("@/components/views/RegisterView.vue"),
    },
    {
        path: "/child",
        name: "child",
        component: () => import("@/components/views/ChildView.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/cerrar-sesion",
        name: "cerrar sesion",
        component: () => import("@/components/views/LogoutView.vue"),
        meta: { requiresAuth: true }, // Asegura que esta ruta sea protegida
    },
];
//
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !authState.currentUser) {
        next("/login"); // Redirige al login si no está autenticado
    } else if (!requiresAuth && authState.currentUser) {
        next("/"); // Redirige al home si ya está autenticado
    } else {
        next();
    }
});

export default router;
