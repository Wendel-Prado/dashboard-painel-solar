<template>
  <div class="app">
    <div class="sidebar" v-if="!isMobile">
      <ul>
        <div>
          <img alt="logo" class="logo" src="https://stemis.com.br/wp-content/uploads/2023/03/stemis-logo-h-branco.png" />
        </div>
        <li alt="Dashboard"><router-link to="/dashboard">
            <div class="container-item-sidebar">
              <mdicon name="view-dashboard"  style="margin: 5px;"/> 
              <h2 class="item-sidebar">Dashboard</h2>
            </div>
          </router-link>
        </li>
        <li alt="Usuários"><router-link to="/users">
            <div class="container-item-sidebar">
              <mdicon name="account-group" style="margin: 5px;"/>
              <h2 class="item-sidebar">Usuários</h2>
            </div>
          </router-link>
        </li>
      </ul>
      <ul>
        <li alt="logout" class="logout"><router-link to="/">
            <h4 class="item-sidebar">LOGOUT</h4>
          </router-link></li>
      </ul>
    </div>
    <div v-else class="mobile-menu">
      <button @click="toggleSidebar">Abrir Sidebar</button>
    </div>
    <div class="dashboard" v-if="!isMobile">
      <router-view></router-view>
    </div>
    <div  v-else class="content" >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isMobile: false,
      sidebarOpen: false,
    };
  },
  mounted() {
    this.checkMobile(); // Verifique a largura da tela quando o componente é montado
    window.addEventListener('resize', this.checkMobile); // Atualize a largura da tela quando a janela for redimensionada
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile); // Remova o ouvinte de redimensionamento quando o componente for destruído
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768; // Defina a largura máxima para mobile
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen; // Alternar o estado do sidebar móvel
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
h1{
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
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
}

.sidebar.closed {
  transform: translateX(-250px); /* Fechar o sidebar móvel */
}

.mobile-menu {
  width: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.content {
  margin-left: 250px; /* Ajuste conforme a largura do seu sidebar */
  padding: 20px;
  transition: margin 0.3s ease-in-out;
}

.content.mobile {
  margin-left: 0; /* Fechar o espaço deixado pelo sidebar móvel */
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
