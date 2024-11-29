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
    details: "Since our establishment, we have been delivering high-quality Digital Products Solutions. We’re here because the world keeps speeding up, creating an ever-widening gap between who you are, and who you need to reach We offer the best of both worlds.",
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
  <div class="container w-full py-[100px]">
    <h5 class="text-base font-semibold text-primary-400 text-center">{{ section.name }}</h5>
    <div
        class="py-4 text-[42px] font-bold leading-[40px] text-center"
        v-html="section.title"
    />

    <div class="bg-[position-y: 90%] grid grid-cols-1 gap-14 bg-[url(@/assets/img/bg.jpg)] bg-contain bg-repeat-x md:hidden">
      <CommonCard
          v-for="content in contents"
          :key="content.toString()"
          class-name="w-full md:!max-w-[370px] p-4 !bg-white shadow-sm flex flex-col gap-8"
      >
        <img class="mx-auto" :src="content.img" :alt="content.title" />
        <div>
          <section class="flex-vertical-center gap-2">
            <h2 class="text-2xl font-bold leading-[40px]">
              {{ content.title }}
            </h2>
            <NuxtLink
                :to="content.link"
                class="flex-vertical-center pt-2 text-base leading-[26px] text-primary-400"
            >
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
          </section>
          <p class="py-2 text-base leading-[26px]">{{ content.details }}</p>
        </div>
      </CommonCard>
    </div>

    <div
        class="bg-[position-y: 90%] gap-8 bg-[url(@/assets/img/bg.jpg)] bg-contain bg-repeat-x hidden md:flex flex-col mx-auto"
    >
      <CommonCard
          v-for="(content, index) in contents"
          :key="content.toString()"
          class-name="w-full max-w-[1170px] flex-vertical-center p-4 !bg-white shadow-sm mx-auto"
      >
        <div class="flex gap-8 mx-auto" :class="[ index%2 === 0 ? 'flex-row' : 'flex-row-reverse' ]">
          <img class="mx-auto" :src="content.img" :alt="content.title" />
          <section class="flex flex-col justify-center">
            <h2 class="pt-4 text-2xl font-bold leading-[40px]">
              {{ content.title }}
            </h2>
            <p class="py-2 text-base leading-[26px] w-3/4">{{ content.details }}</p>
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
          </section>
        </div>
      </CommonCard>
    </div>

    <BtnPrimary
        name="Explore All"
        link="/"
        class-name="!w-[300px] bg-primary-300 text-light border-black rounded mx-auto my-10"
    />
  </div>
</template>
