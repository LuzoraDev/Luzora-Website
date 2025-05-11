<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Faq1 from '@/components/ui/faqs/Faq1.vue';
import Faq2 from '@/components/ui/faqs/Faq2.vue';
import Faq3 from '@/components/ui/faqs/Faq3.vue';
import Faq4 from '@/components/ui/faqs/Faq4.vue';
import Faq5 from '@/components/ui/faqs/Faq5.vue';
import ArrowDown from '@/components/icons/common/ArrowDown.vue';
import ArrowsUpDown from '@/components/icons/common/ArrowsUpDown.vue';
import CodeBrackets from '@/components/icons/common/CodeBrackets.vue';
import Plant from '@/components/icons/common/Plant.vue';
import PolygonS1 from '@/components/icons/homepage/PolygonS1.vue';
import PolygonS2 from '@/components/icons/homepage/PolygonS2.vue';
import PolygonS3 from '@/components/icons/homepage/PolygonS3.vue';
import PolygonS4 from '@/components/icons/homepage/PolygonS4.vue';
import Button from '@/components/ui/Button.vue';
import { ref } from 'vue';
import ArrowRight from '@/components/icons/common/ArrowRight.vue';
import Discord from '@/components/icons/footer/Discord.vue';

const currentFaq = ref<null | number>(null);

const impactDeets = [
  {
    title: 'Achieve 2x More in Half the Time',
    content:
      'No more juggling multiple platforms to keep a record of your activities—Luzora helps you track, schedule, and manage Web3 activities effortlessly.',
  },
  {
    title: 'Increase Your Web3 Productivity by 80%',
    content:
      'Stay in control of your Web3 activities with a structured, intuitive system built for efficiency. We help you stay consistent on your repetitive the activities.',
  },
  {
    title: 'Focus on what matters without distractions.',
    content:
      'Plan daily, weekly, and long-term goals with ease.  Luzora is built to help Web3 enthusiasts, professionals, and teams get more done with less effort.',
  },
];

const impactFooterNames = [
  'Win like a Bee',
  'Build your Hive',
  'Achieve your goal',
];

const featuresDeets = [
  {
    title: 'Pre-Save Tasks',
    content:
      'Whether its for your on-chain activities or a desire to be consistent at anything. Pre-save it.',
  },
  {
    title: 'Recurring Task Scheduling',
    content: 'Tasks are auto-organize by assigned dates chosen by you.',
  },
  {
    title: 'Automated and Manual Verification',
    content: `Verify on-chain and off-chain activities seamlessly. Trash Jotters and Keep track of all you've done.`,
  },
  {
    title: 'Access to Web3 resources',
    content: `We provide a directory of web3 resources such as Faucets, and Eligibility checkers in various ecosystem.`,
  },
  {
    title: 'Web extension',
    content: `Access pre-saved tasks on the go via a web extension that ensures that you are one click away from completing your task.`,
  },
];

const howLuzoraWorksDeets = [
  {
    bgColor: '--yellow-100',
    borderColor: '--border-color-brand-light',
    textColor: '--text-color-action',
    borderColor2: '--border-color-warning-light',
    title: 'Sign into LUZORA',
    content: `Signing up is quick and easy, all you need is a Google account, social account or your wallet signature! Remember, we don't hold any of your personal information.`,
    cta: { onClick: () => console.log('hi'), text: 'Sign in/up' },
  },
  {
    bgColor: '--green-100',
    borderColor: '--border-color-success-light',
    textColor: '--text-color-success',
    title: 'Add and schedule tasks',
    content: `A wide range of projects are integrated into LUZORA, auto add or custom add tasks to your schedule with easy steps`,
  },
  {
    bgColor: '--blue-100',
    borderColor: '--border-color-information-light',
    textColor: '--text-color-information',
    title: 'Install extension',
    content: `We created the LUZORA Extension to allow you have direct access to your pre-saved tasks on a daily basis. Allow notification.`,
    cta: { onClick: () => console.log('hi'), text: 'Download extension' },
  },
];

