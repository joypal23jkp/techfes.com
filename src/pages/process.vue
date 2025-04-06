<script setup lang="ts">
import BtnPrimary from "~/components/common/BtnPrimary.vue";
import HeroSection from "~/components/common/HeroSection.vue";

import One from '~/assets/img/one.png';
import Two from '~/assets/img/two.png';
import Three from '~/assets/img/three.png';
import Four from '~/assets/img/four.png';

const section = ref({
  name: "Successful Some Projects",
  title: "Some of our Works",
});

const services = ref([
  {
    id: 1,
    step: 'Step 01',
    title: 'Discovery & Research',
    details: [
      'Initial consultation to understand your business goals',
      'Comprehensive market research and competitor analysis',
      'Target audience identification and user persona creation',
      'Project scope definition and requirement gathering'
    ]
  },
  {
    id: 2,
    step: 'Step 02',
    title: 'Strategy & Planning',
    details: [
      'Development of a tailored digital strategy',
      'Project roadmap and milestone planning',
      'Resource allocation and timeline establishment',
      'Budget planning and ROI projections'
    ]
  },
  {
    id: 3,
    step: 'Step 03',
    title: 'Design & Development',
    details: [
      'UI/UX design with focus on user experience',
      'Responsive and accessible interface development',
      'Iterative prototyping and testing',
      'Technology stack selection based on project requirements'
    ]
  },
  {
    id: 4,
    step: 'Step 04',
    title: 'Launch & Growth',
    details: [
      'Thorough quality assurance and testing',
      'Deployment and launch strategy implementation',
      'Ongoing maintenance and support',
      'Performance monitoring and optimization'
    ]
  }
]);

// Variables for scroll animation
const lastScrollTop = ref(0);
const scrollDirection = ref('down');
const processContainer = ref(null);
const progressLine = ref(null);
const progressArrow = ref(null);
const progressPercentage = ref(0);
const arrowRotation = ref(0);

// Initialize animations when component is mounted
onMounted(() => {
  // Add a small delay before starting animations for better user experience
  setTimeout(() => {
    const processContainerEl = document.querySelector('.process-container')
    if (processContainerEl) {
      processContainerEl.classList.add('animation-ready')
      
      // Add animation to process info cards with staggered delay
      const processCards = document.querySelectorAll('.process-information')
      processCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }, 1800 + (index * 200)) // Start after SVG animations with 200ms intervals
      })
      
      // Add animations to list items with staggered delay
      const listItems = document.querySelectorAll('.process-list-item')
      listItems.forEach((item, index) => {
        const cardIndex = Math.floor(index / 4) // Assuming 4 items per card
        const itemIndex = index % 4
        setTimeout(() => {
          item.style.opacity = '0.8'
          item.style.transform = 'translateY(0)'
        }, 2000 + (cardIndex * 200) + (itemIndex * 100)) // Staggered delay based on card and item index
      })
    }
    
    // Initialize scroll event listener
    window.addEventListener('scroll', handleScroll);
  }, 500)
});

onUnmounted(() => {
  // Clean up scroll event listener
  window.removeEventListener('scroll', handleScroll);
});

// Handle scroll event to update scroll direction and progress
const handleScroll = () => {
  if (!processContainer.value) return;
  
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = processContainer.value.getBoundingClientRect();
  const containerTop = containerRect.top + window.pageYOffset;
  const containerHeight = containerRect.height + 200; // Add extra height to account for complete button
  
  // Calculate how far we've scrolled through the process section
  const scrollPosition = st - containerTop + window.innerHeight / 2;
  progressPercentage.value = Math.max(0, Math.min(100, (scrollPosition / containerHeight) * 100));
  
  // Determine scroll direction
  if (st > lastScrollTop.value) {
    scrollDirection.value = 'down';
    arrowRotation.value = 180; // Point down
  } else {
    scrollDirection.value = 'up';
    arrowRotation.value = 0; // Point up
  }
  
  // Update last known scroll position
  lastScrollTop.value = st;
  
  // Update progress line height and arrow position
  if (progressLine.value && progressArrow.value) {
    progressLine.value.style.height = `${progressPercentage.value}%`;
    progressLine.value.style.opacity = progressPercentage.value > 5 ? '1' : '0';
    progressArrow.value.style.top = `${progressPercentage.value}%`;
    progressArrow.value.style.transform = `translateY(-50%) rotate(${arrowRotation.value}deg)`;
    progressArrow.value.style.opacity = progressPercentage.value > 5 && progressPercentage.value < 95 ? '1' : '0';
  }
};
</script>

