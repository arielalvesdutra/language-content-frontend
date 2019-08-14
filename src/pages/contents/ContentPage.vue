<template>
  <ContentPageTemplate 
    title="Conteúdos" subtitle="Listagem de Conteúdos">
    <ContentList />
  </ContentPageTemplate>
</template>

<script>
import ContentPageTemplate from '@/pages/templates/ContentPageTemplate'
import ContentList from '@/components/contents/ContentList'

export default {
  name: 'ContentPage',
  components: {
    ContentPageTemplate,
    ContentList
  }
}
</script>

<style>

</style>
