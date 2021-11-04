<template>
  <h2>Emit Events</h2>
  <label for="newMessaje">Mensaje</label>
  <input id="newMessaje" v-model="messaje" />

  <!--Con esta forma utilizo un metodo intermedio en este componente, por si 
    quiero modificar la información antes de enviarla al padre-->
  <button @click="notify">Notificar al componente padre (indirecto)</button>

  <!--Con esta forma notifico al padre directamente llamando a su componente-->
  <button @click="$emit('onFire', messaje)">
    Notificar al componente padre (directo)
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "EmitEvents",

  //defino el evento que va a emitir este componente
  emits: ["onFire"],

  setup(props, { emit }) {
    const messaje = ref("");

    const notify = () => {
      //llamo al evento onFire del componente padre, enviando el mensaje
      emit("onFire", messaje.value);
    };

    return {
      messaje,
      notify,
    };
  },
};
</script>

<style></style>
