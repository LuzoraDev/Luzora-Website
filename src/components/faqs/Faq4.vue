<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const responseList = [
  'Free Plan: Basic task management and scheduling.',
  'Pro Plan: Advanced analytics, ability to add unlimited task, access to create in Task Marketplace, and premium features like wallet scanning for unclaimed rewards.',
];
</script>

<template lang="html">
  <div
    class="pt-[0.6875rem] pb-(--numbers-400) font-(family-name:--font-family-secondary) text-(length:--font-size-md) font-[500] text-(--yellow-900)">
    <p class="leading-(--line-height-md)">LUZORA offers:</p>
    <ul class="mt-[1rem] list-inside list-disc">
      <li v-for="(listItem, index) in responseList" :key="index">
        {{ listItem }}
      </li>
    </ul>
  </div>
</template>
