<template>
  <ContentSection
      :title="titleMessage" :subtitle="subtitle">
    <h3 class="error-404-title">{{ title }}</h3>
    <p class="error-404-description">{{ description }}</p>
  </ContentSection>
</template>

<script>
import ContentSection from '@/pages/templates/ContentSection'

export default {
  name: 'Page404',
  components: {
    ContentSection
  },
  data: () => {
    return {
      title: '404',
      titleMessage: 'Erro',
      subtitle: '404 - Página não encontrada',
      description: 'Oops... A página que você está procurando não foi encontrada!'
    }
  }
}
</script>

<style>

.error-404-title {
  font-size: 9.5rem;
  margin: 35px 0;
}

.error-404-description {
  font-size: 1.4rem;
}

</style>
