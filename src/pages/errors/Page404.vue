<template>
  <ContentPageTemplate
      :title="titleMessage" :subtitle="subtitle">
    <h3 class="error-404-title">{{ title }}</h3>
    <p class="error-404-description">{{ description }}</p>
  </ContentPageTemplate>
</template>

<script>
import ContentPageTemplate from '@/pages/templates/ContentPageTemplate'

export default {
  name: 'Page404',
  components: {
    ContentPageTemplate
  },
  data: () => {
    return {
      title: '404',
      titleMessage: '404 - Página não encontrada',
      subtitle: 'Página não encontrada',
      description: 'Oops... A página que você está procurando não foi encontrada!'
    }
  }
}
</script>

<style>

.error-404-title {
  font-size: 8.5rem;
  margin: 35px 0;
}

.error-404-description {
  font-size: 1.4rem;
}

</style>
