<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    @click="props?.onClick"
    :style="`flex-direction: ${props?.icon?.position === 'left' ? 'row' : 'row-reverse'}`"
    class="flex cursor-pointer items-center justify-center gap-(--spacing-xs) disabled:cursor-not-allowed"
    :class="buttonClasses"
    :disabled="disabled">
    <component
      class="icon"
      v-if="!!props?.icon?.present"
      :is="props?.icon?.component" />
    <span v-if="props?.text">{{ text }}</span>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
};
</script>

<script lang="ts" setup>
import { computed, type Component } from 'vue';
import RemoveFolder from '../icons/common/RemoveFolder.vue';

type Variant = 'primary' | 'secondary' | 'tetiary';
type Theme = 'main' | 'brand' | 'destructive';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  variant?: Variant;
  theme?: Theme;
  size?: Size;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: {
    component?: Component;
    position?: 'right' | 'left';
    present: boolean;
  };
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  theme: 'main',
  size: 'sm',
  icon: () => ({
    component: RemoveFolder,
    position: 'left',
    present: false,
  }),
  disabled: false,
});

const buttonClasses = computed(() => {
  return [`${props?.variant}`, `${props?.theme}`, `${props?.size}`];
});
</script>

<style scoped>
button {
  transition: all 0.4s ease-in;
  font-family: var(--font-family-secondary);
  font-weight: 600;
}

button > * {
  color: inherit !important;
}

/* Sizes */
button.sm {
  height: var(--numbers-900);
  padding: 0px var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
}

button.md {
  height: 2.75rem;
  padding: 0px var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
}

button.lg {
  height: var(--numbers-1400);
  padding: 0px var(--spacing-xl);
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}

/* Colors */
/* Main/Primary */
button.main.primary {
  background-color: var(--button-color-main-primary-default);
  color: 1px solid var(--button-color-main-primary-border);
  color: var(--button-color-main-primary-label);
  box-shadow:
    0px -3px 2px 0px rgba(0, 0, 0, 0.78) inset,
    0px 0px 1px 2px rgba(255, 255, 255, 0.25) inset,
    0px 2px 3px 0px rgba(0, 0, 0, 0.34);
}
button.main.primary:hover {
  background-color: var(--button-color-main-primary-hover);
  box-shadow:
    0px -3px 2px 0px rgba(0, 0, 0, 0.78) inset,
    0px 0px 1px 2px rgba(255, 255, 255, 0.3) inset,
    0px 5px 8.4px 0px rgba(0, 0, 0, 0.34);
}
button.main.primary:focus,
button.main.primary:focus-visible {
  background-color: var(--button-color-main-primary-pressed);
  box-shadow:
    0px -3px 2px 0px rgba(0, 0, 0, 0.78) inset,
    0px 0px 1px 2px rgba(255, 255, 255, 0.25) inset,
    0px -2px 3px 0px rgba(0, 0, 0, 0.34);
}
button.main.primary:disabled {
  background-color: var(--button-color-main-primary-disabled);
  color: var(--button-color-main-primary-label-disabled);
  box-shadow: none;
  border: none;
}
button.main.primary .icon {
  color: var(--button-color-main-primary-icon);
}
button.main.primary:disabled .icon {
  color: var(--button-color-main-primary-icon-disabled);
}

/* Main/Secondary */
button.main.secondary {
  background-color: var(--button-color-main-secondary-default);
  color: var(--button-color-main-secondary-label);
}
button.main.secondary:hover {
  background-color: var(--button-color-main-secondary-hover);
}
button.main.secondary:focus,
button.main.secondary:focus-visible {
  background-color: var(--button-color-main-secondary-pressed);
}
button.main.secondary:disabled {
  background-color: var(--button-color-main-secondary-disabled);
  color: var(--button-color-main-secondary-label-disabled);
  box-shadow: none;
  border: none;
}
button.main.secondary .icon {
  color: var(--button-color-main-secondary-icon);
}
button.main.secondary:disabled .icon {
  color: var(--button-color-main-secondary-icon-disabled);
}

