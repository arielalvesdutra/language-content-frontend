<template>
  <div class="language-list" >
    <v-data-table
        :items="languages"
        :items-per-page="5"
        :headers="languagesHeader"
        class="elevation-1"
        no-results-text="Nenhum resultado foi encontrado"
        no-data-text="Nenhum dado foi encontrado"
        :footer-props="{
          itemsPerPageText: 'Conteúdos por página: ',
        }"
      >
        <template v-slot:item.action="{ item }">
          <button @click="teste()">
            Detalhes
          </button>
          <button @click="teste()" class="bt-danger">
            Excluir
          </button>
        </template>

    </v-data-table>
  </div>
</template>

<script>

import { languages, languagesHeader } from '@/fake-data'

export default {
  name: 'LanguageList',
  data: () => {
    return {
      languages: languages,
      languagesHeader: languagesHeader
    }
  },
  methods: {
    teste() {
      alert('Método executado...')
    }
  }
}
</script>

<style>
.language-list button {
  color: #1d8053;
  border: 1px solid #444;
  margin-left: 10px;
  padding: 7px;
}

.language-list button.bt-danger {
  color:red;
}
</style>
