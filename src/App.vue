<template>
  <div class="app">
    <div class="sidebar" v-if="showSidebar">
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/profile">Perfil</router-link></li>
        <li><router-link to="/settings">Configurações</router-link></li>
      </ul>
      <ul>
        <li class="logout"><router-link to="/">Logout</router-link></li>
      </ul>
    </div>

    <div class="dashboard">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showSidebar() {
      return this.$route.path !== '/login'
    },
  },
};
</script>

<style>
body{
  margin: 0;
  height: 100%;
  width: 100%;
}
.app {
  display: flex;
  height: 100vh;
  width: 100%;
}

.sidebar {
  display: grid;
  align-content: space-between;
  height: 100%;
  width: 250px;
  background-color: #333;
  color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
  padding: 10px;
}
.sidebar li:hover {
  background-color: #0e0d0d;
  
}
.sidebar a {
  text-decoration: none;
  color: #fff;
}

.dashboard {
  flex: 1;
  padding: 20px;
}
</style>
