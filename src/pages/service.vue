<script setup lang="ts">
import HeroSection from "~/components/common/HeroSection.vue";

import Two from '~/assets/img/two.png';
import Three from '~/assets/img/three.png';
import Four from '~/assets/img/four.png';

useHead({
  title: 'TechFes | Home Page'
});

const section = ref({
  name: 'Good Design',
  title: `We Design <span class="text-primary-200">Applications</span> That are`,
  details: 'We’ve Developed an accredited preocess to ensure your software project runs smoothly. Our establishment, we have been delivering high-quality & purposes of worldwide businesses.'
})

const services = ref([
  {
    icon: Four,
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: Two,
    title: 'App Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: Two,
    title: 'UX/UI Design',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: Three,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: Three,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: Three,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
]);

const goodDesigns = ref([
  {
    icon: Four,
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
  },
  {
    icon: Two,
    title: 'App Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
  },
  {
    icon: Two,
    title: 'UX/UI Design',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
  },
  {
    icon: Three,
    title: 'Backend Development',
    details: 'We make applications efficient, task-focused and mission-driven so that users can achieve their tasks with minimal time and effort.',
  }
]);

</script>
<template>
  <div>
    <HeroSection
        hero-title="Provide Solutions"
        description="Since our establishment, we have been delivering high-quality and sustainable software solutions worldwide businesses Digital Brands Products Solutions."
    />

    <div class="container mx-auto grid grid-cols-3 gap-6 py-[100px] bg-[url(@/assets/img/bg.jpg)]">
      <CommonCard
          v-for="service in services"
          :key="service.toString()"
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
      >
        <div>
          <img class="mx-auto rounded" :src="service.icon" :alt="service.title">
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">{{ service.title }}</h2>
          <p class="text-base leading-[26px] text-center py-4">{{ service.details }}</p>
          <NuxtLink :to="service.link" class="text-base leading-[26px] text-primary-400 flex-center p-2">
            {{ 'Discover More' }}
            <svg width="13" height="13" class="mx-2 text-primary-400" fill="#3900B4" viewBox="0 0 13 14"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
            </svg>
          </NuxtLink>
        </div>
      </CommonCard>
    </div>

    <div class="w-full p-[100px] mb-[150px]">
      <h5 class="text-base font-semibold text-center">{{ section.name }}</h5>
      <div class="text-[42px] font-bold leading-[40px] py-4 text-center" v-html="section.title" />
      <p class="text-center w-1/2 mx-auto">{{ section.details }}</p>
      <div class="container mx-auto flex gap-10 py-[100px] bg-[url(@/assets/img/bg.jpg)]">
        <CommonCard
            v-for="design in goodDesigns"
            :key="design.toString()"
            class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
        >
          <div>
            <img class="mx-auto rounded-full" :src="design.icon" :alt="design.title">
            <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">{{ design.title }}</h2>
            <p class="text-base leading-[26px] text-center py-4">{{ design.details }}</p>
          </div>
        </CommonCard>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.color-meteorite {
  background: radial-gradient(blue, white);
  border-radius: 50%;
  font-size: 500px;
  height: 1em;
  width: 1em;
  filter: blur(100px);
}
</style>
