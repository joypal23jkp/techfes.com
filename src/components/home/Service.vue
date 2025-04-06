<script lang="ts" setup>
import Four from '~/assets/img/four.png';
import One from '~/assets/img/one.png';
import Two from '~/assets/img/two.png';
import Three from '~/assets/img/three.png';
import { onMounted } from 'vue';

// Import animations CSS
if (process.client) {
  import('@/assets/css/animations.css');
}

const section = ref({
  name: 'Our Services',
  link: '/',
  title: `Provide <span class="text-primary-200">Solutions</span>`,
  details: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.'
});

const services = ref([
  {
    icon: Four,
    title: 'Web Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'float-animation'
  },
  {
    icon: One,
    title: 'App Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'pulse-on-hover'
  },
  {
    icon: Two,
    title: 'UX/UI Design',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'rotate-animation'
  },
  {
    icon: Three,
    title: 'Backend Development',
    details: 'Since our establishment, we have been delivering high-quality software solutions of worldwide businesses.',
    link: '/',
    animationClass: 'float-animation'
  },
]);

const computedService = computed(() => {
  return {
    rendered: services.value.slice(0, 4),
    hidden: services.value.slice(4, services.value.length)
  }
});

// Ref for SVG animation
const bgSvgRef = ref(null);
const { $gsap } = useNuxtApp();

// Remove all the magnetic effect code
const linkRefs = ref([]);
const isHovering = ref(false);

// Keep only the see more effect
const seeMoreRef = ref(null);

const handleSeeMoreMouseMove = (e) => {
  if (!seeMoreRef.value) return;
  
  const link = seeMoreRef.value;
  const rect = link.getBoundingClientRect();
  
  // Calculate distance from center as percentage
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Use percentage of distance to determine rotation
  const distanceX = e.clientX - centerX;
  const distanceY = e.clientY - centerY;
  
  // Apply subtle rotation based on mouse position
  link.style.transform = `rotate(${distanceX / 50}deg)`;
};

const handleSeeMoreMouseLeave = () => {
  if (!seeMoreRef.value) return;
  seeMoreRef.value.style.transform = 'rotate(0deg)';
};

// Initialize SVG animations after component mounts
onMounted(() => {
  setTimeout(() => {
    initBackgroundSvgAnimation();
  }, 300);
});

