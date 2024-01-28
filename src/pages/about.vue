opn
<script setup lang="ts">
import HeroSection from "~/components/common/HeroSection.vue";

useHead({
  title: "TechFes | About Page",
});


</script>
<template>
  <HeroSection
      hero-title="About Us"
      description="Since our establishment, we have been delivering high-quality and sustainable software solutions worldwide businesses Digital Brands Products Solutions."
  />

  <section class="flex mt-[100px] pb-[400px] container gap-8 bg-[url(@/assets/img/bg.jpg)]">
    <div class="card-section grid grid-cols-2 gap-8">
      <CommonCard
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
      >
        <div>
          <CommonSvgApostrophe fill="#184174" class="rounded-full border-2 mx-auto" :height="50" :width="50" />
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">Creative Ideas</h2>
          <p class="text-base leading-[26px] text-center py-4">Since our establishment, we have been delivering high-quality software solutions.</p>
        </div>
      </CommonCard>
      <CommonCard
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
      >
        <div>
          <CommonSvgApostrophe fill="#184174" class="rounded-full border-2 mx-auto" :height="50" :width="50" />
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">Creative Ideas</h2>
          <p class="text-base leading-[26px] text-center py-4">Since our establishment, we have been delivering high-quality software solutions.</p>
        </div>
      </CommonCard>
      <CommonCard
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
      >
        <div>
          <CommonSvgApostrophe fill="#184174" class="rounded-full border-2 mx-auto" :height="50" :width="50" />
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">Creative Ideas</h2>
          <p class="text-base leading-[26px] text-center py-4">Since our establishment, we have been delivering high-quality software solutions.</p>
        </div>
      </CommonCard>
      <CommonCard
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white"
      >
        <div>
          <CommonSvgApostrophe fill="#184174" class="rounded-full border-2 mx-auto" :height="50" :width="50" />
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">Creative Ideas</h2>
          <p class="text-base leading-[26px] text-center py-4">Since our establishment, we have been delivering high-quality software solutions.</p>
        </div>
      </CommonCard>
    </div>
    <div class="flex-vertical-center">
      <div class="mx-[30px] w-3/4 flex flex-col gap-3">
        <div class="text-primary font-bold text-sm"> Why Choose Us </div>
        <h2 class="text-3xl font-bold leading-[40px] py-1">Exceptional Solution for Digital Product Develop</h2>
        <p class="text-base w-2/3 leading-[26px] font-light">Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes.</p>
        <ol class="!list-disc list-inside py-2">
          <li>UX UI Design 90%</li>
          <li>Branding Design 80%</li>
          <li>Social Media Design 90%</li>
          <li>Android & iOS App Development 95%</li>
          <li>Web Development 95%</li>
        </ol>
        <CommonBtnPrimary
            name="Get In Touch"
            link="/"
            class-name="!w-[200px] bg-primary"
        />
      </div>
    </div>
  </section>


</template>
