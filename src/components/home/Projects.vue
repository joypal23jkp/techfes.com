<script lang="ts" setup>
const section = ref({
  name: 'Successful Some Projects',
  title: 'Some of our Works'
})

const contents = ref([
  {
    img: '/_nuxt/assets/img/projects/one.svg',
    title: 'Website Design',
    details: 'Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.',
    link: '/'
  },
  {
    img: '/_nuxt/assets/img/projects/two.png',
    title: 'App Design',
    details: 'Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.',
    link: '/'
  },
  {
    img: '/_nuxt/assets/img/projects/three.png',
    title: 'Branding Design',
    details: 'Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.',
    link: '/'
  },
])
</script>
<template>
<div class="w-full mx-auto container">
  <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
  <div class="text-[42px] font-bold leading-[40px] py-4" v-html="section.title" />
  <div class="flex gap-8">
    <CommonCard
        v-for="content in contents"
        :key="content.toString()"
        class-name="!w-[370px] flex-vertical-center p-4"
    >
      <div>
        <img class="mx-auto" :src="content.img" :alt="content.title">
        <h2 class="text-2xl font-bold leading-[40px] pt-4">{{ content.title }}</h2>
        <p class="text-base leading-[26px] py-2">{{ content.details }}</p>
        <NuxtLink :to="content.link" class="text-base leading-[26px] text-primary-400 flex-vertical-center pt-2">
          {{ 'Discover More' }}
          <svg width="13" height="13" class="mx-2" fill="#3900B4" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
          </svg>
        </NuxtLink>
      </div>
    </CommonCard>
  </div>
</div>
</template>