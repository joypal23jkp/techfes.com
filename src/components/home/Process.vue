<script lang="ts" setup>
import BtnPrimary from "~/components/common/BtnPrimary.vue";

import Discover from '~/assets/img/process/Discover.svg'
import Design from '~/assets/img/process/Design.svg'
import Build from '~/assets/img/process/Build.svg'
import test from '~/assets/img/process/test.svg'
import Deploy from '~/assets/img/process/Deploy.svg'
import Support from '~/assets/img/process/Support.svg'

const section = ref({
  name: 'Work Process',
  title: 'UX UI & Development Process',
  details: 'We have Developed an accredited process to ensure your software project runs smoothly. Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.'
});

const contents = [
  { title: 'Discover', img: Support },
  { title: 'Design', img: Design },
  { title: 'Build', img: Build },
  { title: 'Test', img: test },
  { title: 'Deploy', img: Deploy },
  { title: 'Support', img: Support }
]

// Handle animation on scroll with intersection observer
onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    })
    
    const processSection = document.querySelector('.process-section')
    if (processSection) {
      observer.observe(processSection)
    }

    const processSteps = document.querySelectorAll('.process-step')
    processSteps.forEach((step, index) => {
      // Add delay based on index
      step.style.transitionDelay = `${index * 150}ms`
      observer.observe(step)
    })
  }
})
</script>

<template>
  <div class="process-section w-full bg-primary text-primary-foreground py-16 md:py-20 lg:py-[100px] my-10 md:my-16 lg:my-[100px] px-4 md:px-8 overflow-hidden">
    <!-- Section Header -->
    <div class="max-w-4xl mx-auto mb-12 md:mb-16">
      <h5 class="text-base font-semibold text-center text-primary-200 opacity-80 mb-2">{{ section.name }}</h5>
      <div class="text-2xl md:text-3xl lg:text-[42px] font-bold leading-tight py-3 text-center" v-html="section.title" />
      <p class="text-center md:w-4/5 lg:w-2/3 mx-auto text-sm md:text-base opacity-90">{{ section.details }}</p>
    </div>

    <!-- Process Steps -->
    <div class="relative max-w-6xl mx-auto">
      <!-- Mobile View (Vertical Stack) -->
      <div class="md:hidden">
        <!-- Mobile process flow line -->
        <div class="relative mx-auto w-1 bg-white/20 h-[calc(100%-60px)] absolute left-[50%] top-[30px]"></div>
        
        <!-- Process steps with connecting dots -->
        <div class="space-y-8 relative">
          <div 
            v-for="(content, index) in contents" 
            :key="content.title"
            class="process-step flex items-start bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-500 relative z-10 pl-4 pr-6 py-5 hover:bg-white/15"
          >
            <!-- Step Number and Flow Indicator -->
            <div class="relative mr-4 flex flex-col items-center">
              <!-- Flow dot on the line -->
              <div class="absolute h-[30px] w-[3px] bg-primary-300 top-[-30px] left-[50%] transform translate-x-[-50%]"
                   v-if="index !== 0"></div>
              
              <!-- Step number badge -->
              <div class="process-step-number bg-gradient-to-br from-primary-300 to-primary-500 w-12 h-12 rounded-full 
                          flex items-center justify-center text-white font-bold text-lg relative z-10 
                          shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-3">
                {{ index + 1 }}
              </div>
              
              <!-- Flow dot below -->
              <div class="absolute h-[30px] w-[3px] bg-primary-300 bottom-[-30px] left-[50%] transform translate-x-[-50%]"
                   v-if="index !== contents.length - 1"></div>
            </div>
            
            <!-- Content Area -->
            <div class="flex-1">
              <!-- Step icon with gradient background -->
              <div class="mb-3 inline-block p-2 rounded-lg bg-gradient-to-br from-primary-600/40 to-primary-300/20">
                <img class="h-[50px] w-[50px] drop-shadow-lg" :src="content.img" :alt="content.title">
              </div>
              
              <!-- Step title -->
              <h5 class="text-xl font-bold mb-2 mobile-step-title">{{ content.title }}</h5>
              
              <!-- Step description - Added brief descriptions for each step -->
              <p class="text-sm text-white/80 leading-relaxed">
                <span v-if="content.title === 'Discover'">Research & understand project requirements, user needs, and market analysis.</span>
                <span v-if="content.title === 'Design'">Create wireframes, mockups, and user-centered designs for an optimal experience.</span>
                <span v-if="content.title === 'Build'">Develop feature-rich, responsive applications with modern technologies.</span>
                <span v-if="content.title === 'Test'">Quality assurance, performance optimization, and cross-platform testing.</span>
                <span v-if="content.title === 'Deploy'">Deploy to production with CI/CD pipelines, ensure smooth launch.</span>
                <span v-if="content.title === 'Support'">Provide ongoing maintenance, updates, and technical assistance.</span>
              </p>
            </div>
          </div>
        </div>
        
        <!-- Mobile only call-to-action -->
        <div class="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <h4 class="text-lg font-semibold mb-2">Ready to Start Your Project?</h4>
          <p class="text-sm text-white/80 mb-4">Let us guide you through each step of our proven development process.</p>
          <BtnPrimary
            name="Explore Our Process"
            link="/process"
            class-name="!w-full bg-primary-300 border-[0.5px] border-[#ffffff2b] rounded py-3 hover:bg-white hover:!text-primary transition-all duration-300"
          />
        </div>
      </div>

      <!-- Tablet and Desktop View (Circular Flow) -->
      <div class="hidden md:flex justify-center relative">
        <!-- Connection line behind circles (visible on larger screens) -->
        <svg class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-80px)] h-auto max-w-4xl" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Base path -->
          <path 
            d="M50,100 C150,20 250,180 350,100 C450,20 550,180 650,100 C750,20 850,180 950,100" 
            fill="none" 
            stroke="rgba(255,255,255,0.2)" 
            stroke-width="4"
            class="process-path"
          />
          <!-- Animated progress path -->
          <path 
            d="M50,100 C150,20 250,180 350,100 C450,20 550,180 650,100 C750,20 850,180 950,100" 
            fill="none" 
            stroke="white" 
            stroke-width="4"
            class="process-path-progress"
          />
          
          <!-- Floating particles -->
          <circle class="floating-particle particle-delay-1" cx="0" cy="0" r="3" fill="white">
            <animateMotion
              path="M50,100 C150,20 250,180 350,100 C450,20 550,180 650,100 C750,20 850,180 950,100"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle class="floating-particle particle-delay-2" cx="0" cy="0" r="3" fill="white">
            <animateMotion
              path="M50,100 C150,20 250,180 350,100 C450,20 550,180 650,100 C750,20 850,180 950,100"
              dur="8s"
              repeatCount="indefinite"
              begin="1.5s"
            />
          </circle>
          <circle class="floating-particle particle-delay-3" cx="0" cy="0" r="3" fill="white">
            <animateMotion
              path="M50,100 C150,20 250,180 350,100 C450,20 550,180 650,100 C750,20 850,180 950,100"
              dur="8s"
              repeatCount="indefinite"
              begin="3s"
            />
          </circle>
        </svg>

        <!-- Process Step Circles -->
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(content, index) in contents" 
            :key="content.title"
            class="process-step relative mx-[-12px] lg:mx-[-20px]"
            :class="!(index % 2) ? `translate-y-10`: `translate-y-[-40px]`"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 blur-md bg-primary-400/20 rounded-full animate-pulse"></div>
            
            <!-- Circle Background -->
            <div class="relative">
              <img alt="circle" src="~/assets/img/circle.svg" class="h-[130px] w-[130px] md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px] relative z-10 drop-shadow-lg">
              
              <!-- Content inside the circle -->
              <div
                class="absolute left-0 right-0 top-0 bottom-0 mx-auto flex flex-col items-center justify-center"
                :class="!(index % 2) ? `rotate-180`: ``"
              >
                <div :class="!(index % 2) ? `rotate-180`: ``">
                  <img class="mx-auto h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" 
                    :src="content.img" :alt="content.title">
                  <h5 class="text-center text-sm md:text-base lg:text-lg font-bold mt-1">{{ content.title }}</h5>
                  
                  <!-- Step number -->
                  <div class="process-step-number bg-gradient-to-br from-primary-300 to-primary-500 w-6 h-6 md:w-8 md:h-8 rounded-full 
                              flex items-center justify-center text-white text-xs md:text-sm font-bold
                              absolute top-1 right-1 md:top-2 md:right-2">
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-16">
      <BtnPrimary
        name="Explore Our Process"
        link="/process"
        class-name="!w-[300px] bg-primary-300 border-[0.5px] border-[#ffffff2b] rounded mx-auto transition-all duration-300"
      />
    </div>
  </div>
