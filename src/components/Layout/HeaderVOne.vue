<script setup lang="ts">
import LogoBlack from '../icons/common/LogoBlack.vue';
import Button from '../ui/Button.vue';
import { RouterLink } from 'vue-router';
import { useMouse } from '@vueuse/core';
import { ref, watchEffect, onMounted, onUnmounted } from 'vue';

const navLinks = [
  { name: 'Hive Story', href: '/story' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/docs' },
  { name: 'Community', href: '/community' },
];

const container = ref<HTMLElement | null>(null);
const isHovering = ref<boolean>(false);

// Get mouse position
const { x, y } = useMouse();

// Target and current rotations
const targetRotationX = ref<number>(0);
const targetRotationY = ref<number>(0);
const currentRotationX = ref<number>(0);
const currentRotationY = ref<number>(0);

let animationFrameId: number;

const updateTargetRotation = () => {
  if (!container.value || !isHovering.value) {
    targetRotationX.value = 0;
    targetRotationY.value = 0;
    return;
  }

  const rect = container.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const deltaX = x.value - centerX;
  const deltaY = y.value - centerY;

  targetRotationY.value = (deltaX / rect.width) * 20;
  targetRotationX.value = (deltaY / rect.height) * -20;
};

const lerp = (start: number, end: number, alpha: number): number =>
  start + (end - start) * alpha;

const animate = () => {
  currentRotationX.value = lerp(
    currentRotationX.value,
    targetRotationX.value,
    0.1,
  );
  currentRotationY.value = lerp(
    currentRotationY.value,
    targetRotationY.value,
    0.1,
  );

  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  animationFrameId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});

watchEffect(updateTargetRotation);
</script>

<template lang="html">
  <header
    class="mx-auto mt-(--numbers-800) h-fit w-[97%] max-w-[126.6875rem] rounded-t-(--radius-lg) border-(--border-color-surface-secondary) bg-(--surface-color-base)">
    <section
      class="flex flex-1 flex-col gap-[2.625rem] p-[1.5rem_1.5rem_1.125rem_1.5rem]">
      <div
        class="relative flex h-[28.3125rem] flex-col justify-end overflow-hidden rounded-(--radius-md) bg-(--yellow-brand)">
        <div
          ref="container"
          class="relative mx-auto w-[68.0625rem] translate-y-[50%]"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
          :style="{
            transform: `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`,
          }">
          <img
            src="/images/header-img-full.png"
            class="object-cover"
            style="pointer-events: none"
            alt="Header Image" />
          <img
            src="/images/rookie-bee.png"
            class="absolute right-0 bottom-1/2 w-[9.3125rem] translate-x-3/4"
            alt="Header Image" />
        </div>
        <img
          src="/images/header-img-1.png"
          class="absolute top-0 left-0 w-[24.3125rem]"
          alt="Header Image" />
      </div>
      <div>
        <h1
          class="mx-auto mb-[0.8125rem] w-[45rem] text-center font-(family-name:--font-family-primary) text-(length:--font-size-h2) leading-(--line-height-h2) font-[700] tracking-[-1.2px] text-(--text-color-headings)">
          Your Web3 activities organized in one place
        </h1>
        <p
          class="mx-auto mb-[2.25rem] w-[30.875rem] text-center font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[500] text-(--gray-500)">
          Track, schedule, and execute Web3 tasks effortlessly—stay organized
          and in control.
        </p>
        <div class="mx-auto w-fit"><Button>Join waitlist</Button></div>
      </div>
    </section>
  </header>
  <section
    class="sticky top-0 z-[6] mx-auto flex h-fit w-[97%] max-w-[126.6875rem] items-center justify-between rounded-b-(--radius-lg) border-(--border-color-surface-secondary) bg-(--surface-color-base) p-[1.1875rem_1rem]">
    <RouterLink to="/">
      <figure class="px-(--spacing-lg) py-(--numbers-400)">
        <LogoBlack />
      </figure>
    </RouterLink>
    <nav class="flex w-fit">
      <ul class="flex items-center gap-(--numbers-400)">
        <li v-for="(link, idx) in navLinks" :key="idx">
          <RouterLink
            class="rounded-(--radius-sm) px-(--numbers-200) py-(--numbers-100) font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-less-emphasis)"
            :to="link.href">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <Button>Nav Button</Button>
  </section>
</template>
