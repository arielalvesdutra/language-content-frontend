<template>
  <div class="content-list" >
    <v-data-table
        :items="contents"
        :items-per-page="5"
        :headers="contentsHeader"
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

import { contents, contentsHeader } from '@/fake-data'

export default {
  name: 'ContentList',
  data: () => {
    return {
      contents: contents,
      contentsHeader: contentsHeader
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
.content-list button {
  color: #1d8053;
  border: 1px solid #444;
  margin-left: 10px;
  padding: 7px;
}

.content-list button.bt-danger {
  color:red;
}
</style>
