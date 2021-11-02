<template>
  <h2>Hola Mundo</h2>
  <p>{{ messaje }}</p>
  <input v-model="messaje" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",

  setup() {
    const messaje = ref("Hello World");

    return {
      messaje,
    };
  },
};
</script>

<style></style>
