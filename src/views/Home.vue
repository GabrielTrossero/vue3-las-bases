<template>
  <LoginForm v-model:email="email" v-model:pass="pass" />
  {{ email + " - " + pass }}
  <hr />
  <RootEvents />
  <hr />
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
import LoginForm from "../components/11LoginForm.vue";
import RootEvents from "../components/10RootEvents.vue";
import EmitEvents from "../components/09EmitEvents.vue";
import ProfileWithProps from "../components/08ProfileWithProps.vue";
import SimpleFetch from "../components/06SimpleFetch.vue";
import DataList from "../components/05DataList.vue";
import SimpleCounterCompositionApi from "../components/04SimpleCounterCompositionApi.vue";
import WatchCounter from "../components/03WatchCounter.vue";
import ReactiveCounter from "../components/02ReactiveCounter.vue";
import SimpleCounter from "../components/01SimpleCounter.vue";
import HelloWorld from "../components/00HelloWorld.vue";

import { reactive, toRefs } from "vue";
export default {
  name: "Home",
  components: {
    LoginForm,
    RootEvents,
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

    const login = reactive({
      email: "",
      pass: "",
    });

    return {
      eventEmittedFromChild,
      ...toRefs(login),
    };
  },
};
</script>
