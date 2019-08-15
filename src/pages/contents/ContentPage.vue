<template>
  <ContentSection 
    title="Conteúdos" subtitle="Listagem de Conteúdos">
    <ContentList />
  </ContentSection>
</template>

<script>
import ContentSection from '@/pages/templates/ContentSection'
import ContentList from '@/components/contents/ContentList'

export default {
  name: 'ContentPage',
  components: {
    ContentSection,
    ContentList
  }
}
</script>

<style>

</style>