/* Main/Tetiary */
button.main.tetiary {
  background-color: var(--button-color-main-tetiary-default);
  color: var(--button-color-main-tetiary-label);
}
button.main.tetiary:hover {
  background-color: var(--button-color-main-tetiary-hover);
}
button.main.tetiary:focus,
button.main.tetiary:focus-visible {
  background-color: var(--button-color-main-tetiary-pressed);
}
button.main.tetiary:disabled {
  background-color: var(--button-color-main-tetiary-disabled);
  color: var(--button-color-main-tetiary-label-disabled);
  box-shadow: none;
  border: none;
}
button.main.tetiary .icon {
  color: var(--button-color-main-tetiary-icon);
}
button.main.tetiary:disabled .icon {
  color: var(--button-color-main-tetiary-icon-disabled);
}

/* Brand/Primary */
button.brand.primary {
  background-color: var(--button-color-brand-primary-default);
  border: 1px solid var(--button-color-brand-primary-border);
  color: var(--button-color-brand-primary-label);
  box-shadow:
    0px -4px 2px 0px #bd8915 inset,
    0px 0px 2px 2px #fff5df inset,
    0px 1px 3px 1px rgba(170, 119, 5, 0.3);
}
button.brand.primary.sm {
  box-shadow:
    0px 1px 3px 1px rgba(170, 119, 5, 0.3),
    0px -3px 2px 0px #bd8915 inset,
    0px 0px 2px 2px #fff5df inset;
}
button.brand.primary:hover {
  background-color: var(--button-color-brand-primary-hover);
  box-shadow:
    0px 7px 9.2px 0px var(--yellow-300),
    0px -3px 2px 0px #bd8915 inset,
    0px 0px 2px 2px #fff inset;
}
button.brand.primary:focus,
button.brand.primary:focus-visible {
  background-color: var(--button-color-brand-primary-pressed);
  box-shadow:
    0px -1px 1px 1px rgba(180, 129, 14, 0.2),
    0px 3px 2px 0px #bd8915 inset;
}
button.brand.primary:disabled {
  background-color: var(--button-color-brand-primary-disabled);
  color: var(--button-color-brand-primary-label-disabled);
  box-shadow: none;
  border: none;
}
button.brand.primary .icon {
  color: var(--button-color-brand-primary-icon);
}
button.brand.primary:disabled .icon {
  color: var(--button-color-brand-primary-icon-disabled);
}

/* Brand/Secondary */
button.brand.secondary {
  background-color: var(--button-color-brand-secondary-default);
  color: var(--button-color-brand-secondary-label);
}
button.brand.secondary:hover {
  background-color: var(--button-color-brand-secondary-hover);
}
button.brand.secondary:focus,
button.brand.secondary:focus-visible {
  background-color: var(--button-color-brand-secondary-pressed);
}
button.brand.secondary:disabled {
  background-color: var(--button-color-brand-secondary-disabled);
  color: var(--button-color-brand-secondary-label-disabled);
  box-shadow: none;
  border: none;
}
button.brand.secondary .icon {
  color: var(--button-color-brand-secondary-icon);
}
button.brand.secondary:disabled .icon {
  color: var(--button-color-brand-secondary-icon-disabled);
}

/* Brand/Tetiary */
button.brand.tetiary {
  background-color: var(--button-color-brand-tetiary-default);
  color: var(--button-color-brand-tetiary-label);
}
button.brand.tetiary:hover {
  background-color: var(--button-color-brand-tetiary-hover);
}
button.brand.tetiary:focus,
button.brand.tetiary:focus-visible {
  background-color: var(--button-color-brand-tetiary-pressed);
}
button.brand.tetiary:disabled {
  background-color: var(--button-color-brand-tetiary-disabled);
  color: var(--button-color-brand-teriary-label-disabled);
  box-shadow: none;
  border: none;
}
button.brand.tetiary .icon {
  color: var(--button-color-brand-tetiary-icon);
}
button.brand.tetiary:disabled .icon {
  color: var(--button-color-brand-tetiary-icon-disabled);
}

