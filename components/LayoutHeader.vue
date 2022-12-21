<template lang="">
  <div class="flex w-full items-center justify-between mb-10">
    <h1 class="w-fit text-xl sm:text-3xl md:text-4xl text-secondary-700 dark:text-gray-100 font-semibold">
      {{ title }}
    </h1>

    <!-- Theme Toggle -->
    <DarkToggle class="bg-gray-200 dark:bg-secondary-700 p-1.5 rounded-md" />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Dashboard'
    }
  }
}
</script>
<style lang="">

</style>
