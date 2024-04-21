<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue'
</script>
<template>
  <div
    class="spinner absolute z-10 flex flex-col items-center justify-center bg-white bg-opacity-60 grow-1 w-full h-full top-0 left-0"
  >
    <LoadingSpinner class="!h-10 !w-10" />
    <slot></slot>
  </div>
</template>
