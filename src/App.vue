<template>
  <div class="app">
    <div class="sidebar" v-if="showSidebar">
      <ul>
        <div>
          <img alt="logo" class="logo" src="https://stemis.com.br/wp-content/uploads/2023/03/stemis-logo-h-branco.png" />
          <img alt="logo" class="logo-min" src='../src/assets/stemis-logo-icone.png'/>
        </div>
        <li alt="Dashboard"><router-link to="/dashboard">
            <div class="container-item-sidebar">
              <mdicon name="view-dashboard" style="margin: 5px;" />
              <h2 class="item-sidebar">Dashboard</h2>
            </div>
          </router-link>
        </li>
        <li alt="Usuários"><router-link to="/users">
            <div class="container-item-sidebar">
              <mdicon name="account-group" style="margin: 5px;" />
              <h2 class="item-sidebar">Usuários</h2>
            </div>
          </router-link>
        </li>
      </ul>
      <ul>
        <li alt="logout" class="logout">
          <router-link to="/">
            <div class="container-item-sidebar">
              <mdicon name="exit-run" />
              <h4 class="item-sidebar">LOGOUT</h4>
            </div>
          </router-link>
    
    </li>

    </ul>
  </div>

  <div class="dashboard">
    <router-view></router-view>
  </div>
</div></template>

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

@media (max-width: 768px) {
  .logo {
    display: none;
    height: 4vh;
  }

  .item-sidebar {
    display: none;
  }
  .logo-min{
    display: block !important;
    height: 3vh;
    margin-left:1.5vh;
  }

}
.logo-min{
  display: none;
}
.app {
  display: flex;
  width: 100%;
  overflow-y: hidden;
  height: 100vh;
}

.container-item-sidebar {
  display: flex;
  align-items: center;
}

.item-sidebar {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
}

h1 {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.logo {
  height: 5vh;
  padding: 20px;
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
  display: grid;
  gap: 15px;
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  display: flex;
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
  overflow: auto;
  background: #f6f8ff;
}
</style>
