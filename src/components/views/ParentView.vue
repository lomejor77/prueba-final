<template>
  <div class="container mt-5">
    <h2>Comunicación entre componentes</h2>
    <!-- Componente Hijo -->
    <ChildView @textSent="handleTextFromChild" />

    <!-- Mostrar el texto recibido cuando se envíe -->
    <div v-if="receivedText" class="alert alert-info mt-3">
      <strong>Texto recibido:</strong> {{ receivedText }}
    </div>
  </div>
</template>

<script>
// Importamos el componente hijo

import ChildView from './ChildView.vue';

export default {
  components: {
    ChildView
  },
  data() {
    return {
      receivedText: null,  // Almacenar el texto recibido del componente hijo
      messageSent: false   // Variable para controlar si se ha enviado el mensaje
    };
  },
  methods: {
    handleTextFromChild(text) {
      // Se actualiza estado con el texto recibido y cambiamos la visibilidad
      this.receivedText = text;
      this.messageSent = true;  // Cambiar a true para mostrar el mensaje en el padre
    }
  }
};
</script>

<style scoped></style>
