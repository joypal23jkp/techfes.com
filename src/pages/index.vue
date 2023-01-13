<script setup lang="ts">

import Testimonials from "~/components/home/Testimonials.vue";
import Footer from "~/components/common/Footer.vue";

useHead({
  title: 'TechFes | Home Page'
})
</script>
<template>
  <div>
    <CommonHeader />
    <HomeHero />
    <HomeService />
    <HomeProjects />
    <HomeProcess />
    <HomeClicnt />
    <Testimonials />
    <HomeStrategy />
    <Footer />
  </div>
</template>
