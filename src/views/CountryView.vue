<script setup lang="ts">
import CountryItem from '../components/CountryItem.vue'
import LoadingSpinnerOverlay from '../components/LoadingSpinnerOverlay.vue'
import { useCountriesStore } from '../stores/countries'
import { computed, ref } from 'vue'

const countries = useCountriesStore()

const loading = computed(() => countries.loading)
const countriesStore = computed(() => countries.countries)

const search = ref('')

const filteredCountries = computed(() => {
  return countriesStore.value.filter((country) => {
    return country.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const handleSearch = (event: Event) => {
  search.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <section class="w-full flex flex-col justify-evenly">
    <input
      type="text"
      v-model="search"
      @input="handleSearch"
      placeholder="Search for a country..."
      class="border border-gray-400 p-4 rounded-lg bg-gray-50 mb-4 w-full lg:w-1/2 mx-auto"
    />
    <p class="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row">
      <span v-if="filteredCountries.length === 0">No countries found</span>
      <span v-else>Found {{ filteredCountries.length }} countries</span>
    </p>
    <LoadingSpinnerOverlay v-if="loading" />
    <section v-else class="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row">
      <article class="w-full lg:w-1/2" v-for="(country, index) in filteredCountries" :key="index">
        <CountryItem :country="country" />
      </article>
    </section>
  </section>
</template>
