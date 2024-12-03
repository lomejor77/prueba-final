<template>
  <div class="mb-3">
    <input type="text" v-model="inputText" class="form-control" placeholder="Escribe algo" />
    <button @click="sendTextToParent" class="btn btn-primary mt-2">
      Enviar
    </button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      inputText: ''  // Variable para almacenar el texto ingresado
    };
  },
  methods: {
    sendTextToParent() {
      // Emitir el texto al componente padre
      this.$emit('textSent', this.inputText);
    }
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos personalizados si lo deseas */
</style>