const luzoraUseCases = [
  {
    stroke: '--icon-color-brand',
    fill: '--surface-color-brand',
    iconColor: '--yellow-700',
    icon: Plant,
    polygonColors: ['--yellow-200', '--yellow-100', '--yellow-50'],
    titleColor: '--text-color-action',
    title: 'DeFi',
    content: 'Yield farmers, liquidity providers, NFTs and traders',
  },
  {
    stroke: '--icon-color-success',
    fill: '--surface-color-success',
    iconColor: '--icon-color-success',
    icon: ArrowsUpDown,
    polygonColors: ['--green-200', '--green-100', '--green-25'],
    titleColor: '--text-color-success',
    title: 'Airdrops and Token Farming',
    content: 'Airdrop hunters, crypto enthusiasts, and influencers',
  },
  {
    stroke: '--icon-color-information',
    fill: '--surface-color-information',
    iconColor: '--icon-color-information',
    icon: CodeBrackets,
    polygonColors: ['--blue-200', '--blue-100', '--blue-25'],
    titleColor: '--text-color-information',
    title: 'Web3 Development',
    content: 'Blockchain developers and technical teams',
  },
];

const faqs = [
  { question: 'What is LUZORA?', component: Faq1 },
  { question: 'How does LUZORA work?', component: Faq2 },
  { question: 'Who is LUZORA for?', component: Faq3 },
  { question: 'What are the available plans?', component: Faq4 },
  { question: 'Is there a browser extension?', component: Faq5 },
];

const onEnter = (el: Element) => {
  const elCast = el as HTMLElement;
  elCast.style.height = '0';
  void elCast.offsetHeight; // force reflow
  elCast.style.transition = 'height 0.4s ease';
  elCast.style.height = elCast.scrollHeight + 'px';
};

const onLeave = (el: Element, done: () => void) => {
  const elCast = el as HTMLElement;
  elCast.style.height = elCast.scrollHeight + 'px';
  void elCast.offsetHeight; // force reflow
  elCast.style.transition = 'height 0.4s ease';
  elCast.style.height = '0';

  elCast.addEventListener('transitionend', done, { once: true });
};
</script>

