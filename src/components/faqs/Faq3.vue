<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const responseList = [
  'Web3 professionals and creators managing day-to-day responsibilities.',
  'Airdrop hunters tracking eligibility and rewards.',
  'NFT collectors managing minting and sales.',
  'Crypto traders and investors organizing market activities.',
  'DAO members keeping up with governance tasks.',
];
</script>

<template lang="html">
  <div
    class="pt-[0.6875rem] pb-(--numbers-400) font-(family-name:--font-family-secondary) text-(length:--font-size-md) font-[500] text-(--yellow-900)">
    <p class="leading-(--line-height-md)">LUZORA is ideal for:</p>
    <ul class="mt-[1rem] list-inside list-disc">
      <li v-for="(listItem, index) in responseList" :key="index">
        {{ listItem }}
      </li>
    </ul>
  </div>
</template>
