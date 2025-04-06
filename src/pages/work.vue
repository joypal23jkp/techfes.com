<script setup lang="ts">
import HeroSection from "~/components/common/HeroSection.vue";
import { onMounted, ref, reactive } from 'vue';

// Import animations CSS on client side only
if (process.client) {
  import('@/assets/css/animations.css');
}

// Page metadata
useHead({
  title: 'TechFes | Our Work'
});

// Preview modal state
const previewModal = reactive({
  show: false,
  title: '',
  details: '',
  link: '',
  img: '',
  position: { x: 0, y: 0 },
  technologies: [],
  client: ''
});

// Work categories
const categories = ref([
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Design' },
  { id: 'app', name: 'App Design' },
  { id: 'branding', name: 'Branding' }
]);

const activeCategory = ref('all');

// Project data with enhanced structure
const contents = ref([
  {
    img: '/img/projects/one.svg',
    title: "Website Design",
    category: "web",
    details: "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    technologies: ["Vue.js", "Nuxt", "Tailwind CSS"],
    client: "TechCorp",
    link: "/",
  },
  {
    img: '/img/projects/two.png',
    title: "App Design",
    category: "app",
    details: "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    technologies: ["React Native", "Firebase", "UI/UX"],
    client: "HealthApp Inc.",
    link: "/",
  },
  {
    img: '/img/projects/three.png',
    title: "Branding Design",
    category: "branding",
    details: "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    technologies: ["Brand Identity", "Logo Design", "Style Guidelines"],
    client: "Startup Hub",
    link: "/",
  },
  {
    img: '/img/projects/one.svg',
    title: "E-commerce Platform",
    category: "web",
    details: "Since our establishment, we have been delivering high-quality Digital Brands Products Solutions.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    client: "RetailX",
    link: "/",
  },
]);

// Filtered works based on category
const filteredWorks = computed(() => {
  if (activeCategory.value === 'all') {
    return contents.value;
  }
  return contents.value.filter(work => work.category === activeCategory.value);
});

// Animation references
const projectCards = ref([]);
const titleRef = ref(null);
const filterRef = ref(null);
const contactBtn = ref(null);
const { $gsap } = useNuxtApp();

// Change category function
const changeCategory = (category) => {
  activeCategory.value = category;
};

// Initialize animations
onMounted(() => {
  if (!$gsap) return;
  
  // Initialize animations with a slight delay
  setTimeout(() => {
    initAnimations();
  }, 300);
});

