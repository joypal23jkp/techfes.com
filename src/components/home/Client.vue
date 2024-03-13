<script lang="ts" setup>
import ac from '~/assets/img/logo/ac.png'
import Diu from '~/assets/img/logo/diu.png'
import Merk from '~/assets/img/logo/merk.png'
import Jicson from '~/assets/img/logo/jicson.png'
import Ponnomela from '~/assets/img/logo/ponnomela.png'
import Syngenta from '~/assets/img/logo/syngenta.png'

const section = ref({
  name: 'Our Happy Clients',
  title: `We Work With <br /> Over 30+ Happy Clients`,
  details: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.'
})

const contents = [ ac, Diu, Merk, Jicson, Syngenta, Ponnomela ];
const style = computed<string>(() => {
  return `!w-[200px] flex-center px-3 py-6 bg-white`;
});
</script>
<template>
  <div
    class="container mx-auto flex gap-20 py-[140px] bg-[url(@/assets/img/bg.jpg)] bg-repeat-x bg-contain bg-[position-y: 90%]">
    <div class="grid grid-cols-3 w-1/2 gap-x-14">
      <CommonCard :class-name="style" :class="(index === 1 || index === 4) ? 'mt-[30px]' : 'mb-[30px]'"
        v-for="(content, index) in contents" :key="index">
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
