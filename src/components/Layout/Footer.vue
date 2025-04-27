<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import LogoWhite from '../icons/common/LogoWhite.vue';
import Twitter from '../icons/footer/Twitter.vue';
import Discord from '../icons/footer/Discord.vue';
import Github from '../icons/footer/Github.vue';
import Button from '../ui/Button.vue';
</script>

<template lang="html">
  <footer
    class="relative flex h-[54.125rem] flex-col justify-between bg-(--surface-color-footer-bg) bg-[url(/gif/luzora-rotating-logo.gif)] bg-cover bg-center pt-[8.0625rem]">
    <div>
      <h3
        class="mx-auto mb-[1.125rem] w-[30rem] text-center font-(family-name:--font-family-primary) text-(length:--font-size-h2) leading-(--line-height-h2) font-[700] tracking-[-1.2px] text-(--text-color-negative)">
        We are launching soon
      </h3>
      <p
        class="mx-auto mb-[2.5rem] w-[25.9375rem] text-center font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-negative)">
        Be first in line to join the future of activity management in web3. Join
        our
        <span class="font-[700]">Hivelist</span>
        to be the first to experience LUZORA.
      </p>
      <div class="mx-auto w-fit">
        <Button>Footer Button</Button>
      </div>
    </div>
    <div
      style="
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.46) 0%,
          rgba(0, 0, 0, 0.82) 100%
        );
      "
      class="absolute bottom-0 left-0 h-[16rem] w-full blur-[29.799999237060547px] backdrop-blur-[8.800000190734863px]" />
    <div
      class="bg-[rgba(0, 0, 0, 0.06)] relative z-[1] mx-auto flex w-[70%] max-w-[85.5rem] justify-between py-[3rem]">
      <div class="flex gap-[3.4375rem]">
        <figure class="px-(--spacing-lg) py-(--numbers-400)">
          <LogoWhite />
        </figure>
        <span
          class="w-[21.375rem] font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) text-(--text-color-on-action)">
          A robust task management platform designed to help Web3 enthusiasts
          streamline their activities, stay consistent, and achieve their goals.
        </span>
      </div>
      <div class="flex gap-[1.1875rem]">
        <figure class="p-(--spacing-md) text-white">
          <Twitter />
        </figure>
        <figure class="p-(--spacing-md) text-white">
          <Discord />
        </figure>
        <figure class="p-(--spacing-md) text-white">
          <Github />
        </figure>
      </div>
    </div>
  </footer>
</template>
