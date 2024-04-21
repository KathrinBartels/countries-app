import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

const pinia = createPinia()

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://countries.trevorblades.com'
})

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})
  .use(router)
  .use(pinia)
  .mount('#app')