<template>
  <section
    class="mx-auto mt-[calc(var(--numbers-800)+var(--numbers-800))] mb-(--numbers-800) flex min-h-[54.8125rem] w-[97%] max-w-[126.6875rem] flex-col rounded-(--radius-lg) bg-[#F8D424]">
    <div class="h-fit px-(--numbers-1100) pt-(--numbers-1100) pb-[2.625rem]">
      <h5
        class="mb-(--numbers-1100) text-center font-(family-name:--font-family-primary) text-(length:--font-size-h5) leading-(--line-height-h5) font-[600] text-(--text-color-headings)">
        Luzora Impact
      </h5>
      <div class="mx-auto flex max-w-[100.5rem] justify-between py-[1.6875rem]">
        <div
          class="flex w-[30%] flex-col gap-(--numbers-400)"
          v-for="(impactDetail, index) in impactDeets"
          :key="index">
          <h4
            class="font-(family-name:--font-family-primary) text-(length:--font-size-h4) leading-(--line-height-h4) font-[700] text-black">
            {{ impactDetail?.title }}
          </h4>
          <p
            class="font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-[#534710]">
            {{ impactDetail?.content }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-1 bg-[url(/images/impact-bg.png)] bg-cover bg-center pb-(--numbers-1100)">
      <div
        class="mx-auto flex max-w-[90.5rem] flex-1 items-end gap-[0.8125rem]">
        <h1
          class="translate-y-[15%] font-(family-name:--font-family-primary) text-[9.2364375rem] leading-[10.2626875rem] font-[900] tracking-[-2.956px] text-black">
          IMPACT
        </h1>
        <ul class="flex flex-1 justify-between">
          <li
            class="font-(family-name:--font-family-primary) text-(length:--font-size-h5) leading-(--line-height-h5) font-[700] text-black"
            v-for="(impactFooterName, index) in impactFooterNames"
            :key="index">
            {{ impactFooterName }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mx-auto w-[90%] max-w-[82.5rem] py-[4.625rem]">
    <h6
      class="mb-[2.75rem] text-center font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[700] text-(--text-color-headings)">
      FEATURES
    </h6>
    <div class="flex flex-wrap gap-x-[2rem] gap-y-(--numbers-800)">
      <div
        v-for="(featureDetail, index) in featuresDeets"
        :key="index"
        class="flex flex-1 flex-col rounded-[1.96875rem] border border-(--border-color-surface-secondary) bg-(--surface-color-base) xl:min-w-[30%]">
        <img
          :src="`/images/features-img-${index + 1}.png`"
          alt="features-image"
          class="h-[16.4375rem] object-cover" />
        <div class="h-fit p-[0_.875rem_.875rem_.875rem]">
          <div
            class="flex h-[7.4375rem] flex-col gap-[0.3125rem] rounded-(--radius-md) border border-(--border-color-surface-secondary) bg-white p-(--numbers-400)">
            <h6
              class="font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[600] text-(--text-color-headings)">
              {{ featureDetail?.title }}
            </h6>
            <p
              class="font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-headings)">
              {{ featureDetail?.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto w-[90%] max-w-[85rem] py-[4rem]">
    <h6
      class="mb-(--numbers-800) text-center font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[700] text-(--text-color-headings)">
      HOW LUZORA WORKS
    </h6>
    <div class="flex gap-(--numbers-600)">
      <div
        v-for="(howLuzoraWorksDetail, index) in howLuzoraWorksDeets"
        :key="index"
        class="py-(1.5rem) flex flex-1 flex-col gap-(--numbers-800) px-(--numbers-400)">
        <div
          :style="`background-color: var(${howLuzoraWorksDetail?.bgColor}); border-color: var(${howLuzoraWorksDetail?.borderColor})`"
          class="mx-auto flex w-fit items-center gap-[.75rem] rounded-[1.1875rem] border py-(--numbers-100) pr-(--numbers-400) pl-(--numbers-100)">
          <span
            :style="`border-color: var(${howLuzoraWorksDetail?.borderColor}); color: var(${howLuzoraWorksDetail?.textColor})`"
            :class="`flex aspect-square w-[2.75rem] items-center justify-center rounded-(--radius-md) border bg-(--surface-color-secondary) font-(family-name:--font-family-primary) text-(length:--font-size-h5) leading-(--line-height-h5) font-[600]`">
            {{ index + 1 }}
          </span>
          <span
            class="font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-[120%] font-[600] text-(--text-color-body)">
            {{ howLuzoraWorksDetail?.title }}
          </span>
        </div>
        <p
          class="min-h-[6rem] text-center font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-body)">
          {{ howLuzoraWorksDetail?.content }}
        </p>
        <figure
          :style="`border-color: var(${howLuzoraWorksDetail?.borderColor2 ?? howLuzoraWorksDetail?.borderColor}); background-color: var(${howLuzoraWorksDetail?.bgColor}); background-image: url(/images/how-luzora-works-img-${index + 1}.png);`"
          :class="`flex h-[29.75rem] w-full items-end justify-center rounded-(--radius-lg) border bg-contain ${index === 1 ? 'bg-right' : 'bg-center'} bg-no-repeat`">
          <!-- <div class="pb-[1.25rem]" v-if="!!howLuzoraWorksDetail?.cta">
            <Button :icon="{ present: true, component: ArrowRight }">
              {{ howLuzoraWorksDetail?.cta?.text }}
            </Button>
          </div> -->
        </figure>
      </div>
    </div>
  </section>
  <section
    class="mx-auto my-(--numbers-800) flex w-[97%] max-w-[126.6875rem] flex-col gap-(--numbers-1200) rounded-(--radius-lg) border border-(--border-color-surface-secondary) bg-(--surface-color-base) p-[5.9375rem_4rem]">
    <div
      class="mx-auto flex w-fit max-w-[53.125rem] flex-col gap-(--numbers-400) p-(--numbers-400)">
      <h2
        class="text-center font-(family-name:--font-family-primary) text-(length:--font-size-h2) leading-(--line-height-h2) font-[700] tracking-[-1.2px] text-(--text-color-less-emphasis)">
        Crafted to consistently
        <span class="text-(--text-color-headings)">manage your tasks</span>
      </h2>
      <p
        class="text-center font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[400] text-(--text-color-body)">
        Achieve your goals as you engage in tasks consistently via our well
        crafted web3 task manager. A safe space to document your activities that
        shows what task you are to carry out and what task you've carried out..
        <br />
        <br />
        LUZORA is for...
      </p>
    </div>
    <div class="mx-auto mb-[2rem] flex w-fit gap-[1.5rem]">
      <div
        v-for="(useCase, index) in luzoraUseCases"
        :key="index"
        class="relative flex h-[17.3125rem] w-[15.5rem] items-end overflow-hidden rounded-(--numbers-600) border border-(--border-color-surface) bg-(--white) p-[1.375rem_1rem_1.375rem_1rem]">
        <div class="relative z-[5] flex flex-col gap-[0.40625rem]">
          <h6
            :style="`color: var(${useCase?.titleColor})`"
            class="font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[600]">
            {{ useCase?.title }}
          </h6>
          <p
            class="font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-headings)">
            {{ useCase?.content }}
          </p>
        </div>
        <div
          :style="`--stroke-color: var(${useCase?.stroke}); --fill-color: var(${useCase?.fill})`"
          class="absolute top-0 left-0 z-[4] w-fit translate-x-[45%] translate-y-[45%]">
          <PolygonS1 />
          <span
            :style="`color: var(${useCase?.iconColor})`"
            class="absolute top-0 left-0 translate-x-[25%] translate-y-[25%]">
            <component :is="useCase?.icon" />
          </span>
        </div>
        <div
          :style="`color: var(${useCase?.polygonColors?.[0]})`"
          class="absolute top-0 left-0 z-[3] w-fit">
          <PolygonS2 />
        </div>
        <div
          :style="`color: var(${useCase?.polygonColors?.[1]})`"
          class="absolute top-0 left-0 z-[2] w-fit">
          <PolygonS3 />
        </div>
        <div
          :style="`color: var(${useCase?.polygonColors?.[2]})`"
          class="absolute top-0 left-0 z-[1] w-fit">
          <PolygonS4 />
        </div>
      </div>
    </div>
  </section>
  <section
    class="mx-auto flex w-[90%] max-w-[95rem] flex-col gap-(--numbers-800) py-[5.9375rem]">
    <h2
      class="text-center font-(family-name:--font-family-primary) text-(length:--font-size-h2) leading-(--line-height-h2) font-[700] tracking-[-1.2px] text-(--text-color-headings)">
      Gamified Consistency indicator
    </h2>
    <p
      class="text-center font-(family-name:--font-family-primary) text-(length:--font-size-h6) leading-(--line-height-h6) font-[400] text-(--text-color-body)">
      The Hive Rank &amp; Hive Point
    </p>
    <img
      src="/images/badges.png"
      class="mx-auto w-[47.625rem]"
      alt="Badges Image" />
    <p
      class="mx-auto w-[47.625rem] text-center font-(family-name:--font-family-secondary) text-(length:--font-size-lg) leading-(--line-height-lg) font-[500] text-(--text-color-body)">
      We created a activity score metrics that shows how diligent and costistent
      you've been with your tasks. This is called the Hive Point (HP) and Hive
      Rank. They function as an on-chain engagement index, measuring user
      consistency through completed tasks, total tasks assigned, and active
      participation days. Now, you can earn points and rank up for the task you
      set up to accomplish.
      <br />
      <br />
      A high activity score serves as the gateway to unlocking blockchain-based
      rewards and incentives.
    </p>
    <div class="mx-auto w-fit">
      <Button :icon="{ present: true, component: ArrowRight }">
        Learn more
      </Button>
    </div>
  </section>
  <section class="relative mx-auto w-[90%] max-w-[81.25rem] py-[5.9375rem]">
    <div class="flex flex-col gap-[1rem]">
      <h4
        class="font-(family-name:--font-family-primary) text-(length:--font-size-h4) leading-(--line-height-h4) font-[600] text-(--text-color-headings)">
        ALL APPS, PROJECTS & TASKS
        <br />
        ORGANIZED
        <span
          class="bg-(--gray-900) px-[.5rem] font-[900] text-(--text-color-action)">
          IN ONE PLACE
        </span>
      </h4>
      <p
        class="w-[23.5625rem] font-(family-name:--font-family-secondary) text-(length:--font-size-md) font-[400] text-(--text-color-body)">
        Use Luzora across various apps and ecosystem. Experience consistency in
        utilizing any web3 product and achieve your goal.
      </p>
    </div>
    <figure
      class="relative mx-auto flex h-[45.5625rem] w-[44.5rem] items-center justify-center">
      <image
        class="absolute top-1/2 left-1/2 z-[1] h-[5.55625rem] w-[5.55625rem] -translate-x-1/2 -translate-y-1/2"
        src="/images/animation-center.png" />
      <image class="rotate-clockwise" src="/images/spin-layer.png" />
    </figure>
    <div class="relative z-[2] flex w-full justify-end">
      <h4
        class="font-(family-name:--font-family-primary) text-(length:--font-size-h4) leading-(--line-height-h4) font-[600] text-(--text-color-headings)">
        Earn HP while at it.
      </h4>
    </div>

    <div
      class="absolute bottom-0 left-1/2 h-[30.1875rem] w-[74rem] -translate-x-1/2 bg-[#FFFFFF03e] backdrop-blur-[4px]" />
  </section>
  <section class="mx-auto max-w-[95rem] py-[7.3125rem]">
    <div class="mx-auto flex w-fit gap-(--numbers-800)">
      <div class="flex min-w-[22.5rem] flex-col gap-(--numbers-1000)">
        <div>
          <h3
            class="font-(family-name:--font-family-primary) text-(length:--font-size-h3) leading-(--line-height-h3) font-[400] tracking-[-.96px] text-black">
            FAQs
          </h3>
          <p
            class="font-(family-name:--font-family-secondary) text-(length:--font-size-lg) leading-(--line-height-lg) font-[500] text-(--text-color-less-emphasis)">
            Your questions answered
          </p>
        </div>
        <div class="flex flex-col gap-[1rem]">
          <p
            class="font-(family-name:--font-family-secondary) text-(length:--font-size-md) leading-(--line-height-md) font-[500] text-(--text-color-less-emphasis)">
            Got more questions? Talk to us
          </p>
          <div class="w-fit">
            <Button
              :icon="{ component: Discord, present: true, position: 'left' }">
              Join our discord
            </Button>
          </div>
        </div>
      </div>
      <div class="flex w-[53.1875rem] flex-col gap-[1.1875rem]">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          :class="`group flex flex-col overflow-hidden rounded-(--numbers-200) transition-all duration-[.4s] ${currentFaq === index ? 'bg-(--yellow-brand)' : 'bg-(--white) text-(--icon-color-primary-disabled) hover:bg-(--yellow-100) hover:text-(--icon-color-neutral-hover)'}`">
          <button
            @click="currentFaq = currentFaq === index ? null : index"
            :class="`flex w-full cursor-pointer items-center justify-between px-(--numbers-600) py-(--numbers-400) font-(family-name:--font-family-primary) text-(length:--font-size-h5) leading-(--line-height-h5) transition-all duration-[.4s]`">
            <span class="text-(--text-color-headings)">
              {{ faq?.question }}
            </span>
            <ArrowDown
              :style="`transform: ${currentFaq === index ? 'rotate(180deg)' : ''}; transition: all .4s`" />
          </button>

          <transition @enter="onEnter" @leave="onLeave">
            <div
              v-show="currentFaq === index"
              class="overflow-hidden px-(--numbers-600) transition-all duration-500 ease-in-out">
              <component :is="faq.component" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rotate-clockwise {
  animation: rotate-anim 20s linear infinite;
}

@keyframes rotate-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
