import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage'
import LanguagePage from './pages/languages/LanguagePage'
import ContentPage from './pages/contents/ContentPage'
import Page404 from './pages/errors/Page404'

Vue.use(VueRouter)

const routes = [{
  name: 'home',
  path: '/',
  component: HomePage
}, {
  name: 'languages',
  path: '/languages',
  component: LanguagePage
}, {
  name: 'contents',
  path: '/contents',
  component: ContentPage
}, {
  name: '404',
  path: '*',
  component: Page404
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
