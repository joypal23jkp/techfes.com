<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import Avater from '~/assets/img/avaters/avater.png';

const section = ref({
  name: 'Testimonials',
  title: `We Care About Our <br /> Customers Experience`,
  details: `Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.`,
  clientCount: 30,
  projectCount: 32,
  link: '/testimonials'
});

const contents = [
  {
    name: 'Al Mustakin1',
    designation: 'Staff Engineer, Algolia',
    img: Avater,
    comment: `"Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and the build size is tiny."`
  },
  {
    name: 'Al Mustakin2',
    designation: 'Staff Engineer, Algolia',
    img: Avater,
    comment: `"Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and the build size is tiny."`
  },
  {
    name: 'Al Mustakin3',
    designation: 'Staff Engineer, Algolia',
    img: Avater,
    comment: `"Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and the build size is tiny."`
  },
  {
    name: 'Al Mustakin4',
    designation: 'Staff Engineer, Algolia',
    img: Avater,
    comment: `"Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and the build size is tiny."`
  },
  {
    name: 'Al Mustakin5',
    designation: 'Staff Engineer, Algolia',
    img: Avater,
    comment: `"Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and the build size is tiny."`
  },
];

const selectedContentIndex = ref(0);
const testimonialSection = ref(null);
const testimonialCard = ref(null);
const testimonialsHeading = ref(null);
const testimonialsDescription = ref(null);
const testimonialsStats = ref(null);
const testimonialsAvatar = ref(null);
const testimonialsComment = ref(null);
const testimonialsAuthor = ref(null);
let interval = null;

const selectTestimonial = (index) => {
  // Ensure index is in range
  const safeIndex = Math.max(0, Math.min(index, contents.length - 1));
  
  const { $gsap } = useNuxtApp();
  if (!$gsap) {
    // Fallback if GSAP is not available
    selectedContentIndex.value = safeIndex;
    return;
  }
  
  // Create a timeline for the transition
  const tl = $gsap.timeline();
  
  // Fade out current content
  tl.to([testimonialsAvatar.value, testimonialsComment.value, testimonialsAuthor.value], {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.1,
    onComplete: () => {
      // Update the selected index
      selectedContentIndex.value = safeIndex;
      
      // Fade in new content
      $gsap.to([testimonialsAvatar.value, testimonialsComment.value, testimonialsAuthor.value], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.1
      });
    }
  });
};

const addNextItem = () => {
  let nextIndex = selectedContentIndex.value === contents.length - 1 ? 0 : selectedContentIndex.value + 1;
  selectTestimonial(nextIndex);
};

const addPrevItem = () => {
  let prevIndex = selectedContentIndex.value === 0 ? contents.length - 1 : selectedContentIndex.value - 1;
  selectTestimonial(prevIndex);
};

// Auto rotate testimonials
const startAutoRotate = () => {
  interval = setInterval(() => {
    addNextItem();
  }, 8000); // Change testimonial every 8 seconds
};

const stopAutoRotate = () => {
  if (interval) {
    clearInterval(interval);
  }
};

// Initialize animations on mount
onMounted(() => {
  // Ensure initial testimonial is set
  selectedContentIndex.value = 0;
  
  const { $gsap } = useNuxtApp();
  if (!$gsap) return;
  
  // Initial animations
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: testimonialSection.value,
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });
  
  tl.from(testimonialsHeading.value, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
  })
  .from(testimonialsDescription.value, {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
  }, "-=0.4")
  .from(testimonialsStats.value, {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
  }, "-=0.4")
  .from(testimonialCard.value, {
    y: 40,
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    ease: "power3.out"
  }, "-=0.4")
  .from([testimonialsAvatar.value, testimonialsComment.value, testimonialsAuthor.value], {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1
  }, "-=0.2");
  
  // Make sure avatar, comment, and author are visible
  $gsap.set([testimonialsAvatar.value, testimonialsComment.value, testimonialsAuthor.value], {
    opacity: 1,
    y: 0
  });
  
  // Start auto rotate after initial animations
  startAutoRotate();
});

