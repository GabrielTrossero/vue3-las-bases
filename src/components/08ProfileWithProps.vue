<template>
  <h2>Profile With Props</h2>
  <p>{{ "Nombre: " + name }}</p>
  <p>{{ "Edad: " + age }}</p>
  <p>{{ "Edad modificada:" + edad }}</p>
</template>

<script>
export default {
  name: "ProfileWithProps",
  props: {
    name: String,
    age: Number,
  },
  setup(props) {
    //tambien puedo modificar las props en setup
    const edad = props.age + 1;

    return {
      edad,
    };
  },
};
</script>

<style></style>