<template>
  <HeroSection
      hero-title="Our Process"
      description="Since our establishment, we have been delivering high-quality and sustainable software solutions worldwide businesses Digital Brands Products Solutions."
  />

  <section class="process-section container mx-auto py-16 md:py-24 relative">
    <!-- Section heading -->
    <div class="text-center mb-16 max-w-3xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-5">Our Development Process</h2>
      <p class="text-gray-600">We follow a proven methodology to transform your ideas into successful digital solutions. Our structured approach ensures quality, efficiency, and transparency throughout the project lifecycle.</p>
    </div>
    
    <!-- Interactive Timeline Process -->
    <div ref="processContainer" class="process-container px-4 md:px-0">
      <div class="relative">
        <!-- Timeline connector -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 transform -translate-x-1/2 z-0">
          <!-- Progress Line (scrolling indicator) -->
          <div ref="progressLine" class="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-600 via-primary to-primary-400 rounded-full progress-line"></div>
          
          <!-- Direction Arrow -->
          <div ref="progressArrow" class="absolute left-1/2 w-7 h-7 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg progress-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
        
        <!-- Process Steps -->
        <div class="space-y-12 md:space-y-0">
          <div v-for="(service, index) in services" :key="service.id" 
               class="process-step relative md:flex items-start"
               :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            
            <!-- Timeline connector for mobile -->
            <div class="md:hidden absolute left-9 top-0 h-full w-1 bg-gradient-to-b from-primary-200 via-primary to-primary-600"></div>
            
            <!-- Step number -->
            <div class="absolute md:relative left-0 md:left-auto top-0 md:top-auto z-10 flex items-center justify-center 
                        md:w-1/12 md:mx-auto">
              <div class="process-step-badge w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary to-primary-600
                        flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg
                        transition-transform duration-300 hover:scale-110 border-4 border-white">
                {{ index + 1 }}
                <div class="absolute w-full h-full rounded-full bg-primary/20 animate-ping"></div>
              </div>
            </div>
            
            <!-- Content for even steps (left side on desktop) -->
            <div class="relative pl-24 md:pl-0 md:w-5/12 md:pr-10 md:text-right"
                 :class="index % 2 !== 0 ? 'md:hidden' : ''">
              <div class="process-content bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:transform hover:scale-[1.02] border-l-4 border-primary md:mr-4 p-6">
                <!-- Icon Image -->
                <div class="flex items-center justify-end mb-4">
                  <div class="icon-container rounded-full bg-primary/5 p-3 w-16 h-16 flex items-center justify-center mr-3">
                    <img :src="index === 0 ? One : (index === 2 ? Three : One)" 
                         :alt="service.title" 
                         class="w-10 h-10 object-contain process-icon">
                  </div>
                  <div class="text-right">
                    <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-1">{{ service.step }}</span>
                    <h3 class="text-xl font-bold text-gray-800">{{ service.title }}</h3>
                  </div>
                </div>
                
                <div class="border-t border-dashed border-gray-200 pt-4 mt-2">
                  <ul class="mt-2 space-y-3">
                    <li v-for="(detail, i) in service.details" :key="i"
                        class="process-list-item flex items-start space-x-2 text-gray-700 text-right"
                        :style="`transition-delay: ${i * 100}ms`">
                      <span class="flex-1">{{ detail }}</span>
                      <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </li>
                  </ul>
                </div>
                
                <!-- Decorative connector -->
                <div class="hidden md:block absolute top-1/2 right-0 w-10 h-1 bg-primary transform translate-x-2 -translate-y-1/2"></div>
              </div>
            </div>
            
            <!-- Content for odd steps (right side on desktop) -->
            <div class="relative pl-24 md:pl-0 md:w-5/12 md:pl-10 md:text-left"
                 :class="index % 2 === 0 ? 'md:hidden' : ''">
              <div class="process-content bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                          hover:transform hover:scale-[1.02] border-l-4 md:border-l-0 md:border-r-4 border-primary md:ml-4 p-6">
                <!-- Icon Image -->
                <div class="flex items-center mb-4">
                  <div class="icon-container rounded-full bg-primary/5 p-3 w-16 h-16 flex items-center justify-center mr-3">
                    <img :src="index === 1 ? Two : Four" 
                         :alt="service.title" 
                         class="w-10 h-10 object-contain process-icon">
                  </div>
                  <div>
                    <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-1">{{ service.step }}</span>
                    <h3 class="text-xl font-bold text-gray-800">{{ service.title }}</h3>
                  </div>
                </div>
                
                <div class="border-t border-dashed border-gray-200 pt-4 mt-2">
                  <ul class="mt-2 space-y-3">
                    <li v-for="(detail, i) in service.details" :key="i"
                        class="process-list-item flex items-start space-x-2 text-gray-700"
                        :style="`transition-delay: ${i * 100}ms`">
                      <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{{ detail }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Decorative connector -->
                <div class="hidden md:block absolute top-1/2 left-0 w-10 h-1 bg-primary transform -translate-x-2 -translate-y-1/2"></div>
              </div>
            </div>
            
            <!-- Timeline decoration -->
            <div class="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary transform -translate-x-1/2 -translate-y-1/2 shadow"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- End of Process Indicator -->
    <div class="mt-16 text-center relative">
      <!-- Continue the timeline to the complete button -->
      <div class="hidden md:block absolute left-1/2 top-[-50px] h-[110px] w-1 bg-gradient-to-b from-primary-200 to-primary-600 transform -translate-x-1/2"></div>
      
      <div class="relative inline-block">
        <div class="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center relative">
          <!-- Connection point for the timeline -->
          <div class="absolute top-0 left-1/2 h-8 w-1 bg-primary transform -translate-x-1/2 -translate-y-full"></div>
          
          <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        <h3 class="text-xl font-bold mt-4">Project Complete!</h3>
        <p class="text-gray-600 mt-2 max-w-md mx-auto">Ready to deliver your solution with excellence and continued support</p>
      </div>
    </div>
  </section>

</template>

<style scoped>
/* Scroll progress indicator styles */
.progress-line {
  height: 0;
  transition: height 0.1s ease-out, opacity 0.3s ease;
  opacity: 0;
  box-shadow: 0 0 10px rgba(57, 0, 180, 0.5);
}

.progress-arrow {
  transition: top 0.1s ease-out, transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  box-shadow: 0 0 10px rgba(57, 0, 180, 0.5);
  z-index: 10;
}

.progress-arrow svg {
  transition: transform 0.3s ease;
}

/* Process content animations */
.process-content {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.process-content:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Step badge animation */
.process-step-badge {
  position: relative;
  z-index: 2;
}

.process-step-badge::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color, #3900b4), #7c5cff);
  opacity: 0.3;
  z-index: -1;
  animation: pulse-badge 3s infinite;
}

@keyframes pulse-badge {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

/* List item animations */
.process-list-item {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}

.process-step:hover .process-list-item {
  opacity: 1;
  transform: translateY(0);
  color: #000;
}

.process-list-item svg {
  transition: all 0.3s ease;
}

.process-list-item:hover svg {
  transform: scale(1.2);
  color: var(--primary-color, #3900b4);
}

/* Process container animations */
.process-container {
  position: relative;
  perspective: 1000px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .process-step {
    padding-bottom: 3rem;
  }
  
  .process-step:last-child {
    padding-bottom: 0;
  }
  
  .process-step:last-child .md\:hidden.absolute {
    display: none;
  }
}

/* Staggered animations */
.process-step {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s forwards;
}

.process-step:nth-child(1) {
  animation-delay: 0.2s;
}

.process-step:nth-child(2) {
  animation-delay: 0.4s;
}

.process-step:nth-child(3) {
  animation-delay: 0.6s;
}

.process-step:nth-child(4) {
  animation-delay: 0.8s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Image animations and effects */
.process-icon {
  transition: all 0.5s ease;
  filter: brightness(1);
}

.process-content:hover .process-icon {
  transform: scale(1.2) rotate(5deg);
  filter: brightness(1.1);
}

.icon-container {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: radial-gradient(circle, rgba(57, 0, 180, 0.08), rgba(57, 0, 180, 0.03));
  box-shadow: 0 0 0 2px rgba(57, 0, 180, 0.1);
}

.process-content:hover .icon-container {
  background: radial-gradient(circle, rgba(57, 0, 180, 0.15), rgba(57, 0, 180, 0.05));
  box-shadow: 0 0 0 3px rgba(57, 0, 180, 0.2);
}
</style>