// Clean up interval on component unmount
onBeforeUnmount(() => {
  stopAutoRotate();
});

// Pause auto rotation when user interacts with testimonials
const pauseAutoRotate = () => {
  stopAutoRotate();
  // Restart auto rotation after 15 seconds of inactivity
  setTimeout(startAutoRotate, 15000);
};
</script>

<template>
  <div ref="testimonialSection" class="testimonial-section container mx-auto py-16 md:py-24 lg:py-[100px] px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      <!-- Content section -->
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h5 ref="testimonialsHeading" class="text-base font-semibold text-primary mb-3">{{ section.name }}</h5>
        <div ref="testimonialsHeading" class="text-3xl md:text-4xl lg:text-[42px] font-bold py-4" v-html="section.title" />
        <p ref="testimonialsDescription" class="text-base leading-[26px] max-w-lg mx-auto lg:mx-0">{{ section.details }}</p>
        
        <div ref="testimonialsStats" class="flex w-full pt-8 gap-4">
          <div class="w-1/2 stats-card">
            <h2 class="text-3xl md:text-4xl font-bold text-primary">{{ section.clientCount }}+</h2>
            <p class="text-sm md:text-base">Our Happy Clients</p>
          </div>
          <div class="w-1/2 stats-card">
            <h2 class="text-3xl md:text-4xl font-bold text-primary-400">{{ section.projectCount }}+</h2>
            <p class="text-sm md:text-base">Completed Projects</p>
          </div>
        </div>
      </div>
      
      <!-- Testimonial carousel -->
      <div class="w-full lg:w-1/2">
        <div class="relative">
          <!-- Animated bubbles background -->
          <div class="bubbles-container">
            <div v-for="i in 10" :key="`bubble-${i}`" 
                 class="bubble"
                 :style="{
                   '--size': `${Math.random() * 30 + 10}px`,
                   '--left': `${Math.random() * 100}%`,
                   '--animDuration': `${Math.random() * 8 + 4}s`,
                   '--delay': `${Math.random() * 5}s`,
                   '--opacity': Math.random() * 0.3 + 0.05
                 }"
            ></div>
          </div>

          <!-- Quotation mark -->
          <svg class="absolute top-0 left-0 -translate-x-6 -translate-y-6 hidden md:block z-10" width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.766113" width="70" height="70" rx="12" fill="#3A02B3"/>
            <path d="M24.7459 32.9264C24.3279 32.9264 23.9267 32.9902 23.5275 33.0483C23.6568 32.6134 23.7899 32.171 24.0036 31.7736C24.2173 31.1963 24.5509 30.6958 24.8827 30.1916C25.1601 29.6461 25.6494 29.2768 26.0093 28.8101C26.386 28.3565 26.8996 28.0547 27.3064 27.6779C27.7057 27.2843 28.2286 27.0875 28.6448 26.81C29.0796 26.5607 29.4583 26.2852 29.8632 26.154L30.8735 25.7378L31.762 25.3686L30.8529 21.7358L29.7338 22.0058C29.3758 22.0957 28.9391 22.2007 28.4423 22.3263C27.9343 22.42 27.3926 22.6768 26.789 22.9111C26.193 23.1773 25.5031 23.3573 24.8621 23.7846C24.2173 24.1933 23.4731 24.5344 22.817 25.0818C22.1816 25.646 21.4149 26.1352 20.8488 26.8532C20.2303 27.5242 19.6192 28.229 19.1449 29.0313C18.5957 29.7961 18.2227 30.6358 17.8291 31.4662C17.4729 32.2966 17.1861 33.1458 16.9518 33.9705C16.5075 35.6238 16.3089 37.1946 16.232 38.5386C16.1683 39.8845 16.2058 41.0036 16.2845 41.8133C16.3126 42.1957 16.3651 42.5669 16.4026 42.8237L16.4494 43.1386L16.4982 43.1273C16.8316 44.6847 17.5991 46.1159 18.7119 47.2553C19.8247 48.3947 21.2373 49.1957 22.7864 49.5658C24.3354 49.9359 25.9576 49.8599 27.4653 49.3465C28.9729 48.8332 30.3044 47.9035 31.3058 46.665C32.3071 45.4265 32.9374 43.9298 33.1237 42.3481C33.3099 40.7664 33.0446 39.1642 32.3583 37.727C31.6721 36.2898 30.593 35.0762 29.2458 34.2267C27.8987 33.3771 26.3385 32.9263 24.7459 32.9264ZM45.3651 32.9264C44.9471 32.9264 44.5459 32.9902 44.1467 33.0483C44.276 32.6134 44.4091 32.171 44.6228 31.7736C44.8365 31.1963 45.1701 30.6958 45.5019 30.1916C45.7793 29.6461 46.2686 29.2768 46.6285 28.8101C47.0052 28.3565 47.5188 28.0547 47.9256 27.6779C48.3249 27.2843 48.8478 27.0875 49.264 26.81C49.6989 26.5607 50.0775 26.2852 50.4824 26.154L51.4927 25.7378L52.3812 25.3686L51.4721 21.7358L50.353 22.0058C49.995 22.0957 49.5583 22.2007 49.0615 22.3263C48.5536 22.42 48.0118 22.6768 47.4082 22.9111C46.814 23.1792 46.1224 23.3573 45.4813 23.7865C44.8365 24.1951 44.0923 24.5363 43.4362 25.0836C42.8008 25.6479 42.0341 26.1371 41.468 26.8532C40.8495 27.5242 40.2384 28.229 39.7641 29.0313C39.2149 29.7961 38.8419 30.6358 38.4483 31.4662C38.0921 32.2966 37.8053 33.1458 37.571 33.9705C37.1268 35.6238 36.9281 37.1946 36.8512 38.5386C36.7875 39.8845 36.825 41.0036 36.9037 41.8133C36.9318 42.1957 36.9843 42.5669 37.0218 42.8237L37.0687 43.1386L37.1174 43.1273C37.4508 44.6847 38.2183 46.1159 39.3311 47.2553C40.4439 48.3947 41.8565 49.1957 43.4056 49.5658C44.9546 49.9359 46.5768 49.8599 48.0845 49.3465C49.5921 48.8332 50.9236 47.9035 51.925 46.665C52.9263 45.4265 53.5566 43.9298 53.7429 42.3481C53.9291 40.7664 53.6638 39.1642 52.9776 37.727C52.2913 36.2898 51.2122 35.0762 49.865 34.2267C48.5179 33.3771 46.9577 32.9263 45.3651 32.9264Z" fill="white"/>
          </svg>
          
          <!-- Testimonial card -->
          <CommonCard
            ref="testimonialCard"
            class-name="w-full lg:!w-[570px] h-[450px] md:h-[500px] flex flex-center border-l border-b shadow-lg rounded-lg overflow-hidden z-10 relative"
            @mouseenter="pauseAutoRotate"
            @touchstart="pauseAutoRotate"
          >
            <figure class="p-6 md:p-8 w-full">
              <!-- Avatar -->
              <div ref="testimonialsAvatar" class="testimonial-avatar">
                <img
                  class="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-4 border-primary-100"
                  :src="contents[selectedContentIndex].img"
                  :alt="contents[selectedContentIndex].name"
                />
              </div>
              
              <!-- Content -->
              <figcaption class="pt-6 text-center space-y-4">
                <!-- Comment -->
                <blockquote ref="testimonialsComment" class="testimonial-comment">
                  <p class="text-base md:text-lg leading-relaxed">{{ contents[selectedContentIndex].comment }}</p>
                </blockquote>
                
                <!-- Author -->
                <div ref="testimonialsAuthor" class="testimonial-author">
                  <div class="text-primary font-bold text-xl md:text-2xl">{{ contents[selectedContentIndex].name }}</div>
                  <div class="text-slate-700 text-sm md:text-base">{{ contents[selectedContentIndex].designation }}</div>
                </div>
              </figcaption>
            </figure>
          </CommonCard>
          
          <!-- Navigation buttons for mobile -->
          <div class="w-full flex justify-center gap-4 p-4 mt-4 lg:hidden">
            <button 
              class="nav-button prev-button flex items-center justify-center bg-white text-primary w-10 h-10 rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-300"
              @click="addPrevItem"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <div class="testimonial-dots flex gap-2 items-center">
              <button 
                v-for="(_, index) in contents" 
                :key="index"
                class="testimonial-dot" 
                :class="{ active: index === selectedContentIndex }"
                @click="selectTestimonial(index)"
                :aria-label="`Go to testimonial ${index + 1}`"
              ></button>
            </div>
            
            <button 
              class="nav-button next-button flex items-center justify-center bg-white text-primary w-10 h-10 rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-300"
              @click="addNextItem"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          <!-- "See More" link -->
          <NuxtLink :to="section.link" class="animated-underline text-primary-400 float-right my-4">
            {{ 'See More' }}
            <svg width="13" height="13" class="animated-underline-arrow" fill="#3900B4" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" />
            </svg>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Thumbnail navigation for desktop -->
      <div class="w-[10%] lg:flex justify-end hidden">
        <ul class="mt-10">
          <li v-for="(item, index) in contents" :key="item.toString()" class="mt-4">
            <img
              class="rounded-full mx-auto cursor-pointer"
              :class="index === selectedContentIndex ? 'border-4 border-primary-900': ''"
              :src="item.img"
              :alt="item.name"
              :width="(80 - (index * 10))"
              :height="(80 - (index * 10))"
              @click.prevent="selectTestimonial(index)"
              @mouseenter="pauseAutoRotate"
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-section {
  background-image: url('@/assets/img/bg.jpg');
  background-repeat: repeat-x;
  background-size: contain;
  background-position: bottom;
  position: relative;
}

