<script setup lang="ts">
import BtnPrimary from "~/components/common/BtnPrimary.vue";
import HeroSection from "~/components/common/HeroSection.vue";

const section = ref({
  name: "Successful Some Projects",
  title: "Some of our Works",
});

const services = ref([
  {
    icon: `/_nuxt/assets/img/four.png`,
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: `/_nuxt/assets/img/one.png`,
    title: 'App Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: `/_nuxt/assets/img/two.png`,
    title: 'UX/UI Design',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: `/_nuxt/assets/img/three.png`,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: `/_nuxt/assets/img/three.png`,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: `/_nuxt/assets/img/three.png`,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
]);
</script>
<template>
  <HeroSection
      hero-title="Our Process"
      description="Since our establishment, we have been delivering high-quality and sustainable software solutions worldwide businesses Digital Brands Products Solutions."
  />

  <section class="steps container mx-auto py-[100px] relative">
    <div class="bg-transparent w-[100px] h-[100px] border-primary border-b border-r rounded-br-[7rem] absolute top-0 left-1/2 -translate-x-0"/>
    <CommonCard
        v-for="(service, i) in services"
        :key="service.toString()"
        class-name="!w-full flex-vertical-center py-14 px-7 !bg-white relative"
    >
      <div class="w-1/2 absolute bg-primary"></div>
      <div :class="['flex mx-auto items-center', { 'flex-row-reverse': i%2 === 0 }]">
        <ProcessStep01 class="w-1/2 items-center" />
        <div class="mx-[30px] w-1/2">
          <div class="text-primary font-bold text-sm"> Step - {{ i }} </div>
          <h2 class="text-2xl font-bold leading-[40px] py-1">{{ service.title }}</h2>
          <p class="text-base w-2/3 leading-[26px] font-light">{{ service.details }}</p>
          <ol class="!list-disc list-inside py-2">
            <li>Stakeholder Interview</li>
            <li>User Research</li>
            <li>Competitor Analysis</li>
            <li>Observation</li>
          </ol>
        </div>
      </div>
      <div
          class="bg-transparent w-1/2 h-[100%] absolute border-primary border border-y"
          :class="[i%2 === 0 ? 'left-0 rounded-l-[7rem] border-r-0': 'right-0 rounded-r-[7rem] border-l-0']"
      />
    </CommonCard>
    <div class="bg-transparent w-[100px] h-[100px] border-primary border-t border-l rounded-tl-[7rem] absolute bottom-0 right-1/2 -translate-x-0"/>
  </section>

  <CommonBtnPrimary
      name="Get In Touch"
      link="/"
      class-name="!w-[200px] rounded mx-auto mt-[48px] mb-[140px] bg-primary"
  />
</template>
