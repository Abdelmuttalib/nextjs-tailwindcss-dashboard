<template>
  <h1 class="text-3xl md:text-5xl font-semibold text-secondary-600 mb-5 tracking-tight dark:text-gray-100">
    InView Maintenance Dashboard
  </h1>
  <div class="inline-flex flex-col sm:flex-row text-2xl cursor-default">
    <div class="flex flex-col">
      <div>
        <img class="w-16 h-16 inline-block" src="/nuxt.png">
      </div>
      <span class="text-green-500 mt-2">Nuxt 3</span>
    </div>
    <div
      class="text-2xl text-gray-400 mx-4 my-auto transform hover:rotate-45 hover:duration-500"
    >
      <Icon name="heroicons-solid:plus" class="w-6 h-6" />
    </div>

    <div class="flex flex-col">
      <div>
        <img class="w-16 h-16 inline-block" src="/tailwindcss.png">
      </div>
      <span class="text-sky-500 mt-2">Tailwindcss 3</span>
    </div>

    <div
      class="text-2xl text-gray-400 mx-4 my-auto transform hover:rotate-45 hover:duration-500"
    >
      <Icon name="heroicons-solid:plus" class="w-6 h-6" />
    </div><div class="flex flex-col">
      <div>
        <img class="w-16 h-16 inline-block" src="/vite.png">
      </div>
      <span class="text-purple-500 mt-2">Vite</span>
    </div>
  </div>
</template>