</template>

<style scoped>
/* Base styles for process circles */
.process-step {
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
}

.process-step:hover {
  z-index: 10;
}

.process-step.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.process-section {
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.process-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Path animation */
.process-path-progress {
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: drawProcess 5s ease-out forwards;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.6));
  opacity: 0.8;
}

/* Floating particle animations */
.floating-particle {
  animation: particlePulse 3s infinite ease-in-out;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
}

/* Step number pulse effect */
.process-step-number {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: numberPulse 2s infinite ease-in-out;
}

/* Animation for process step images */
.process-step img {
  transition: all 0.5s ease;
}

.process-step:hover img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  transform: scale(1.1);
}

/* Keyframe animations */
@keyframes drawProcess {
  0% {
    stroke-dashoffset: 1500;
    opacity: 0.3;
  }
  30% {
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.8;
  }
}

@keyframes particlePulse {
  0%, 100% {
    opacity: 0.2;
    r: 2;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
  }
  50% {
    opacity: 0.9;
    r: 4;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.9));
  }
}

@keyframes numberPulse {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  }
}

/* Media queries for better responsiveness */
@media (max-width: 768px) {
  .process-step {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-left: 3px solid var(--primary-color, #3900b4);
    transform: translateX(0);
    opacity: 0;
    animation: slideInStep 0.5s ease forwards;
    animation-delay: calc(var(--index, 0) * 150ms);
  }
  
  .mobile-step-title {
    position: relative;
    display: inline-block;
  }
  
  .mobile-step-title::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, white, transparent);
  }
  
  .process-step:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  @keyframes slideInStep {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .process-step {
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
