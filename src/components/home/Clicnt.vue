<script lang="ts" setup>
import { Ref } from "vue";

const section = ref({
  name: 'Our Happy Clients',
  title: `We Work With <br /> Over 30+ Happy Clients`,
  details: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.'
})

const contents = [
  '/_nuxt/assets/img/logo/ac.png',
  '/_nuxt/assets/img/logo/diu.png',
  '/_nuxt/assets/img/logo/jicson.png',
  '/_nuxt/assets/img/logo/merk.png',
  '/_nuxt/assets/img/logo/ponnomela.png',
  '/_nuxt/assets/img/logo/syngenta.png'
];
const style: Ref<string> = computed(() => {
  return `!w-[200px] flex-center px-3 py-6`;
});
</script>
<template>
  <div class="container mx-auto flex gap-20 py-[140px] bg-[url(@/assets/img/bg.jpg)] bg-repeat-x bg-contain bg-[position-y: 90%]">
    <div class="grid grid-cols-3 w-1/2 gap-x-14">
      <CommonCard
          :class-name="style"
          :class="(index === 1 || index === 4) ? 'mt-[30px]': 'mb-[30px]'"
          v-for="(content, index) in contents"
          :key="content.toString()"
      >
        <img :src="content" :alt="content">
      </CommonCard>
    </div>
    <div class="w-1/2">
      <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
      <div class="text-[42px] font-bold py-4" v-html="section.title" />
      <p class="text-base leading-[26px]">{{ section.details }}</p>
    </div>
  </div>
</template>