<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

// Import client logos
import AcLogo from '@/assets/img/logo/ac.png';
import DiuLogo from '@/assets/img/logo/diu.png';
import JicsonLogo from '@/assets/img/logo/jicson.png';
import MerkLogo from '@/assets/img/logo/merk.png';
import PonnomelaLogo from '@/assets/img/logo/ponnomela.png';
import SyngentaLogo from '@/assets/img/logo/syngenta.png';

const section = ref({
  name: 'Our Happy Clients',
  title: `Trusted by Industry Leaders`,
  details: 'We collaborate with innovative companies across various industries, delivering exceptional digital solutions that drive growth and establish lasting partnerships.'
});

// Updated client list with imported logo images
const clients = ref([
  {
    name: 'Acme Corporation',
    logo: AcLogo, 
    description: 'Leading technology provider',
    industry: 'Technology'
  },
  {
    name: 'DIU',
    logo: DiuLogo, 
    description: 'Premier educational institution',
    industry: 'Education'
  },
  {
    name: 'Jicson Enterprise',
    logo: JicsonLogo, 
    description: 'Global retail solutions',
    industry: 'Retail'
  },
  {
    name: 'Merk Group',
    logo: MerkLogo, 
    description: 'Healthcare innovations',
    industry: 'Healthcare'
  },
  {
    name: 'Ponnomela',
    logo: PonnomelaLogo, 
    description: 'E-commerce platform',
    industry: 'E-commerce'
  },
  {
    name: 'Syngenta',
    logo: SyngentaLogo, 
    description: 'Agricultural technology',
    industry: 'Agriculture'
  }
]);

// Style for client cards, with enhanced presentation
const cardStyle = computed<string>(() => {
  return `!w-full md:!max-w-[280px] h-[180px] flex flex-col items-center justify-center px-6 py-8 bg-white rounded-xl border border-gray-100 relative shadow-lg hover:shadow-xl transition-all duration-300 client-card`;
});

// Refs for animation
const sectionTitle = ref(null);
const sectionDescription = ref(null);
const clientSection = ref(null);
const clientCards = ref([]);

onMounted(() => {
  // Initialize animations
  initializeAnimations();
  
  // Add hover effects to client cards
  addCardHoverEffects();
});

// Initialize animations using GSAP
const initializeAnimations = () => {
  const { $gsap } = useNuxtApp();
  if (!$gsap) return;
  
  // Create a timeline for title and description
  const contentTl = $gsap.timeline({
    scrollTrigger: {
      trigger: clientSection.value,
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });
  
  contentTl
    .from(sectionTitle.value, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    })
    .from(sectionDescription.value, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.4");
  
  // Staggered animation for client cards
  $gsap.from(clientCards.value, {
    y: 40,
    opacity: 0,
    scale: 0.9,
    stagger: 0.1,
    duration: 0.6,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: clientSection.value,
      start: "top 60%",
      toggleActions: "play none none none"
    }
  });
};

// Add hover effects to client cards
const addCardHoverEffects = () => {
  const { $gsap } = useNuxtApp();
  if (!$gsap) return;
  
  clientCards.value.forEach(card => {
    // Find the image element using the $el property of the component
    const imgElement = card.$el ? card.$el.querySelector('img') : null;
    
    if (!imgElement) return;
    
    // Create hover animations
    const hoverTl = $gsap.timeline({ paused: true });
    
    hoverTl
      .to(card.$el, {
        y: -10,
        scale: 1.05,
        boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(imgElement, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      }, 0);
    
    // Add event listeners
    card.$el.addEventListener('mouseenter', () => hoverTl.play());
    card.$el.addEventListener('mouseleave', () => hoverTl.reverse());
    
    // Add a subtle float animation to cards
    $gsap.to(card.$el, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2 // Random delay for each card
    });
  });
};
</script>

