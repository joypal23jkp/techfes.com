<script setup lang="ts">
useHead({
  title: 'TechFes | Home Page'
});

useSmoothScroll();

</script>
<template>
  <HomeHero class="px-4 lg:px-6" />
  <HomeService />
  <HomeProjects />
<!--  <HomeProcess />-->
  <HomeClient />
  <HomeTestimonials />
  <HomeStrategy class="mb-[500px]" />
</template>

<style lang="css">
.color-meteorite {
  background: radial-gradient(blue, white);
  border-radius: 50%;
  font-size: 500px;
  height: 1em;
  width: 1em;
  filter: blur(100px);
}
</style>
