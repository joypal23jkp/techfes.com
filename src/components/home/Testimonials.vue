<script lang="ts" setup>
const section = ref({
  name: 'Testimonials',
  title: `We Care About Our <br /> Customers Experience`,
  details: `Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.`,
  clientCount: 30,
  projectCount: 32
})

const contents = [
  {
    name: 'Al Mustakin',
    designation: 'Staff Engineer, Algolia',
    img: '/_nuxt/assets/img/avaters/avater.png',
    comment: `“Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”`
  },
  {
    name: 'Al Mustakin',
    designation: 'Staff Engineer, Algolia',
    img: '/_nuxt/assets/img/avaters/avater.png',
    comment: `“Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”`
  },
  {
    name: 'Al Mustakin',
    designation: 'Staff Engineer, Algolia',
    img: '/_nuxt/assets/img/avaters/avater.png',
    comment: `“Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”`
  },
  {
    name: 'Al Mustakin',
    designation: 'Staff Engineer, Algolia',
    img: '/_nuxt/assets/img/avaters/avater.png',
    comment: `“Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”`
  },
  {
    name: 'Al Mustakin',
    designation: 'Staff Engineer, Algolia',
    img: '/_nuxt/assets/img/avaters/avater.png',
    comment: `“Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”`
  },
]

const selectedContentIndex = ref(0);
</script>
<template>
<div class="container mx-auto py-[100px] flex flex-center ">
  <div class="bg-[url(@/assets/img/bg.jpg)] bg-repeat-x bg-contain bg-[position-y: 90%] flex">
    <div class="w-1/2">
    <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
    <div class="text-[42px] font-bold py-4" v-html="section.title" />
    <p class="text-base leading-[26px]">{{ section.details }}</p>
    <div class="flex w-full pt-8">
      <div class="w-1/2">
        <h2 class="text-4xl font-bold text-primary-400">{{ section.clientCount }}+</h2>
        Our Happy Clients
      </div>
      <div class="w-1/2">
        <h2 class="text-4xl font-bold text-primary-400">{{ section.projectCount }}+</h2>
        Completed Projects
      </div>
    </div>
  </div>
  <div class="px-8 relative">
    <CommonCard
        class-name="!w-[570px] h-[500px] flex flex-center border-l border-b"
    >
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
            class="w-24 h-24 rounded-full mx-auto"
            :src="contents[selectedContentIndex].img"
            :alt="contents[selectedContentIndex].name"
            width="100"
            height="101"
        />
        <figcaption class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg">{{ contents[selectedContentIndex].comment }}</p>
          </blockquote>
          <div>
            <div class="text-sky-500 font-bold text-2xl dark:text-sky-400">{{ contents[selectedContentIndex].name }}</div>
            <div class="text-slate-700 dark:text-slate-500">{{ contents[selectedContentIndex].designation }}</div>
          </div>
        </figcaption>
      </figure>
    </CommonCard>
    <NuxtLink :to="section.link" class="w-[180px] float-right text-base leading-[26px] text-primary-400 flex-center p-2 my-4">
      {{ 'See More' }}
      <svg width="13" height="13" class="mx-2 text-primary-400" fill="#3900B4" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
      </svg>
    </NuxtLink>
    <svg class="absolute top-[56px] left-0" width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.766113" width="70" height="70" rx="12" fill="#3A02B3"/>
      <path d="M24.7459 32.9264C24.3279 32.9264 23.9267 32.9902 23.5275 33.0483C23.6568 32.6134 23.7899 32.171 24.0036 31.7736C24.2173 31.1963 24.5509 30.6958 24.8827 30.1916C25.1601 29.6461 25.6494 29.2768 26.0093 28.8101C26.386 28.3565 26.8996 28.0547 27.3064 27.6779C27.7057 27.2843 28.2286 27.0875 28.6448 26.81C29.0796 26.5607 29.4583 26.2852 29.8632 26.154L30.8735 25.7378L31.762 25.3686L30.8529 21.7358L29.7338 22.0058C29.3758 22.0957 28.9391 22.2007 28.4423 22.3263C27.9343 22.42 27.3926 22.6768 26.789 22.9111C26.193 23.1773 25.5031 23.3573 24.8621 23.7846C24.2173 24.1933 23.4731 24.5344 22.817 25.0818C22.1816 25.646 21.4149 26.1352 20.8488 26.8532C20.2303 27.5242 19.6192 28.229 19.1449 29.0313C18.5957 29.7961 18.2227 30.6358 17.8291 31.4662C17.4729 32.2966 17.1861 33.1458 16.9518 33.9705C16.5075 35.6238 16.3089 37.1946 16.232 38.5386C16.1683 39.8845 16.2058 41.0036 16.2845 41.8133C16.3126 42.1957 16.3651 42.5669 16.4026 42.8237L16.4494 43.1386L16.4982 43.1273C16.8316 44.6847 17.5991 46.1159 18.7119 47.2553C19.8247 48.3947 21.2373 49.1957 22.7864 49.5658C24.3354 49.9359 25.9576 49.8599 27.4653 49.3465C28.9729 48.8332 30.3044 47.9035 31.3058 46.665C32.3071 45.4265 32.9374 43.9298 33.1237 42.3481C33.3099 40.7664 33.0446 39.1642 32.3583 37.727C31.6721 36.2898 30.593 35.0762 29.2458 34.2267C27.8987 33.3771 26.3385 32.9263 24.7459 32.9264ZM45.3651 32.9264C44.9471 32.9264 44.5459 32.9902 44.1467 33.0483C44.276 32.6134 44.4091 32.171 44.6228 31.7736C44.8365 31.1963 45.1701 30.6958 45.5019 30.1916C45.7793 29.6461 46.2686 29.2768 46.6285 28.8101C47.0052 28.3565 47.5188 28.0547 47.9256 27.6779C48.3249 27.2843 48.8478 27.0875 49.264 26.81C49.6989 26.5607 50.0775 26.2852 50.4824 26.154L51.4927 25.7378L52.3812 25.3686L51.4721 21.7358L50.353 22.0058C49.995 22.0957 49.5583 22.2007 49.0615 22.3263C48.5536 22.42 48.0118 22.6768 47.4082 22.9111C46.814 23.1792 46.1224 23.3573 45.4813 23.7865C44.8365 24.1951 44.0923 24.5363 43.4362 25.0836C42.8008 25.6479 42.0341 26.1371 41.468 26.8532C40.8495 27.5242 40.2384 28.229 39.7641 29.0313C39.2149 29.7961 38.8419 30.6358 38.4483 31.4662C38.0921 32.2966 37.8053 33.1458 37.571 33.9705C37.1268 35.6238 36.9281 37.1946 36.8512 38.5386C36.7875 39.8845 36.825 41.0036 36.9037 41.8133C36.9318 42.1957 36.9843 42.5669 37.0218 42.8237L37.0687 43.1386L37.1174 43.1273C37.4508 44.6847 38.2183 46.1159 39.3311 47.2553C40.4439 48.3947 41.8565 49.1957 43.4056 49.5658C44.9546 49.9359 46.5768 49.8599 48.0845 49.3465C49.5921 48.8332 50.9236 47.9035 51.925 46.665C52.9263 45.4265 53.5566 43.9298 53.7429 42.3481C53.9291 40.7664 53.6638 39.1642 52.9776 37.727C52.2913 36.2898 51.2122 35.0762 49.865 34.2267C48.5179 33.3771 46.9577 32.9263 45.3651 32.9264Z" fill="white"/>
    </svg>
  </div>
  <div class="w-[10%] flex justify-end">
    <ul class="mt-10">
      <li v-for="(item, index) in contents" :key="item.toString()" class="mt-4">
        <img
            class="rounded-full mx-auto"
            :class="index === selectedContentIndex ? 'border-2 border-primary-400': ''"
            :src="item.img"
            :alt="item.name"
            :width="(80 - (index * 10))"
            :height="(80 - (index * 10))"
        >
      </li>
    </ul>
  </div>
  </div>
</div>
</template>