// Animate the background SVG elements
const initBackgroundSvgAnimation = () => {
  if (!bgSvgRef.value) return;
  
  const svgDoc = bgSvgRef.value;
  
  // Animate the wavy paths (the two curved lines at the bottom)
  const wavyPaths = svgDoc.querySelectorAll('path[opacity="0.4"]');
  if (wavyPaths.length) {
    $gsap.to(wavyPaths, {
      strokeDashoffset: 0,
      strokeDasharray: 150,
      duration: 1.5,
      stagger: 0.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }
  
  // Animate the dots grid
  const dots = svgDoc.querySelectorAll('g[opacity="0.5"] path');
  if (dots.length) {
    $gsap.to(dots, {
      opacity: 0.2,
      duration: 1.2,
      stagger: {
        each: 0.05,
        grid: [5, 3],
        from: "random"
      },
      repeat: -1,
      yoyo: true
    });
  }
  
  // Animate the large semi-transparent shapes
  const shapes = svgDoc.querySelectorAll('path[opacity="0.2"], path[opacity="0.3"]');
  if (shapes.length) {
    $gsap.to(shapes, {
      y: -10,
      duration: 3,
      stagger: 0.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }
  
  // Animate the circular elements in the background
  const circles = svgDoc.querySelectorAll('g[opacity="0.1"] path');
  if (circles.length) {
    $gsap.to(circles, {
      scale: 1.05,
      transformOrigin: "center center",
      duration: 4,
      stagger: 0.7,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }
}

</script>
<template>
  <div class="py-[100px] bg-[url(@/assets/img/bg.jpg)]">
    <div class="container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CommonCard class-name="w-full md:!max-w-[370px] flex-vertical-center">
        <div class="text-center md:text-left">
          <h5 class="text-base font-semibold text-primary-400">{{ section.name }}</h5>
          <div class="text-[42px] font-bold leading-[40px] py-4" v-html="section.title" />
          <p class="text-base leading-[26px]">{{ section.details }}</p>
        </div>
      </CommonCard>
      <CommonCard
          v-for="(service, index) in computedService.rendered"
          :key="service.toString()"
          class-name="!w-full flex-vertical-center py-14 px-7 !bg-white service-card"
      >
        <div>
          <div class="relative mx-auto w-24 h-24 mb-4 service-icon icon-shine">
            <img 
              class="mx-auto w-full h-full object-cover"
              :src="service.icon" 
              :alt="service.title" 
              :class="service.animationClass"
            >
          </div>
          <h2 class="text-2xl font-bold leading-[40px] py-4 text-center">{{ service.title }}</h2>
          <p class="text-base leading-[26px] text-center py-4">{{ service.details }}</p>
          <NuxtLink 
            :to="service.link" 
            class="discover-link text-primary-400 flex-center p-2 mx-auto w-fit"
          >
            {{ 'Discover More' }}
            <svg 
              width="16" 
              height="16" 
              class="ml-2" 
              viewBox="0 0 13 14"
              xmlns="http://www.w3.org/2000/svg"
              fill="#3900B4"
            >
              <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
            </svg>
          </NuxtLink>
        </div>
      </CommonCard>
      <CommonCard id="see-more" class-name="!w-full overflow-hidden bg-primary-400 relative">
        <!-- Animated SVG Background -->
        <svg ref="bgSvgRef" class="absolute inset-0 w-full h-full" width="371" height="400" viewBox="0 0 371 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect x="0.0078125" width="370" height="400" rx="12" fill="#3900B4"/>
          <mask id="mask0_113_164" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="371" height="400">
            <rect x="0.0078125" width="370" height="400" rx="12" fill="#3900B4"/>
          </mask>
          <g mask="url(#mask0_113_164)">
            <path class="floating-shape" opacity="0.2" d="M148.901 411.278L91.4926 293.91C86.7299 284.173 90.5907 272.414 100.198 267.395L372.82 124.981C386.136 118.025 402.081 127.685 402.081 142.708V402.49C402.081 413.536 393.126 422.49 382.081 422.49H166.867C159.228 422.49 152.257 418.14 148.901 411.278Z" fill="#D9D9D9"/>
            <path class="floating-shape" opacity="0.3" d="M164.93 401.647L115.713 301.025C110.95 291.288 114.811 279.529 124.418 274.51L360.455 151.208C373.771 144.252 389.715 153.911 389.715 168.935V392.86C389.715 403.905 380.761 412.86 369.715 412.86H182.896C175.258 412.86 168.286 408.509 164.93 401.647Z" fill="#D9D9D9"/>
            <g class="circles-group" opacity="0.1">
              <path d="M350.89 46.9645C369.74 46.9645 385.02 32.2785 385.02 14.1625C385.02 -3.95347 369.74 -18.6394 350.89 -18.6394C332.041 -18.6394 316.761 -3.95347 316.761 14.1625C316.761 32.2785 332.041 46.9645 350.89 46.9645Z" fill="white"/>
              <path d="M411.722 27.6191C419.459 -4.68492 398.482 -36.9001 364.87 -44.3355C331.259 -51.7709 297.739 -31.6109 290.003 0.693159C282.266 32.9972 303.242 65.2124 336.854 72.6478C370.466 80.0832 403.986 59.9232 411.722 27.6191Z" stroke="white" stroke-width="10" stroke-miterlimit="10"/>
              <path d="M350.89 102.172C401.465 102.172 442.463 62.7689 442.463 14.1625C442.463 -34.4439 401.465 -73.8472 350.89 -73.8472C300.316 -73.8472 259.318 -34.4439 259.318 14.1625C259.318 62.7689 300.316 102.172 350.89 102.172Z" stroke="white" stroke-width="10" stroke-miterlimit="10"/>
            </g>
          </g>
          <g class="dots-grid" opacity="0.5">
            <path d="M36.3389 345.169H32.7803V348.728H36.3389V345.169Z" fill="white"/>
            <path d="M49.8975 345.169H46.3389V348.728H49.8975V345.169Z" fill="white"/>
            <path d="M63.456 345.169H59.8975V348.728H63.456V345.169Z" fill="white"/>
            <path d="M77.0146 345.169H73.4561V348.728H77.0146V345.169Z" fill="white"/>
            <path d="M90.5732 345.169H87.0146V348.728H90.5732V345.169Z" fill="white"/>
            <path d="M36.3389 357.728H32.7803V361.287H36.3389V357.728Z" fill="white"/>
            <path d="M49.8975 357.728H46.3389V361.287H49.8975V357.728Z" fill="white"/>
            <path d="M63.456 357.728H59.8975V361.287H63.456V357.728Z" fill="white"/>
            <path d="M77.0146 357.728H73.4561V361.287H77.0146V357.728Z" fill="white"/>
            <path d="M90.5732 357.728H87.0146V361.287H90.5732V357.728Z" fill="white"/>
            <path d="M36.3389 370.287H32.7803V373.845H36.3389V370.287Z" fill="white"/>
            <path d="M49.8975 370.287H46.3389V373.845H49.8975V370.287Z" fill="white"/>
            <path d="M63.456 370.287H59.8975V373.845H63.456V370.287Z" fill="white"/>
            <path d="M77.0146 370.287H73.4561V373.845H77.0146V370.287Z" fill="white"/>
            <path d="M90.5732 370.287H87.0146V373.845H90.5732V370.287Z" fill="white"/>
          </g>
          <path class="wavy-line" opacity="0.4" d="M200.717 195.044C203.751 202.328 204.055 203.542 200.717 211.736C197.378 219.93 206.786 219.323 206.786 226.606C206.786 233.89 201.324 236.318 202.841 242.387" stroke="white" stroke-linecap="round"/>
          <path class="wavy-line" opacity="0.4" d="M204.11 195.044C207.144 202.328 207.448 203.542 204.11 211.736C200.771 219.93 210.179 219.323 210.179 226.606C210.179 233.89 204.717 236.318 206.234 242.387" stroke="white" stroke-linecap="round"/>
        </svg>
        
        <div class="px-[32px] py-[52px] text-light relative z-10">
          <div class="text-[46px] font-bold leading-[40px]">{{ computedService.hidden.length }}+</div>
          <div class="text-[36px] font-medium leading-[40px] py-6">See More</div>
          <NuxtLink 
            class="see-more-link" 
            to="/service"
            ref="seeMoreRef"
            @mousemove="handleSeeMoreMouseMove"
            @mouseleave="handleSeeMoreMouseLeave"
          >
            <svg width="13" height="13" fill="white" viewBox="0 0 13 14"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
            </svg>
          </NuxtLink>
        </div>
      </CommonCard>
    </div>
  </div>
</template>

<style scoped>
/* Specific styles for see-more button */
.see-more-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #000;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform;
  overflow: hidden;
}

.see-more-link:hover {
  transform: scale(1.1);
  background: #3900B4;
  box-shadow: 0 6px 12px rgba(57, 0, 180, 0.2);
}

.see-more-link:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.see-more-link:hover:before {
  opacity: 1;
}

.see-more-link svg {
  transition: transform 0.3s ease;
}

.see-more-link:hover svg {
  transform: rotate(45deg);
}

/* Modify icon animations to only affect the img not wrapper */
.service-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(57, 0, 180, 0.03);
  border-radius: 12px;
}

.service-icon img {
  width: 70%;
  height: 70%;
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

/* CSS Fallbacks for SVG animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes dash {
  0% { stroke-dashoffset: 150; }
  100% { stroke-dashoffset: 0; }
}

.floating-shape {
  animation: float 5s ease-in-out infinite;
}

.wavy-line {
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: dash 3s ease-in-out infinite alternate;
}

.dots-grid path {
  animation: pulse 2s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.1s);
}

.dots-grid path:nth-child(1) { --i: 1; }
.dots-grid path:nth-child(2) { --i: 2; }
.dots-grid path:nth-child(3) { --i: 3; }
.dots-grid path:nth-child(4) { --i: 4; }
.dots-grid path:nth-child(5) { --i: 5; }
.dots-grid path:nth-child(6) { --i: 6; }
.dots-grid path:nth-child(7) { --i: 7; }
.dots-grid path:nth-child(8) { --i: 8; }
.dots-grid path:nth-child(9) { --i: 9; }
.dots-grid path:nth-child(10) { --i: 10; }
.dots-grid path:nth-child(11) { --i: 11; }
.dots-grid path:nth-child(12) { --i: 12; }
.dots-grid path:nth-child(13) { --i: 13; }
.dots-grid path:nth-child(14) { --i: 14; }
.dots-grid path:nth-child(15) { --i: 15; }

.circles-group {
  transform-origin: center;
  animation: pulse 8s ease-in-out infinite;
}
</style>
