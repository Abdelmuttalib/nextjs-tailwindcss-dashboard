<script setup lang='ts'>
const color = useColorMode()

function toggleDark () {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
    @click="toggleDark()"
  >
    <Icon v-if="color.value === 'dark'" name="heroicons-outline:moon" class="w-6 h-6 lg:w-7 lg:h-7" />
    <Icon v-else name="heroicons-outline:sun" class="w-6 h-6 lg:w-7 lg:h-7" />
  </button>
</template>
