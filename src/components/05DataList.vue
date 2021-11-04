<template>
  <h2>Lista de Datos</h2>
  <input v-model="todo" @keypress.enter="addData" />
  <ul>
    <li v-for="(t, index) in todos" :key="index">
      {{ t }}
      <button @click="deleteData(index)">Eliminar</button>
    </li>
  </ul>
</template>

<script>
import useDataList from "../composables/useDataList";
export default {
  name: "DataList",
  setup() {
    const { todo, todos, addData, deleteData } = useDataList();

    return {
      todo,
      todos,
      addData,
      deleteData,
    };
  },
};
</script>

<style></style>