<template>
  <div 
    ref="clientSection"
    class="client-section container mx-auto py-16 md:py-24 lg:py-[140px] px-4 sm:px-6 lg:px-8 relative"
  >
    <!-- Background gradient effects -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-10 left-10 w-80 h-80 bg-primary-200/20 rounded-full filter blur-[80px] opacity-30"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-primary-400/10 rounded-full filter blur-[80px] opacity-30"></div>
    </div>
    
    <!-- Content Layout - Horizontal alignment -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 relative z-10">
      <!-- Left Section: Content -->
      <div class="lg:col-span-4 flex flex-col justify-center">
        <h5 ref="sectionTitle" class="inline-block text-base font-semibold text-primary-400 mb-3 px-4 py-1.5 bg-primary-50 rounded-full w-fit">{{ section.name }}</h5>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{{ section.title }}</h2>
        <p ref="sectionDescription" class="text-base md:text-lg text-gray-600 mb-8">{{ section.details }}</p>
        
        <!-- CTA Section moved to left column -->
        <div class="mt-4 lg:mt-auto">
          <NuxtLink 
            to="/contact-us" 
            class="inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Right Section: Client Logos -->
      <div class="lg:col-span-8">
        <!-- Desktop & Tablet Grid -->
        <div class="hidden md:grid grid-cols-3 gap-4 lg:gap-6">
          <div 
            v-for="(client, index) in clients" 
            :key="index"
            class="flex justify-center"
            :class="index % 3 === 1 ? 'md:translate-y-6' : (index % 3 === 2 ? 'md:translate-y-3' : '')"
          >
            <div 
              class="client-card w-full bg-white rounded-lg border border-gray-100 shadow-lg hover:shadow-xl p-5 flex flex-col items-center justify-center transition-all duration-300 h-[160px] relative overflow-hidden"
              :ref="el => { if (el) clientCards[index] = el }"
            >
              <!-- Client Logo -->
              <div class="logo-wrapper h-16 flex items-center justify-center mb-4">
                <img :src="client.logo" :alt="client.name" class="max-w-[120px] max-h-[56px] object-contain">
              </div>
              
              <!-- Client info on hover -->
              <div class="client-info absolute inset-0 opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-center transition-all duration-300 bg-primary text-white rounded-lg p-5">
                <h3 class="font-semibold text-white text-sm mb-1">{{ client.name }}</h3>
                <p class="text-xs text-white/90 mb-2">{{ client.description }}</p>
                <span class="inline-block px-3 py-1 bg-white/20 text-xs text-white rounded-full border border-white/30">{{ client.industry }}</span>
              </div>
              
              <!-- Badge on top right -->
              <div class="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-200"></div>
              
              <!-- Shine effect overlay -->
              <div class="shine-effect"></div>
            </div>
          </div>
        </div>
        
        <!-- Mobile Horizontal Scroll -->
        <div class="md:hidden">
          <div class="client-carousel overflow-x-auto -mx-4 px-4">
            <div class="flex space-x-4 pb-6 w-max">
              <div 
                v-for="(client, index) in clients" 
                :key="index"
                class="w-[220px] flex-shrink-0"
              >
                <div 
                  class="client-card bg-white rounded-lg border border-gray-100 shadow-lg p-4 flex flex-col items-center justify-center h-[140px] relative overflow-hidden"
                  :ref="el => { if (el) clientCards[index] = el }"
                >
                  <div class="logo-wrapper h-14 flex items-center justify-center mb-2">
                    <img :src="client.logo" :alt="client.name" class="max-w-[100px] max-h-[46px] object-contain">
                  </div>
                  <h3 class="font-semibold text-gray-800 text-sm mb-1 text-center">{{ client.name }}</h3>
                  <p class="text-xs text-gray-500 text-center line-clamp-1">{{ client.description }}</p>
                  
                  <!-- Mobile hover overlay -->
                  <div class="client-info absolute inset-0 opacity-0 active:opacity-100 md:hidden bg-primary text-white flex flex-col items-center justify-center p-3 text-center rounded-lg transition-opacity">
                    <span class="text-xs font-medium mb-1 text-white">{{ client.industry }}</span>
                    <p class="text-xs line-clamp-3 text-white/90">{{ client.description }}</p>
                  </div>
                  
                  <div class="shine-effect"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Scroll indicator for mobile -->
          <div class="flex items-center justify-center mt-4">
            <div class="flex space-x-1">
              <div v-for="i in 6" :key="i" 
                   class="w-2 h-2 rounded-full bg-gray-300"
                   :class="{ 'bg-primary-400 w-4': i === 1 }"></div>
            </div>
          </div>
        </div>
        
        <!-- Client Stats -->
        <div class="grid grid-cols-3 gap-4 mt-10 text-center">
          <div class="stat-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-1">30+</div>
            <div class="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div class="stat-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-1">95%</div>
            <div class="text-sm text-gray-600">Retention Rate</div>
          </div>
          <div class="stat-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-1">8+</div>
            <div class="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-section {
  position: relative;
  overflow: hidden;
}

/* Card styling */
.client-card {
  isolation: isolate;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
  transition: all 0.4s ease;
}

.client-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}

/* Shine effect */
.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  z-index: 20;
  animation: shine 6s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  20% {
    left: 100%;
    opacity: 0;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

/* Logo wrapper */
.logo-wrapper {
  position: relative;
  overflow: hidden;
  perspective: 1000px;
}

.logo-wrapper img {
  transition: all 0.4s ease;
  transform: translateZ(0);
  filter: grayscale(60%);
}

.client-card:hover .logo-wrapper img {
  filter: grayscale(0%);
  transform: scale(1.05);
}

/* Client info hover overlay */
.client-info {
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(10px);
  background-color: var(--primary-color, #3900b4);
  color: white;
  z-index: 30;
}

.client-card:hover .client-info {
  opacity: 1;
  transform: translateY(0);
}

@media (hover: none) {
  .client-card:active .client-info {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile carousel */
.client-carousel {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;  /* Firefox */
  scroll-snap-type: x mandatory;
}

.client-carousel::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Edge */
}

.client-carousel > div > div {
  scroll-snap-align: center;
}

/* Stats animation */
.stat-item {
  position: relative;
}

.stat-item:hover .text-3xl,
.stat-item:hover .text-4xl {
  animation: pulse 1s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Line clamp for mobile text */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Media queries */
@media (max-width: 768px) {
  .client-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
