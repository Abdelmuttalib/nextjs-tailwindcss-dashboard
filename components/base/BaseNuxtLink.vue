<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{ to: RouteLocationRaw }>()
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="
      inline-flex
      items-center
      px-1
      py-0.5
      transition
      shadow-sm
      text-sm
      md:text-base
      font-medium
      rounded-md
      text-primary-500
      focus:outline-none
      underline decoration-2
      focus:ring-primary-500
      hover:text-primary-600
      focus:text-primary-600 decoration-primary-300 focus:decoration-primary-500
      hover:decoration-primary-500
      dark:decoration-primary-500
      dark:text-primary-500
      dark:hover:text-primary-400
      dark:hover:decoration-primary-400
      dark:focus:text-primary-500/90
      dark:focus:decoration-primary-500/90
    "
  >
    <slot />
  </NuxtLink>
</template>
