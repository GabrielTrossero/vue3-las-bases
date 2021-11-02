<template>
  <h2>Watch Counter</h2>
  <p>{{ counter }}</p>
  <p>{{ message }}</p>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "WatchCounter",

  setup() {
    const counter = ref(0);
    const message = ref("");

    watch(counter, (currentValue, oldValue) => {
      if (counter.value === 5) {
        message.value =
          "El contador es " +
          currentValue +
          ". El valor anterior era " +
          oldValue +
          ".";
      } else {
        message.value = "";
      }
    });

    const increment = () => {
      counter.value++;
    };

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      message,
      increment,
      decrement,
    };
  },
};
</script>

<style></style>
