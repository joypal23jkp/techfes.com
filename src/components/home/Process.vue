<script lang="ts" setup>
import BtnPrimary from "~/components/common/BtnPrimary.vue";

import Discover from '~/assets/img/process/Discover.svg'
import Design from '~/assets/img/process/Design.svg'
import Build from '~/assets/img/process/Build.svg'
import test from '~/assets/img/process/test.svg'
import Deploy from '~/assets/img/process/Deploy.svg'
import Support from '~/assets/img/process/Support.svg'

const section = ref({
  name: 'Work Process',
  title: 'UX UI & Development Process',
  details: 'We’ve Developed an accredited process to ensure your software project runs smothly. Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.'
});

const contents = [
  { title: 'Discover', img: Discover },
  { title: 'Design', img: Design },
  { title: 'Build', img: Build },
  { title: 'Test', img: test },
  { title: 'Deploy', img: Deploy },
  { title: 'Support', img: Support }
]
</script>
<template>
  <div class="w-full bg-primary text-primary-foreground p-[100px] my-[100px]">
    <h5 class="text-base font-semibold text-center">{{ section.name }}</h5>
    <div class="text-[42px] font-bold leading-[40px] py-4 text-center" v-html="section.title" />
    <p class="text-center w-2/3 mx-auto">{{ section.details }}</p>
    <div class="flex my-10 justify-center">
      <div
          v-for="(content, index) in contents" :key="content.toString()"
          class="circle relative -ml-3"
          :class="!(index % 2) ? `rotate-180`: ``"
      >
        <img alt="circle" src="@/assets/img/circle.svg" class="h-[200px] w-[200px]">
        <div
            class="absolute left-0 right-0 mx-auto h-full"
            :class="(index % 2) ? `top-0`: `rotate-180 bottom-0`"
        >
          <img class="mx-auto h-[150px] w-[100px]" :src="content.img" :alt="content.title">
          <h5 class="text-center text-lg font-bold ">{{ content.title }}</h5>
        </div>
      </div>
    </div>
    <BtnPrimary
        name="Explore with work Process"
        link="/"
        class-name="!w-[300px] bg-primary-300 border-[0.5px] border-[#ffffff2b] rounded mx-auto"
    />
  </div>
</template>
