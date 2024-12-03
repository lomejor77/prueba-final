<template>
  <div>
    <h1>Página ContadorS</h1>
  </div>
  <div class="counter-view">
    <h1>Contador: {{ counter }}</h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CounterView",
  computed: {
    ...mapGetters(["counter"]),
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
  },
};
</script>
<style scoped>
.counter-view {
  text-align: center;
  margin: 20px;
}
button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
