<script lang="ts" setup>
import BtnPrimary from "~/components/common/BtnPrimary.vue";

import One from '~/assets/img/projects/one.svg';
import Two from '~/assets/img/projects/two.png';
import Three from '~/assets/img/projects/three.png';

const section = ref({
  name: "Successful Some Projects",
  title: "Some of our Works",
});

const contents = ref([
  {
    img: One,
    title: "Website Design",
    details:
      "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
  {
    img: Two,
    title: "App Design",
    details:
      "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
  {
    img: Three,
    title: "Branding Design",
    details:
      "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
  {
    img: Three,
    title: "Branding Design",
    details:
      "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
]);
</script>
<template>
  <div class="container mx-auto w-full">
    <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
    <div
      class="py-4 text-[42px] font-bold leading-[40px]"
      v-html="section.title"
    />
    <div
      class="bg-[position-y: 90%] flex gap-8 bg-[url(@/assets/img/bg.jpg)] bg-contain bg-repeat-x"
    >
      <CommonCard
        v-for="content in contents"
        :key="content.toString()"
        class-name="!w-[370px] flex-vertical-center p-4 !bg-white shadow-sm"
      >
        <div>
          <img class="mx-auto" :src="content.img" :alt="content.title" />
          <h2 class="pt-4 text-2xl font-bold leading-[40px]">
            {{ content.title }}
          </h2>
          <p class="py-2 text-base leading-[26px]">{{ content.details }}</p>
          <NuxtLink
            :to="content.link"
            class="flex-vertical-center pt-2 text-base leading-[26px] text-primary-400"
          >
            {{ "Discover More" }}
            <svg
              width="13"
              height="13"
              class="mx-2"
              fill="#3900B4"
              viewBox="0 0 13 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z"
              />
            </svg>
          </NuxtLink>
        </div>
      </CommonCard>
    </div>
    <BtnPrimary
      name="Explore All"
      link="/"
      class-name="!w-[300px] bg-primary-300 text-light border-black rounded mx-auto my-8"
    />
  </div>
</template>
