<script setup lang="ts">
import type { Countries } from '../types/countries'

const props = defineProps<{
  country: Countries
}>()
</script>

<template>
  <div class="border border-gray-400 shadow p-4 rounded-lg bg-gray-100 mb-4 h-40">
    <div class="flex flex-row items-center">
      <span class="text-9xl mr-10">{{ props.country.emoji }}</span>
      <div>
        <h2 class="h2 text-xl font-semibold break-words">{{ props.country.name }}</h2>
        <p class="text-xl text-gray-500">{{ props.country.code }}</p>
      </div>
    </div>
  </div>
</template>
