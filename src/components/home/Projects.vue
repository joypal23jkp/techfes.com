<script lang="ts" setup>
import BtnPrimary from "~/components/common/BtnPrimary.vue";
import { onMounted } from 'vue';

// Import animations CSS
if (process.client) {
  import('@/assets/css/animations.css');
}

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
    details: "Since our establishment, we have been delivering high-quality Digital Products Solutions. We're here because the world keeps speeding up, creating an ever-widening gap between who you are, and who you need to reach We offer the best of both worlds.",
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

// Reference to project cards for animations
const mobileCards = ref([]);
const desktopCards = ref([]);
const exploreBtn = ref(null);
const { $gsap } = useNuxtApp();

// Initialize animations after component mounts
onMounted(() => {
  initAnimations();
  
  // Setup scroll trigger animations if ScrollTrigger is available
  if ($gsap && $gsap.ScrollTrigger) {
    setupScrollAnimations();
  }
});

// Initialize animations for the component
const initAnimations = () => {
  // Animate the title with a stagger effect
  $gsap.from('.projects-title', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // Initial animation for mobile cards
  $gsap.from(mobileCards.value, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: 'back.out(1.7)',
    delay: 0.3
  });
  
  // Initial animation for desktop cards
  $gsap.from(desktopCards.value, {
    opacity: 0,
    x: (index) => index % 2 === 0 ? -50 : 50,
    stagger: 0.3,
    duration: 1,
    ease: 'power3.out',
    delay: 0.3
  });
  
  // Animate the explore button
  $gsap.from(exploreBtn.value, {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay: 1
  });
};

// Setup scroll-based animations
const setupScrollAnimations = () => {
  // Create hover effects for cards
  mobileCards.value.forEach((card) => {
    $gsap.to(card, {
      y: -10,
      boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
      ease: 'power2.out',
      duration: 0.3,
      paused: true
    }).reverse();
    
    card.addEventListener('mouseenter', () => $gsap.getTweensOf(card)[0].play());
    card.addEventListener('mouseleave', () => $gsap.getTweensOf(card)[0].reverse());
  });
  
  desktopCards.value.forEach((card) => {
    $gsap.to(card, {
      y: -15,
      boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
      ease: 'power2.out',
      duration: 0.3,
      paused: true
    }).reverse();
    
    card.addEventListener('mouseenter', () => $gsap.getTweensOf(card)[0].play());
    card.addEventListener('mouseleave', () => $gsap.getTweensOf(card)[0].reverse());
  });
  
  // Animated floating effect for project images
  const projectImages = document.querySelectorAll('.project-img');
  projectImages.forEach((img) => {
    $gsap.to(img, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
};
</script>
<template>
  <div class="container w-full py-[100px]">
    <h5 class="text-base font-semibold text-primary-400 text-center projects-title">{{ section.name }}</h5>
    <div
        class="py-4 text-[42px] font-bold leading-[40px] text-center projects-title"
        v-html="section.title"
    />

    <div class="bg-[position-y: 90%] grid grid-cols-1 gap-14 bg-[url(@/assets/img/bg.jpg)] bg-contain bg-repeat-x md:hidden">
      <CommonCard
          v-for="(content, index) in contents"
          :key="content.toString()"
          :ref="el => { if (el) mobileCards[index] = el.$el }"
          class-name="w-full md:!max-w-[370px] p-4 !bg-white shadow-sm flex flex-col gap-8 project-card service-card"
      >
        <div class="relative overflow-hidden rounded icon-shine mx-auto">
          <img class="mx-auto project-img" :src="content.img" :alt="content.title" />
        </div>
        <div>
          <section class="flex-vertical-center gap-2">
            <h2 class="text-2xl font-bold leading-[40px]">
              {{ content.title }}
            </h2>
            <NuxtLink
                :to="content.link"
                class="discover-link text-primary-400 project-link"
            >
              {{ "Discover More" }}
              <svg
                  width="13"
                  height="13"
                  class="ml-2"
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
          :ref="el => { if (el) desktopCards[index] = el.$el }"
          class-name="w-full max-w-[1170px] flex-vertical-center p-4 !bg-white shadow-sm mx-auto project-card service-card"
      >
        <div class="flex gap-8 mx-auto" :class="[ index%2 === 0 ? 'flex-row' : 'flex-row-reverse' ]">
          <div class="relative overflow-hidden rounded icon-shine">
            <img class="mx-auto project-img" :src="content.img" :alt="content.title" />
          </div>
          <section class="flex flex-col justify-center">
            <h2 class="pt-4 text-2xl font-bold leading-[40px]">
              {{ content.title }}
            </h2>
            <p class="py-2 text-base leading-[26px] w-3/4">{{ content.details }}</p>
            <NuxtLink
                :to="content.link"
                class="discover-link text-primary-400 project-link"
            >
              {{ "Discover More" }}
              <svg
                  width="13"
                  height="13"
                  class="ml-2"
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
        ref="exploreBtn"
        name="Explore All"
        link="/work"
        class-name="!w-[300px] bg-primary-300 text-light border-black rounded mx-auto my-10 explore-btn pulse-on-hover"
    />
  </div>
</template>

<style scoped>
.project-link {
  width: fit-content;
  display: inline-flex;
  align-items: center;
}

.project-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
              box-shadow 0.3s ease;
  will-change: transform, box-shadow;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(57, 0, 180, 0.1);
}

.explore-btn {
  position: relative;
  overflow: hidden;
}

.explore-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(255,255,255,0) 0%, 
    rgba(255,255,255,0.3) 50%, 
    rgba(255,255,255,0) 100%);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  20%, 100% {
    left: 100%;
  }
}

.project-img {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  transform-origin: center;
  max-width: 100%;
  height: auto;
}

.project-card:hover .project-img {
  transform: scale(1.05) rotate(2deg);
}
</style>
