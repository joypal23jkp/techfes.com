<script setup lang="ts">
import HeroSection from "~/components/common/HeroSection.vue";
import { onMounted } from 'vue';

useHead({
  title: 'TechFes | Home Page'
});

// Import animations CSS
const nuxtApp = useNuxtApp();
if (import.meta.client) {
  import('@/assets/css/animations.css');
}

const section = ref({
  name: 'Good Design',
  title: `We Design <span class="text-primary-200">Applications</span> That are`,
  details: 'We have Developed an accredited preocess to ensure your software project runs smoothly. Our establishment, we have been delivering high-quality & purposes of worldwide businesses.'
})

const services = ref([
  {
    icon: '/img/two.png',
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'float-animation'
  },
  {
    icon: '/img/three.png',
    title: 'App Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'pulse-on-hover'
  },
  {
    icon: '/img/four.png',
    title: 'UX/UI Design',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'rotate-animation'
  },
  {
    icon: '/img/two.png',
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'float-animation'
  },
  {
    icon: '/img/three.png',
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'pulse-on-hover'
  },
  {
    icon: '/img/four.png',
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'rotate-animation'
  },
]);

const goodDesigns = ref([
  {
    icon: '/img/two.png',
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    animationClass: 'float-animation'
  },
  {
    icon: '/img/three.png',
    title: 'App Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    animationClass: 'pulse-on-hover'
  },
  {
    icon: '/img/four.png',
    title: 'UX/UI Design',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    animationClass: 'rotate-animation'
  },
  {
    icon: '/img/one.png',
    title: 'Backend Development',
    details: 'We make applications efficient, task-focused and mission-driven so that users can achieve their tasks with minimal time and effort.',
    animationClass: 'float-animation'
  }
]);

onMounted(() => {
  if (typeof document !== 'undefined') {
    // Add GSAP animations if needed
  }
});
</script>
<template>
  <div>
    <HeroSection
        hero-title="Provide Solutions"
        description="Since our establishment, we have been delivering high-quality and sustainable
        software solutions worldwide businesses Digital Brands Products Solutions."
    />

    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[100px] bg-[url(@/assets/img/bg.jpg)]">
      <CommonCard
          v-for="service in services"
          :key="service.toString()"
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white service-card"
      >
        <div>
          <div class="relative mx-auto w-24 h-24 mb-4 service-icon">
            <img 
              class="mx-auto w-16 h-16 object-contain" 
              :src="service.icon" 
              :alt="service.title"
              :class="service.animationClass"
            >
          </div>
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">{{ service.title }}</h2>
          <p class="text-base leading-[26px] text-center py-4">{{ service.details }}</p>
          <NuxtLink :to="service.link" class="discover-link text-base leading-[26px] text-primary-400 flex-center p-2 mx-auto w-fit">
            {{ 'Discover More' }}
            <svg width="13" height="13" class="ml-2 text-primary-400" fill="#3900B4" viewBox="0 0 13 14"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
            </svg>
          </NuxtLink>
        </div>
      </CommonCard>
    </div>

    <div class="w-full pt-100 lg:p-[100px] lg:mb-[150px]">
      <h5 class="text-base font-semibold text-center">{{ section.name }}</h5>
      <div class="text-[42px] font-bold leading-[40px] py-4 text-center" v-html="section.title" />
      <p class="text-center mx-4 lg:w-1/2 lg:mx-auto">{{ section.details }}</p>

      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-[100px] bg-[url(@/assets/img/bg.jpg)]">
        <CommonCard
            v-for="design in goodDesigns"
            :key="design.toString()"
            class-name="!w-full flex-vertical-center py-14 px-7 !bg-white service-card"
        >
          <div>
            <div class="relative mx-auto w-24 h-24 mb-4 service-icon">
              <img 
                class="mx-auto w-16 h-16 object-contain rounded-full" 
                :src="design.icon" 
                :alt="design.title"
                :class="design.animationClass"
              >
            </div>
            <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">{{ design.title }}</h2>
            <p class="text-base leading-[26px] text-center py-4">{{ design.details }}</p>
          </div>
        </CommonCard>
      </div>
    </div>
  </div>
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

/* Custom service icon styles */
.service-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(57, 0, 180, 0.03);
  border-radius: 12px;
}

.service-icon img {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.service-icon img.float-animation {
  animation: floatIcon 5s infinite ease-in-out;
}

.service-icon img.pulse-on-hover:hover {
  animation: pulseIcon 2s infinite;
}

.service-icon img.rotate-animation:hover {
  animation: rotateIcon 3s infinite ease-in-out;
}

@keyframes floatIcon {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes pulseIcon {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes rotateIcon {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}
</style>
