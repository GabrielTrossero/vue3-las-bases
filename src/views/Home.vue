<template>
  <WatchCounter />
  <hr />
  <ReactiveCounter />
  <hr />
  <SimpleCounter />
  <hr />
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import WatchCounter from "@/components/03WatchCounter.vue";
import ReactiveCounter from "@/components/02ReactiveCounter.vue";
import SimpleCounter from "@/components/01SimpleCounter.vue";
import HelloWorld from "@/components/00HelloWorld.vue";

export default {
  name: "Home",
  components: {
    WatchCounter,
    ReactiveCounter,
    SimpleCounter,
    HelloWorld,
  },
};
</script>
