<template>
  <section class="menu-left-aside">
    <nav>
      <ul>
        <li>
          <router-link to="/" :class="{ 'active': $route.path === '/'}">
            Página inicial
          </router-link>
        </li>
        <li>
          <router-link to="/languages" 
              :class="{ 'active': $route.path === '/languages'}">
            Linguagens de Programação
          </router-link>
        </li>
        <li>
          <router-link to="/contents"
              :class="{ 'active': $route.path === '/contents'}">
            Conteúdos
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'MenuLeftAside',
      data: () => ({
        menuVisible: false,
    })
}
</script>

<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: flex;
  flex-direction: column;
}

ul li a {
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 15px 10px;
}

ul li a.active {
  /* background-color: #2b9968; */
  background-color: #1d8053;
}

ul li a:hover {
  
  /* background-color: #74bb9b; */
  background-color: #8bdfb9;
}


.menu-left-aside {
  background-color: #4fc08d;
  width: 220px;

  padding: 80px 0px 10px 0px;
}

</style>
