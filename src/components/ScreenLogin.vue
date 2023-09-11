<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        if (this.username  && this.password) {
          this.$router.push("/dashboard");
        } else {
          alert("Credenciais inválidas");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  