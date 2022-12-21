<template>
  <div class="">
    <LayoutHeader title="服务器状态一览" />
    <!-- Server Status -->
    <div class="mb-6">
      <h2 class="w-fit lg:text-xl mb-2 font-medium">
        服务器状态
      </h2>
      <div class="flex gap-4">
        <div class="inline-flex items-center gap-2">
          <div class="w-6 h-6 rounded-md bg-primary-500 dark:bg-primary-600 text-white">
            <Icon name="heroicons-solid:check" class="w-5 h-5" />
          </div>
          <p class="text-secondary-500 dark:text-gray-300 font-medium">
            在线
          </p>
        </div>
        <div class="inline-flex items-center gap-2">
          <div class="w-6 h-6 rounded-md bg-gray-200 dark:bg-secondary-600" />
          <p class="text-secondary-500 dark:text-gray-300 font-medium">
            离线
          </p>
        </div>
      </div>
    </div>
    <!-- ./Server Status -->
    <div class="grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-5 min-h-[35rem]">
      <div v-for="one in [1,2,3,]" :key="one">
        <div class="border dark:border-none bg-white dark:bg-secondary-700 rounded-md h-full flex flex-col items-start px-6 py-4 gap-4 shadow-md">
          <h3 class="text-lg font-semibold">
            中海常州 项目ID xxxxx
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <!-- Left -->
            <div class="w-full">
              <div class="bg-secondary-700 dark:bg-secondary-800 mt-4 px-4 w-full whitespace-nowrap truncate xl:px-14 py-3 rounded font-semibold text-center">
                <p class="text-secondary-100 font-semibold text-center">
                  中海常州本地1
                </p>
              </div>
              <div class="bg-primary-600 mt-4 px-4 w-full whitespace-nowrap truncate xl:px-14 py-3 rounded font-semibold text-center">
                <p class="text-secondary-100 font-semibold text-center">
                  中海常州本地2
                </p>
              </div>
              <div class="bg-primary-600 mt-4 px-4 w-full whitespace-nowrap truncate xl:px-14 py-3 rounded font-semibold text-center">
                <p class="text-secondary-100 font-semibold text-center">
                  中海常州本地3
                </p>
              </div>
            </div>

            <!-- Right -->
            <div class="bg-primary-600 mt-4 px-4 w-full whitespace-nowrap truncate xl:px-14 py-3 rounded font-semibold text-center h-fit">
              <p class="text-secondary-100 font-semibold text-center">
                中海常州云端1
              </p>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '服务器状态一览'
  // meta: [
  //   { name: 'description', content: 'My amazing site.' }
  // ]
})

</script>
