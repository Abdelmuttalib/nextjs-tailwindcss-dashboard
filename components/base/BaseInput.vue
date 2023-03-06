<script setup lang="ts">
interface Props {
  modelValue: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})

const emit = defineEmits(['update:modelValue'])
const input = ref<HTMLElement>()

function updateModalValue (event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    ref="input"
    class="block w-full max-w-xs mx-auto shadow-sm focus:ring-secondary-500 focus:border-secondary-500 border-gray-300 rounded-md text-secondary-700 focus:outline-none dark:focus:ring-primary-500 dark:focus:border-primary-500"
    :value="props.modelValue"
    @input="updateModalValue"
  >
</template>
