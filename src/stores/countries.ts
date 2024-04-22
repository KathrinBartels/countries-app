import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Countries } from '../types/countries'

const storeKey = 'countries'

export const useCountriesStore = defineStore(storeKey, () => {
  const countries = ref([] as Countries[])

  const COUNTRIES_QUERY = gql/* GraphQL */ `
    query {
      countries {
        code
        name
        emoji
      }
    }
  `
  const { result, loading, error } = useQuery(COUNTRIES_QUERY, {
    fetchPolicy: 'cache-first',
    pollInterval: 5000
  })

  watch(error, (newError) => {
    console.error(newError)
  })

  watch(
    () => result.value,
    () => {
      if (result.value) {
        countries.value = result.value.countries
      }
    }
  )

  return {
    countries,
    loading,
    error
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountriesStore, import.meta.hot))
}
