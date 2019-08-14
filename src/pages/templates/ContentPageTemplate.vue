<template>
  <section class="content">
    <h1>{{ title || 'Título da Página'  }}</h1>
    <h2>{{ subtitle || 'Subtitulo da Página' }}</h2>
    <hr>
    <div class="content-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentPageTemplate',
  props: [ 'subtitle', 'title' ]
}
</script>

<style>
.content {
  background-color: #eee;
  flex: 1;

  padding: 30px 20px 20px 30px;
}

.content > hr {
  border: 1px solid #444;
  /* border: 1px solid #4fc08d; */
  /* border: 1px solid #2c3e50; */
}

.content-container {
  margin: 25px 0px 0px 0px;
}
</style>
