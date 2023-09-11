<template>
  <div class="app">
    <div class="sidebar" v-if="showSidebar">
      <ul>
        <div><img alt="logo" class="logo" src="https://stemis.com.br/wp-content/uploads/2023/03/stemis-logo-h-branco.png"/></div>
        <li alt="Dashboard" ><router-link to="/dashboard"><h2 class="item-sidebar">Dashboard</h2></router-link></li>
        <li alt="Usuários" ><router-link to="/users"><h2 class="item-sidebar">Usuários</h2></router-link></li>
      </ul>
      <ul>
        <li alt="logout" class="logout"><router-link to="/"><h4 class="item-sidebar">LOGOUT</h4></router-link></li>
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
body { 
  min-height: 100vh; 
  margin: 0;
}
.app {
  display: flex;
  width: 100%;
  overflow-y: hidden;
}
.item-sidebar{
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.logo{
  height: 7vh;
  padding: 10px;
}
.sidebar {
  display: grid;
  align-content: space-between;
  height: 100vh;
  background-color: #074278;
  color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
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