/* Destructive/Primary */
button.destructive.primary {
  background-color: var(--button-color-destructive-primary-default);
  border: 1px solid var(--button-color-destructive-primary-border);
  color: var(--button-color-destructive-primary-label);
}
button.destructive.primary.sm {
  box-shadow:
    0px 1px 1px 1px rgba(180, 14, 14, 0.2),
    0px -3px 2px 0px #bd1515 inset,
    0px 0px 2px 2px #f1c7c7 inset;
}
button.destructive.primary.md {
  box-shadow:
    0px -4px 2px 0px #bd1515 inset,
    0px 0px 2px 2px #f1c7c7 inset,
    0px 1px 1px 1px rgba(180, 14, 14, 0.2);
}
button.destructive.primary.lg {
  box-shadow:
    0px -5px 2px 0px #bd1515 inset,
    0px 0px 3px 3px #f1c7c7 inset,
    0px 1px 1px 1px rgba(180, 20, 14, 0.2);
}
button.destructive.primary:hover {
  background-color: var(--button-color-destructive-primary-hover);
  box-shadow:
    0px 3px 5.2px 0px rgba(224, 205, 108, 0.07),
    0px -3px 2px 0px #bd1515 inset,
    0px 0px 2px 2px #f4d9d6 inset;
}
button.destructive.primary:focus,
button.destructive.primary:focus-visible {
  background-color: var(--button-color-destructive-primary-pressed);
  box-shadow: 0px 0px 2px 2px rgba(47, 42, 42, 0.17) inset;
}
button.destructive.primary:disabled {
  background-color: var(--button-color-destructive-primary-disabled);
  color: var(--button-color-destructive-primary-label-disabled);
  box-shadow: none;
  border: none;
}
button.destructive.primary .icon {
  color: var(--button-color-destructive-primary-icon);
}
button.destructive.primary:disabled .icon {
  color: var(--button-color-destructive-primary-icon-disabled);
}

/* Destructive/Secondary */
button.destructive.secondary {
  background-color: var(--button-color-destructive-secondary-default);
  color: var(--button-color-destructive-secondary-label);
}
button.destructive.secondary:hover {
  background-color: var(--button-color-destructive-secondary-hover);
}
button.destructive.secondary:focus,
button.destructive.secondary:focus-visible {
  background-color: var(--button-color-destructive-secondary-pressed);
}
button.destructive.secondary:disabled {
  background-color: var(--button-color-destructive-secondary-disabled);
  color: var(--button-color-destructive-secondary-label-disabled);
  box-shadow: none;
  border: none;
}
button.destructive.secondary .icon {
  color: var(--button-color-destructive-secondary-icon);
}
button.destructive.secondary:disabled .icon {
  color: var(--button-color-destructive-secondary-icon-disabled);
}

/* Destructive/Tetiary */
button.destructive.tetiary {
  background-color: var(--button-color-destructive-tetiary-default);
  color: var(--button-color-destructive-tetiary-label);
}
button.destructive.tetiary:hover {
  background-color: var(--button-color-destructive-tetiary-hover);
}
button.destructive.tetiary:focus,
button.destructive.tetiary:focus-visible {
  background-color: var(--button-color-destructive-tetiary-pressed);
}
button.destructive.tetiary:disabled {
  background-color: var(--button-color-destructive-tetiary-disabled);
  color: var(--button-color-destructive-tetiary-label-disabled);
}
button.destructive.tetiary .icon {
  color: var(--button-color-destructive-tetiary-icon);
}
button.destructive.tetiary:disabled .icon {
  color: var(--button-color-destructive-tetiary-icon-disabled);
}
</style>
