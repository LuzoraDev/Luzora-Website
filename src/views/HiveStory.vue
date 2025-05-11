<script setup lang="ts">
import LucideSpeech from '@/components/icons/common/LucideSpeech.vue';
import PlayBack from '@/components/icons/common/PlayBack.vue';
import Button from '@/components/ui/Button.vue';
</script>

<template lang="html">
  <section
    class="mx-auto mt-[3.5rem] mb-[5.1875rem] flex min-h-[18.0625rem] w-[97%] max-w-[126.6875rem] flex-col items-center justify-end rounded-(--radius-lg) bg-(--yellow-brand) bg-[url(/images/hive-pattern-bg.png)] bg-cover bg-center pb-[1.25rem] bg-blend-color-burn">
    <h1
      class="mb-[0.4375rem] font-(family-name:--font-family-primary) text-(length:--font-size-h1) leading-(--line-height-h1) font-[600] tracking-[-1.44px] text-(--text-color-headings)">
      The Rise of Luzora
    </h1>
    <h6
      class="mb-[1rem] font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[600] text-(--yellow-950)">
      The Hive&apos;s Awakening
    </h6>
    <div
      class="flex items-center gap-(--numbers-200) rounded-[.75rem] border border-(--yellow-950) bg-(--yellow-900) p-(--numbers-100) pl-(--numbers-200)">
      <LucideSpeech class="text-white" />
      <Button
        variant="primary"
        size="sm"
        class="text-[#473C0C]"
        :icon="{ present: true, component: PlayBack }"
        theme="brand" />
    </div>
  </section>
  <article
    class="mx-auto mb-[16.3125rem] max-w-[70.25rem] text-justify font-(family-name:--font-family-primary) text-(length:--font-size-h4) leading-(--line-height-h4) font-[400] text-(--text-color-body)">
    In the swirling storm of Web3—where every dawn brings a dozen new dApps,
    protocols, and tokens—it&apos;s all too easy to feel your focus scattered
    and your purpose lost in the noise. We&apos;re humans, not machines; we can
    only pour our attention into so much before we falter.
    <br />
    <br />
    So a small band of Web3 enthusiasts—builders, farmers, explorers—gathered
    one evening and confessed the same frustration: we chase every opportunity,
    but lack the discipline to turn chaos into progress. We realized it
    wasn&apos;t a lack of willpower but a lack of structure: no schedules, no
    journals, no single dashboard to guide our days.
    <br />
    <br />
    That night, under the hum of neon screens, we imagined a different world—one
    inspired by nature&apos;s most disciplined architects: the bees. What if
    each of us could become a “Hive Member,” charting our tasks like bees
    mapping flowers, earning small wins every day, and building momentum toward
    something greater? What if consistency itself could be gamified, made
    visible, celebrated?
    <br />
    <br />
    From that spark came Luzora. A place where you pre-save every task—staking
    tokens, joining testnets, crafting proposals—in one hive. A place where each
    completed task adds to your streak, unlocks your next challenge, and quietly
    powers your own growth. No tokens dangling like carrots—just the pure
    satisfaction of crossing off lines, of rising each morning knowing exactly
    what you&apos;ll achieve.
    <br />
    <br />
    Imagine tracking your Web3 journey with clarity: today you&apos;ll claim
    that airdrop, tomorrow you&apos;ll test that protocol, next week you&apos;ll
    hit your staking goal—all recorded, all visible, all driving you forward.
    And with every tick of completion, you glimpse not just what you did, but
    what you can become: more disciplined, more skilled, more unstoppable.
    <br />
    <br />
    Whether you aspire to master every DeFi tool, maintain an unbroken streak,
    or simply have a trusty log of your accomplishments—Luzora is our hive for
    you. Here, you&apos;ll learn from the bees: how small, steady efforts
    compound into extraordinary outcomes.
    <br />
    <br />
    Join our Hive. Let each day&apos;s work hum with purpose. Build your own
    golden comb of consistency—and watch what you, together with thousands of
    fellow bees, will create.
    <br />
    <br />
    Luzora—Where Consistency Becomes Your Greatest Reward.
  </article>
</template>
