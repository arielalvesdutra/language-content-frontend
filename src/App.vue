<template>
  <div id="app">
    <Header />
    <div class="menu-and-content">
      <MenuLeftAside />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./pages/templates/Header";
import MenuLeftAside from "./pages/templates/MenuLeftAside";

export default {
  name: "app",
  components: {
    Header,
    MenuLeftAside
  }
};
</script>

<style>
body {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

#app {
  font-family: "courier";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  height: 100vh;

  display: flex;
  flex-direction: column;
}

.menu-and-content {
  flex: 1;
  display: flex;
}

</style>