/* Bubbles animation */
.bubbles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.bubble {
  position: absolute;
  bottom: -50px;
  width: var(--size);
  height: var(--size);
  left: var(--left);
  opacity: var(--opacity);
  border-radius: 50%;
  background: linear-gradient(to right top, rgba(74, 144, 226, 0.3), rgba(148, 187, 233, 0.1));
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: rise var(--animDuration) ease-in infinite;
  animation-delay: var(--delay);
  transform: scale(0);
  z-index: 1;
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  5% {
    opacity: var(--opacity);
  }
  30% {
    transform: translateY(-30vh) scale(1);
  }
  95% {
    opacity: var(--opacity);
  }
  100% {
    transform: translateY(-90vh) scale(0.5);
    opacity: 0;
  }
}

.testimonial-avatar {
  transition: all 0.4s ease;
  position: relative;
  z-index: 5;
}

.testimonial-comment {
  transition: all 0.4s ease;
  position: relative;
  z-index: 5;
}

.testimonial-author {
  transition: all 0.4s ease;
  position: relative;
  z-index: 5;
}

.testimonial-thumbs {
  position: relative;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #3900B4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: #3900B4;
  color: white;
  transform: scale(1.05);
}

.testimonial-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #E0E0E0;
  transition: all 0.3s ease;
}

.testimonial-dot.active {
  background-color: #3900B4;
  transform: scale(1.2);
}

.stats-card {
  transition: all 0.3s ease;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.see-more-link {
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  padding-bottom: 2px;
}

.see-more-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3900B4;
  transition: width 0.3s ease;
}

.see-more-link:hover::after {
  width: 100%;
}

/* Animation for the "See More" link */
.animated-underline {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 5;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3900B4;
  transition: width 0.3s ease;
}

.animated-underline:hover::after {
  width: 100%;
}

.animated-underline-arrow {
  transition: transform 0.3s ease;
}

.animated-underline:hover .animated-underline-arrow {
  transform: translateX(4px);
}

/* Responsive styles */
@media (max-width: 768px) {
  .testimonial-card {
    max-width: 100%;
    min-height: 350px;
  }
  
  .bubble {
    --size: calc(var(--size) * 0.7);
  }
}

@media (max-width: 640px) {
  .testimonial-card {
    min-height: 300px;
    padding: 20px;
  }
  
  .testimonial-section {
    background-size: 200% auto;
  }
}
</style>
