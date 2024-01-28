<script setup lang="ts">
import BtnPrimary from "~/components/common/BtnPrimary.vue";
import HeroSection from "~/components/common/HeroSection.vue";

const section = ref({
  name: "Successful Some Projects",
  title: "Some of our Works",
});

const contents = ref([
  {
    img: "/_nuxt/assets/img/projects/one.svg",
    title: "Website Design",
    details:
        "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
  {
    img: "/_nuxt/assets/img/projects/two.png",
    title: "App Design",
    details:
        "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
  {
    img: "/_nuxt/assets/img/projects/three.png",
    title: "Branding Design",
    details:
        "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
  {
    img: "/_nuxt/assets/img/projects/three.png",
    title: "Branding Design",
    details:
        "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    link: "/",
  },
]);
</script>
<template>
  <HeroSection
      hero-title="Our Works"
      description="Since our establishment, we have been delivering high-quality and sustainable software solutions worldwide businesses Digital Brands Products Solutions."
  />
  <div class="container mx-auto w-full my-[100px] pb-[150px]">
    <div class="bg-[position-y: 90%] gap-8 bg-[url(@/assets/img/bg.jpg)] bg-contain bg-repeat-x">
      <CommonCard
          v-for="(content, i) in contents"
          :key="content.toString()"
          class-name="my-[24px] p-[24px] bg-white"
      >
        <div :class="['flex', 'items-center', 'gap-[30px]', { 'flex-row-reverse': i%2 === 0 }]">
          <img :src="content.img" :alt="content.title" class="h-[410px] w-[546px]" />
          <section class="card-body">
            <h2 class="pt-4 text-[2rem] font-bold leading-[40px]">
              {{ content.title }}
            </h2>
            <p class="py-2 text-base leading-[26px] w-2/3">{{ content.details }}</p>
          </section>
        </div>
      </CommonCard>
    </div>
    <CommonBtnPrimary
        name="Get In Touch"
        link="/"
        class-name="!w-[200px] rounded mx-auto mt-[48px] mb-[140px] bg-primary"
    />
  </div>
</template>
