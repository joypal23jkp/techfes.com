<script lang="ts" setup>
const section = ref({
  name: 'Our Happy Clients',
  title: `We Work With <br /> Over 30+ Happy Clients`,
  details: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.'
})

const contents = [ '/img/logo/ac.png', '/img/logo/diu.png', '/img/logo/jicson.png', '/img/logo/jicson.png', '/img/logo/ponnomela.png', '/img/logo/syngenta.png' ];
const style = computed<string>(() => {
  return `!w-[180px] lg:!w-[200px] flex-center px-3 py-6 bg-white shadow-lg lg:shadow-sm my-2`;
});

</script>
<template>
  <div class="container px-4 mx-auto py-[140px] flex flex-col-reverse lg:flex-row gap-20 bg-[url(@/assets/img/bg.jpg)] bg-repeat-x bg-contain bg-[position-y: 90%]">
    <div class="grid grid-cols-2 md:grid-cols-3 w-full lg:w-1/2 gap-x-2 md:gap-x-14">
      <CommonCard :class-name="style" :class="(index === 1 || index === 4) ? 'md:mt-[30px]' : 'md:mb-[30px]'"
        v-for="(content, index) in contents" :key="index">
        <img :src="content" :alt="content">
      </CommonCard>
    </div>
    <div class="w-full lg:w-1/2 text-center lg:text-left">
      <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
      <div class="text-[42px] font-bold py-4" v-html="section.title" />
      <p class="text-base leading-[26px]">{{ section.details }}</p>
    </div>
  </div>
</template>