// Animation functions
const initAnimations = () => {
  // Animate the title with a stagger effect
  $gsap.from(titleRef.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // Animate the filter buttons
  $gsap.from(filterRef.value.children, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay: 0.2
  });
  
  // Create a staggered animation for the project cards
  $gsap.from(projectCards.value, {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.4
  });
  
  // Animate the contact button
  $gsap.from(contactBtn.value, {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay: 0.8
  });
  
  // Add hover animations to project cards
  projectCards.value.forEach((card) => {
    $gsap.to(card, {
      y: -15,
      boxShadow: '0 25px 50px rgba(57, 0, 180, 0.1)',
      ease: 'power2.out',
      duration: 0.3,
      paused: true
    }).reverse();
    
    card.addEventListener('mouseenter', () => $gsap.getTweensOf(card)[0].play());
    card.addEventListener('mouseleave', () => $gsap.getTweensOf(card)[0].reverse());
  });
  
  // Animated project images
  const projectImages = document.querySelectorAll('.project-img');
  projectImages.forEach((img) => {
    $gsap.to(img, {
      y: -8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
};

// Mouse event handlers for preview modal
const showPreview = (event, content) => {
  // Prevent page scrolling when modal is open
  document.body.style.overflow = 'hidden';
  
  previewModal.show = true;
  previewModal.title = content.title;
  previewModal.details = content.details;
  previewModal.link = content.link;
  previewModal.img = content.img;
  previewModal.technologies = content.technologies;
  previewModal.client = content.client;
};

const hidePreview = () => {
  // Restore scrolling when modal is closed
  document.body.style.overflow = '';
  
  previewModal.show = false;
};

onMounted(() => {
  // No need for mousemove event listener for a centered modal
});
</script>

<template>
  <HeroSection
    hero-title="Our Works"
    description="Since our establishment, we have been delivering high-quality and sustainable software solutions worldwide businesses Digital Brands Products Solutions."
  />
  
  <div class="container mx-auto w-full my-[100px] lg:pb-[100px]">
    <!-- Title -->
    <div ref="titleRef" class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Explore Our <span class="text-primary-400">Projects</span></h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">We've worked with various clients across different industries to deliver exceptional digital experiences.</p>
    </div>
    
    <!-- Filters -->
    <div ref="filterRef" class="flex flex-wrap justify-center gap-4 mb-16">
      <button 
        v-for="category in categories" 
        :key="category.id"
        @click="changeCategory(category.id)"
        :class="[
          'px-6 py-3 rounded-full transition-all duration-300 font-medium',
          activeCategory === category.id ? 
            'bg-primary-400 text-white shadow-lg' : 
            'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        {{ category.name }}
      </button>
    </div>
    
    <!-- Projects Grid -->
    <div class="bg-[position-y: 90%] gap-8 bg-[url(@/assets/img/bg.jpg)] bg-contain bg-repeat-x">
      <transition-group name="project-fade">
        <CommonCard
          v-for="(content, i) in filteredWorks"
          :key="content.title"
          :ref="el => { if (el) projectCards[i] = el.$el }"
          class-name="my-[24px] p-[24px] bg-white rounded-xl shadow-sm project-card"
        >
          <div :class="['flex items-center gap-[30px]', { 'md:flex-row': true, 'md:flex-row-reverse': i%2 === 0, 'flex-col-reverse': true }]">
            <div 
              class="relative overflow-hidden rounded-lg icon-shine"
              @click="showPreview($event, content)"
            >
              <img 
                :src="content.img" 
                :alt="content.title" 
                class="h-auto w-full object-cover project-img cursor-pointer" 
              />
            </div>
            <section class="card-body text-center md:text-left md:px-4">
              <h2 class="text-2xl font-bold leading-[40px] mb-4">
                {{ content.title }}
              </h2>
              <p class="py-2 text-base leading-[26px] text-gray-700 mb-4">{{ content.details }}</p>
              
              <div class="mb-4">
                <h3 class="font-semibold text-gray-800 mb-2">Technologies</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in content.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="flex items-center justify-between mb-2">
                <div class="text-sm text-gray-600">
                  Client: <span class="font-medium">{{ content.client }}</span>
                </div>
                
                <div class="flex-shrink-0">
                  <NuxtLink 
                    :to="content.link" 
                    class="discover-link text-primary-400 flex items-center"
                  >
                    View Project
                    <svg
                      width="13"
                      height="13"
                      class="ml-2"
                      fill="#3900B4"
                      viewBox="0 0 13 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </section>
          </div>
        </CommonCard>
      </transition-group>
    </div>
    
    <!-- Preview Modal -->
    <div 
      v-if="previewModal.show" 
      class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
    >
      <!-- Overlay -->
      <div 
        class="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" 
        @click="hidePreview"
      ></div>
      
      <!-- Modal Content -->
      <div class="relative bg-white rounded-xl shadow-2xl max-w-4xl w-[90%] mx-auto preview-modal max-h-[90vh] overflow-auto">
        <button 
          @click="hidePreview" 
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full z-10 shadow-md hover:bg-gray-100 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="flex flex-col md:flex-row h-full">
          <div class="md:w-1/2 relative h-60 md:h-auto overflow-hidden">
            <img 
              :src="previewModal.img" 
              :alt="previewModal.title" 
              class="w-full h-full object-cover md:rounded-l-xl"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
            <h3 class="absolute bottom-5 left-6 text-white font-bold text-2xl md:hidden">{{ previewModal.title }}</h3>
          </div>
          
          <div class="md:w-1/2 p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-4 hidden md:block">{{ previewModal.title }}</h3>
            <p class="text-gray-700 mb-6">{{ previewModal.details }}</p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-800 mb-3">Technologies</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in previewModal.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-800 mb-1">Client</h4>
              <p class="text-gray-700">{{ previewModal.client }}</p>
            </div>
            
            <NuxtLink 
              :to="previewModal.link" 
              class="bg-primary-400 text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center hover:bg-primary-500 transition-colors"
            >
              View Full Project
              <svg
                width="13"
                height="13"
                class="ml-2"
                fill="currentColor"
                viewBox="0 0 13 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contact Button -->
    <CommonBtnPrimary
      name="Get In Touch"
      link="/contact-us"
      class-name="!w-[200px] rounded mx-auto mt-[48px] mb-[140px] bg-primary"
    />
  </div>
</template>

<style scoped>
.project-fade-enter-active,
.project-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.project-fade-enter-from,
.project-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.project-fade-move {
  transition: transform 0.5s ease;
}

.project-img {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-card {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
              box-shadow 0.4s ease;
  will-change: transform, box-shadow;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(57, 0, 180, 0.1);
}

.discover-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  padding-bottom: 3px;
  margin-bottom: 5px;
  overflow: visible;
}

.discover-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.discover-link:hover::after {
  width: 100%;
}

.discover-link svg {
  transform: translateX(0);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.discover-link:hover svg {
  transform: translateX(4px);
}

.icon-shine {
  position: relative;
  overflow: hidden;
}

.icon-shine::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.icon-shine:hover::after {
  opacity: 0;
}

.group:hover .project-img {
  transform: scale(1.05);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.preview-modal {
  pointer-events: auto;
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: fadeIn 0.3s ease forwards;
  transform-origin: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
