<template>
  <h2>Contador Sencillo</h2>
  <p>{{ counter }}</p>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SimpleCounter",

  setup() {
    let counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      increment,
      decrement,
    };
  },
};
</script>

<style></style>
