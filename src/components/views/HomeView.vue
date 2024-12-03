<template>
  <div class="container">
    <h1>Página Home</h1>
    <button @click="logout">Logout</button>
  </div>
</template>
<script>

import { signOut } from "firebase/auth";
import { auth } from "@/auth";



export default {
  components: {

  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>
<style scoped>
/* Centrar todo el contenido dentro del contenedor */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Centrado vertical */
  align-items: center;
  /* Centrado horizontal */
  height: 100vh;
  /* Asegurarse de que ocupe toda la altura de la ventana */
  padding: 20px;
}

/* Estilo para la tarjeta */
.card {
  width: 80%;
  max-width: 600px;
  margin-top: 20px;
}

/* Estilos para la tarjeta */
.card-body {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  /* Centrar el contenido dentro de la tarjeta */
}

/* Estilo para el botón */
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

h1 {
  color: #42b983;
}
</style>
