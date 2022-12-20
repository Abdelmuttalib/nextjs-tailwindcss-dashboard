<template>
  <div class="text-gray-400 m-5 flex justify-center gap-4">
    <NuxtLink :to="'/'">
      <Icon name="heroicons-outline:home" class="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" />
    </NuxtLink>

    <DarkToggle />
  </div>
</template>
