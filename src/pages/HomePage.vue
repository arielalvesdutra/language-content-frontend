<template>
  <ContentSection 
      title="Página inicial" subtitle="Seja bem vindo!">
    
    <h3>Apresentação</h3>
    <p class="home-presentation">
      Aqui deve ficar um parágrafo com alguma contextualização e introdução ao sistema.
    </p>
    <h3>Conteúdos e Linguagens</h3>
    <div class="card-container">
      <v-card max-width="344" class="mx-auto" color="#1d8053">
        <v-card-title>Conteúdos</v-card-title>
        <v-card-text>
          Os conteúdos que serão vinculados às linguagens de programação para que possam ser estudados.
        </v-card-text>
        <v-card-actions>
          <v-btn @click="redirectToContents()" text>Clique para abrir</v-btn>
        </v-card-actions>
      </v-card>

      <v-card max-width="344" class="mx-auto" color="#1d8053">
        <v-card-title>Linguagens de Programação</v-card-title>
        <v-card-text>
          As linguagens de programação a serem cadastradas no sistema.
        </v-card-text>
        <v-card-actions>
          <v-btn @click="redirectToLanguages()" text>Clique para abrir</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </ContentSection>
</template>

<script>
import ContentSection from '@/pages/templates/ContentSection'
export default {
  name: 'HomePage',
  components: {
    ContentSection
  },
  methods: {
    redirectToContents() {
      this.$router.push('/contents')
    },
    redirectToLanguages() {
      this.$router.push('/languages')
    }
  }
}
</script>

<style>

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.v-card {
  margin-right: 15px;
  margin-bottom: 10px;
}

.v-card__title, 
.theme--light.v-card > .v-card__text,
.v-card__actions .v-btn.v-btn,
.v-carr {
  color: white;
}

.home-presentation {
  margin-bottom: 30px;
}

h3 {
  margin-bottom: 15px;
}

</style>
