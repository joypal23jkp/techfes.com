<script lang="ts" setup>
  import BtnPrimary from "~/components/common/BtnPrimary.vue";

  const content = ref({
    title: `We Create <span class="text-primary-200">Impactful</span> <br /> World Class Digital Brands Products Solutions`,
    description: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.',
    button: {
      name: "Let's Talk",
      link: '/about'
    }
  });
</script>
<template>
  <div class="bg-[url(@/assets/img/background.jpg)] bg-cover bg-center">
    <div class="w-full h-[750px] flex-vertical-center container mx-auto text-primary">
      <div class="w-6/12">
        <h1 class="text-[44px] leading-[64px] font-bold" v-html="content.title" />
        <p class="leading-[24px] pt-8 pb-10">{{ content.description }}</p>
        <BtnPrimary name="Let's Talk" link="/" />
      </div>
      <div class="w-1/2 flex justify-end">
        <img src="@/assets/img/hero_illustrator.svg" alt="hero illustrator">
      </div>
    </div>
  </div>
</template>