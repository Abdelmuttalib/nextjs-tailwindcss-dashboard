<script setup lang="ts">
const { data } = await useFetch('/api/project')
</script>

<template>
  <div class="text-gray-400">
    <span class="font-medium text-gray-500">{{ data?.message }}</span>
  </div>
</template>
