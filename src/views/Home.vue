<template>
  <SimpleCounter />
  <hr />
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import SimpleCounter from "@/components/01SimpleCounter.vue";
import HelloWorld from "@/components/00HelloWorld.vue";

export default {
  name: "Home",
  components: {
    SimpleCounter,
    HelloWorld,
  },
};
</script>
