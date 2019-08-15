<template>
  <ContentSection 
      title="Linguagens" subtitle="Listagem de Linguagens">    

      <LanguageList />
  </ContentSection>
</template>

<script>
import ContentSection from '@/pages/templates/ContentSection'
import LanguageList from '@/components/languages/LanguageList'

import { mapState } from 'vuex'

export default {
  name: 'LanguagePage',
  components: {
    LanguageList,
    ContentSection
  },
  computed: mapState([  ])
}
</script>

<style>

</style>
