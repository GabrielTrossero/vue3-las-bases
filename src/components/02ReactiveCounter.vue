<template>
  <h2>Contador Reactivo</h2>
  <p>{{ data.counter }}</p>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "ReactiveCounter",

  setup() {
    const data = reactive({
      counter: 0,
    });

    const increment = () => {
      data.counter++;
    };

    const decrement = () => {
      data.counter--;
    };

    return {
      data,
      increment,
      decrement,
    };
  },
};
</script>

<style></style>
