<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <strong>  
         Esse projeto se destina à: 
      </strong>
    </p>
    <ul>
      <li>prover o cadastro de linguagens e conteúdos</li>
      <li>vincular conteúdos às linguagens</li>
      <li>acompanhar o status do aprendizado dos conteúdos vinculados a uma linguagem</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
}

li {
  margin: 0 10px;
  text-align: left;
}

a {
  color: #42b983;
}

.hello {
  width: 700px;
}

.hello > p {
  text-align: left;
}

</style>
