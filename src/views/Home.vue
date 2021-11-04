<template>
  <EmitEvents @onFire="eventEmittedFromChild" />
  <hr />
  <ProfileWithProps name="Alejando Ramirez" :age="39" />
  <hr />
  <SimpleFetch />
  <hr />
  <DataList />
  <hr />
  <SimpleCounterCompositionApi />
  <hr />
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
import EmitEvents from "../components/09EmitEvents.vue";
import ProfileWithProps from "../components/08ProfileWithProps.vue";
import SimpleFetch from "../components/06SimpleFetch.vue";
import DataList from "../components/05DataList.vue";
import SimpleCounterCompositionApi from "../components/04SimpleCounterCompositionApi.vue";
import WatchCounter from "../components/03WatchCounter.vue";
import ReactiveCounter from "../components/02ReactiveCounter.vue";
import SimpleCounter from "../components/01SimpleCounter.vue";
import HelloWorld from "../components/00HelloWorld.vue";

export default {
  name: "Home",
  components: {
    EmitEvents,
    ProfileWithProps,
    SimpleFetch,
    DataList,
    SimpleCounterCompositionApi,
    WatchCounter,
    ReactiveCounter,
    SimpleCounter,
    HelloWorld,
  },
  setup() {
    const eventEmittedFromChild = (messaje) => {
      console.log(messaje);
    };

    return {
      eventEmittedFromChild,
    };
  },
};
</script>
