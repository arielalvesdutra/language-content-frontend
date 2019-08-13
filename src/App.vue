<template>
  <div id="app">
    <div>

    <img alt="Vue logo" src="./assets/language-icon-01.png">
    </div>
    <HelloWorld msg="Senha bem vindo ao Language Content"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#app > img {
  height: 400px;
}

</style>
