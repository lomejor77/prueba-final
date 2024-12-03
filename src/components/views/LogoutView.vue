<template>
  <button @click="logout">Cerrar Sesión</button>
</template>

<script>
import { auth } from "@/auth";
import { authState } from "@/authState";
import router from "@/router";

export default {
  setup() {
    const logout = async () => {
      await auth.signOut();
      authState.currentUser = null; // Limpiar el estado global
      router.push("/login"); // Redirige al login
    };

    return {
      logout,
    };
  },
};
</script>
