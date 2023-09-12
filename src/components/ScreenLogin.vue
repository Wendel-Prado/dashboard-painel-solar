<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login" class="form-login">
        <label for="username">Usuário:</label>
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
  .login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

  }
  .form-login{
    display: grid;
  }
  </style>
  