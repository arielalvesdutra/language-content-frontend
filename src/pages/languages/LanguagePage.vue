<template>
  <ContentPageTemplate 
      title="Linguagens" subtitle="Listagem de Linguagens">    

  </ContentPageTemplate>
</template>

<script>
import ContentPageTemplate from '@/pages/templates/ContentPageTemplate'
import { mapState } from 'vuex'

export default {
  name: 'LanguagePage',
  components: {
    ContentPageTemplate
  },
  computed: mapState([  ])
}
</script>

<style>

</style>
