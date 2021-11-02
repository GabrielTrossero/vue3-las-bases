<template>
  <ReactiveCounter />
  <hr />
  <SimpleCounter />
  <hr />
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import ReactiveCounter from "@/components/02ReactiveCounter.vue";
import SimpleCounter from "@/components/01SimpleCounter.vue";
import HelloWorld from "@/components/00HelloWorld.vue";

export default {
  name: "Home",
  components: {
    ReactiveCounter,
    SimpleCounter,
    HelloWorld,
  },
};
</script>
