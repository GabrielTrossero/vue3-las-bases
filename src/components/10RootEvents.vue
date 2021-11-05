<template>
  <h2>Root Events</h2>
  <label for="rootMessaje">Mensaje</label>
  <input id="rootMessaje" v-model="messaje" />
  <button @click="notify">Notificar al componente root</button>
</template>

<script>
import { ref, inject } from "vue";
export default {
  name: "RootEvents",

  //defino el evento que va a emitir este componente
  emits: ["onFire"],

  setup() {
    const messaje = ref("");
    const emmiter = inject("emmiter");

    const notify = () => {
      emmiter.emit("onFire", messaje.value);
    };

    return {
      messaje,
      notify,
    };
  },
};
</script>

<style></style>
