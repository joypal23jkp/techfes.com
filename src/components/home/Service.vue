<script lang="ts" setup>
import Four from '~/assets/img/four.png';
import One from '~/assets/img/one.png';
import Two from '~/assets/img/two.png';
import Three from '~/assets/img/three.png';

const section = ref({
  name: 'Our Services',
  title: `Provide <span class="text-primary-200">Solutions</span>`,
  details: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.'
});

const services = ref([
  {
    icon: Four,
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/'
  },
  {
    icon: One,
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
]);

</script>
<template>
  <div class="container mx-auto grid grid-cols-3 gap-6 py-[100px] bg-[url(@/assets/img/bg.jpg)]">
    <CommonCard class-name="!w-[370px] flex-vertical-center">
      <div>
        <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
        <div class="text-[42px] font-bold leading-[40px] py-4" v-html="section.title" />
        <p class="text-base leading-[26px]">{{ section.details }}</p>
      </div>
    </CommonCard>
    <CommonCard
        v-for="service in services"
        :key="service.toString()"
        class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
    >
      <div>
        <img class="mx-auto" :src="service.icon" :alt="service.title">
        <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">{{ service.title }}</h2>
        <p class="text-base leading-[26px] text-center py-4">{{ section.details }}</p>
        <NuxtLink :to="section.link" class="text-base leading-[26px] text-primary-400 flex-center p-2">
          {{ 'Discover More' }}
          <svg width="13" height="13" class="mx-2 text-primary-400" fill="#3900B4" viewBox="0 0 13 14"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
          </svg>
        </NuxtLink>
      </div>
    </CommonCard>
    <CommonCard class-name="!w-full bg-[url('~/assets/img/background.svg')]" class="bg-cover bg-center bg-no-repeat text-primary-foreground">
      <div class="px-[32px] py-[52px] text-light">
        <div class="text-[46px] font-bold leading-[40px] ">0+</div>
        <div class="text-[36px] font-medium leading-[40px] py-6">See More</div>
        <NuxtLink class="w-10 h-10 flex-center bg-[#000] rounded-full" to="/service">
          <svg width="13" height="13" class="mx-2 text-primary-400" fill="white" viewBox="0 0 13 14"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
          </svg>
        </NuxtLink>
      </div>
    </CommonCard>
  </div>
</template>
