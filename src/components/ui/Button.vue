<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="cursor-pointer" :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'secondary', 'tertiary', 'brand-primary', etc.
  },
  disabled: Boolean,
});

const buttonClasses = computed(() => {
  return ['btn', `btn--${props.variant}`, { 'btn--disabled': props.disabled }];
});
</script>

<style scoped>
button.main.primary {
  color: var(--gray-800);
}
</style>
