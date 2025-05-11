<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
import Polygon from '@/components/icons/common/Polygon.vue';
import Reddit from '@/components/icons/common/Reddit.vue';
import Telegram from '@/components/icons/common/Telegram.vue';
import Youtube from '@/components/icons/common/Youtube.vue';
import Discord from '@/components/icons/footer/Discord.vue';
import Twitter from '@/components/icons/footer/Twitter.vue';
import formatNumber from '@/utils/formatNumber';

const metrics = [
  { name: 'Discord', number: 60000 },
  { name: 'x', number: 120000 },
  { name: 'Telegram', number: 32000 },
];

const community = [
  {
    icon: Telegram,
    name: 'Telegram',
    handle: '@Luzora_io',
    link: 'https://t.me/Luzora_io',
    bgColor: '#28A8E9',
  },
  {
    icon: Twitter,
    name: 'X',
    handle: '@Luzora_io',
    link: 'https://x.com/Luzora_io',
    bgColor: '#000000',
  },
  {
    icon: Discord,
    name: 'Discord',
    handle: '@Luzora_io',
    link: 'https://discord.com/Luzora_io',
    bgColor: '#5865F2',
  },
  {
    icon: Reddit,
    name: 'Reddit',
    handle: '@Luzora_io',
    link: 'https://reddit.com/Luzora_io',
    bgColor: '#FF4500',
  },
  {
    icon: Youtube,
    name: 'Youtube',
    handle: '@Luzora_io',
    link: 'https://youtube.com/Luzora_io',
    bgColor: '#FF0302',
  },
];
</script>

<template lang="html">
  <section class="py-[7.5rem]">
    <h3
      class="mb-[2.0625rem] text-center font-(family-name:--font-family-primary) text-(length:--font-size-h3) leading-(--line-height-h3) font-[700] tracking-[-.96px] text-(--text-color-headings)">
      Join the community
    </h3>
    <p
      class="relative z-[2] mx-auto mb-[2.0625rem] w-[30.75rem] text-center font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-body)">
      Connect with fellow Luzorians in the hive, Contribute to community
      activities and earn badges
      <img
        class="absolute right-[4rem] bottom-[-.875rem] z-[-1] h-[1.4375] w-[4.375rem]"
        src="/images/community-rect-bg.png" />
    </p>
    <div
      class="mx-auto mb-[4.5625rem] flex w-fit gap-(--numbers-400) rounded-(--radius-md) bg-(--yellow-brand) px-(--spacing-md) py-(--spacing-sm)">
      <div
        class="flex items-center gap-(--numbers-400)"
        v-for="(metric, index) of metrics"
        :key="index">
        <div
          class="font-(family-name:--font-family-primary) text-(length:--font-size-h5) leading-(--line-height-h5) font-[700] text-(--text-color-headings)">
          {{ formatNumber(metric?.number) }}
          <span class="font-[600]">{{ metric?.name }}</span>
        </div>
        <span v-if="index !== 2" class="h-[1rem] border border-white" />
      </div>
    </div>
    <div class="mx-auto flex max-w-[50rem] flex-wrap justify-center">
      <div
        v-for="(communityItem, index) of community"
        :key="index"
        class="relative flex h-[14.125rem] w-[14.125rem] items-center justify-center">
        <div class="relative z-[1] flex flex-col items-center">
          <component
            class="mb-[0.8125rem] text-white"
            :is="communityItem?.icon" />
          <h6
            class="font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[500] text-(--text-color-negative)">
            {{ communityItem?.name }}
          </h6>
          <a
            :href="communityItem?.link"
            target="_blank"
            class="mt-[.25rem] font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-[#FFFFFF99]"
            rel="noopener noreferrer">
            {{ communityItem?.handle }}
          </a>
        </div>
        <figure
          :style="`color: ${communityItem?.bgColor}`"
          class="absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <Polygon />
        </figure>
      </div>
    </div>
  </section>
</template>
