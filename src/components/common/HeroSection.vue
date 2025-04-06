<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  interface IProps {
    heroTitle: string;
    description: string;
  }
  const props = defineProps<IProps>();
  const { $gsap } = useNuxtApp();
  
  // Animation references
  const heroTitle = ref(null);
  const heroDescription = ref(null);
  const svgElements = ref([]);
  
  onMounted(() => {
    // Create animation timeline
    const tl = $gsap.timeline({
      defaults: { ease: "power2.out" }
    });
    
    // Animate hero content
    tl.fromTo(
      heroTitle.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(
      heroDescription.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.5"
    );
    
    // Animate SVG elements with staggered appearance
    if (svgElements.value.length) {
      tl.fromTo(
        svgElements.value,
        { 
          opacity: 0,
          scale: 0.9,
          y: 15
        },
        { 
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)"
        },
        "-=0.6"
      );
      
      // Add continuous floating animations to each SVG
      svgElements.value.forEach((svg, index) => {
        $gsap.to(svg, {
          y: -10 + (index * 2),
          rotation: index % 2 === 0 ? 2 : -2,
          duration: 3 + (index * 0.5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.2 * index
        });
      });
    }
  });
  
  const addSvgRef = (el) => {
    if (el) {
      svgElements.value.push(el);
    }
  };
</script>
<template>
  <div class="relative text-white">
    <section class="w-full min-h-[400px] bg-blue-900 relative overflow-hidden">
      <section class="absolute w-full lg:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 ref="heroTitle" class="text-center text-[44px] font-bold mb-3">{{ props.heroTitle }}</h1>
          <p ref="heroDescription" class="text-center leading-loose">{{ props.description }}</p>
      </section>
      
      <!-- Left rectangle with animation -->
      <svg ref="addSvgRef" class="absolute -top-20 left-0 svg-shape" width="421" height="363" viewBox="0 0 421 363" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape-element" opacity="0.1" x="-216.304" y="84.1077" width="244.385" height="645.284" rx="122.192" transform="rotate(-60 -216.304 84.1077)" fill="url(#paint0_linear_532_1467)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1467" x1="48.8012" y1="512.193" x2="-172.983" y2="508.055" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      <!-- Small circle with pulse animation -->
      <svg ref="addSvgRef" class="absolute top-5 left-1/3 svg-pulse" width="101" height="102" viewBox="0 0 101 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="shape-element" opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M101 50.6094C101 22.7697 78.4315 0.201172 50.5918 0.201172C22.7521 0.201172 0.183594 22.7697 0.183594 50.6094C0.183594 78.4491 22.7521 101.018 50.5918 101.018C78.4315 101.018 101 78.4491 101 50.6094ZM80.4635 50.6094C80.4635 67.107 67.0896 80.481 50.592 80.481C34.0944 80.481 20.7204 67.107 20.7204 50.6094C20.7204 34.1118 34.0944 20.7379 50.592 20.7379C67.0896 20.7379 80.4635 34.1118 80.4635 50.6094Z" fill="url(#paint0_linear_532_1461)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1461" x1="100.866" y1="101.018" x2="100.866" y2="0.469927" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.01"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
        </defs>
      </svg>

      <!-- Medium circle with float animation -->
      <svg ref="addSvgRef" class="absolute top-20 right-1/3 svg-float" width="126" height="125" viewBox="0 0 126 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="shape-element" opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M125.019 62.2095C125.019 27.9038 97.2083 0.0935059 62.9026 0.0935059C28.5969 0.0935059 0.786613 27.9038 0.786613 62.2095C0.786613 96.5152 28.5969 124.325 62.9026 124.325C97.2083 124.325 125.019 96.5152 125.019 62.2095ZM99.7123 62.2094C99.7123 82.5387 83.2321 99.0189 62.9028 99.0189C42.5735 99.0189 26.0933 82.5387 26.0933 62.2094C26.0933 41.8801 42.5735 25.3999 62.9028 25.3999C83.2321 25.3999 99.7123 41.8801 99.7123 62.2094Z" fill="url(#paint0_linear_532_1464)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1464" x1="124.853" y1="124.325" x2="124.853" y2="0.424682" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.01"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
        </defs>
      </svg>

      <!-- Right rectangle with animation -->
      <svg ref="addSvgRef" class="absolute -top-20 right-0 svg-shape" width="525" height="316" viewBox="0 0 525 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape-element" opacity="0.1" x="514.836" y="-173.644" width="244.385" height="645.284" rx="122.192" transform="rotate(60 514.836 -173.644)" fill="url(#paint0_linear_532_1468)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1468" x1="779.941" y1="254.442" x2="558.156" y2="250.304" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      
      <!-- Add connecting lines with animation -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
        <path class="svg-path" d="M100,200 Q250,100 400,200 T700,200" stroke="white" stroke-width="1" stroke-opacity="0.1" fill="none" />
        <path class="svg-path delay-1" d="M50,250 Q200,150 350,250 T650,250" stroke="white" stroke-width="1" stroke-opacity="0.1" fill="none" />
      </svg>
      
      <!-- Add small tech dots -->
      <div class="absolute inset-0 w-full h-full pointer-events-none z-1">
        <div class="tech-dot" style="top: 20%; left: 15%;"></div>
        <div class="tech-dot delay-1" style="top: 30%; right: 25%;"></div>
        <div class="tech-dot delay-2" style="bottom: 25%; right: 15%;"></div>
        <div class="tech-dot delay-3" style="bottom: 40%; left: 30%;"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base animation keyframes */
@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes glow {
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
}

@keyframes blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes draw {
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
}

/* Apply animations to SVG elements */
.svg-shape {
  transition: transform 0.3s ease;
}

.svg-shape:hover {
  transform: scale(1.05);
}

.svg-pulse {
  animation: pulse 4s infinite ease-in-out;
}

.svg-float {
  animation: float 6s infinite ease-in-out;
}

.shape-element {
  transition: opacity 0.3s ease;
}

.svg-shape:hover .shape-element {
  opacity: 0.3;
}

/* Path animations */
.svg-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 8s forwards ease-out;
}

/* Tech dots */
.tech-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.4;
  animation: blink 3s infinite ease-in-out;
}

/* Animation delays */
.delay-1 {
  animation-delay: 0.6s;
}
.delay-2 {
  animation-delay: 1.2s;
}
.delay-3 {
  animation-delay: 1.8s;
}
</style>