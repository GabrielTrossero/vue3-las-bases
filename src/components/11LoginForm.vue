<template>
  <h2>Login Form</h2>
  <label for="email">Email</label>
  <input
    autocomplete="off"
    id="email"
    :value="email"
    type="email"
    name="email"
    @input="$emit('update:email', $event.target.value)"
  />

  <label for="pass">Password</label>
  <input
    autocomplete="off"
    id="pass"
    :value="pass"
    type="password"
    name="pass"
    @input="$emit('update:pass', $event.target.value)"
  />
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    email: {
      type: String,
      default: "",
    },
    pass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
