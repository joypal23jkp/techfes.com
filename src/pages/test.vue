<template>
  <div style="height: 100vh">
    <!-- Slider main container -->
    <Swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="pagination"
        :modules="[Pagination]"
        class="mySwiper"
    >
      <swiper-slide v-for="content in contents" :key="content.name">
        <CommonCard class="text-center flex flex-col gap-4 w-[90%] bg-white shadow px-4 py-8 border">
          <img :src="content.img" :alt="content.name" class="mx-auto">
          <blockquote>{{ content.comment }}</blockquote>
          <h1 class="font-bold text-lg">{{ content.name }}</h1>
          <h5 class="font-medium">{{ content.designation }}</h5>
        </CommonCard>
      </swiper-slide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';


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

const pagination = ref({
  clickable: true,
  renderBullet: (index: number, className: string) => {
    console.log(className, "ClassName")
    return `<span class="${className}"><img src='${contents[index].img}' alt='${contents[index].name}' style="width: ${50 - (5 * index)}px"/></span>`;
  }
})
</script>
<style>
.swiper {
  width: 600px;
  height: 300px;
  position: relative;
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  width: 60px !important;
  float: revert;
  position: absolute;
  left: calc(100% - 54px) !important;
  bottom: 20px !important;
}

.swiper-pagination img {
  width: 50px;
  border: 1px solid transparent;
  border-radius: 50px;
}

.swiper-pagination-bullet {
  width: fit-content;
  height: fit-content;
  opacity: 0.7;
  background-color: red;
}

.swiper-pagination-bullet-active {
 background-color: black;
  border: 1px solid transparent;
}
</style>