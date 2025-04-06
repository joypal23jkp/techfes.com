<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const show = defineModel<boolean>();
const target = ref<HTMLElement | null>();

onClickOutside(target, event => {
  show.value = false;
});

const links = [
  { name: 'Services', url: '/service', icon: 'services' },
  { name: 'Works', url: '/work', icon: 'works' },
  { name: 'Process', url: '/process', icon: 'process' },
  { name: 'About Us', url: '/about', icon: 'about' },
  { name: 'Contact Us', url: '/contact-us', icon: 'contact' }
];

// Helper function to get subtitle based on icon type
function getSubtitle(icon: string): string {
  switch(icon) {
    case 'services':
      return 'Explore our offerings';
    case 'works':
      return 'View our portfolio';
    case 'process':
      return 'How we work';
    case 'about':
      return 'Learn about us';
    case 'contact':
      return 'Get in touch';
    default:
      return '';
  }
}

const closeMenu = () => {
  show.value = false;
};
</script>

<template>
  <!-- Overlay backdrop -->
  <div 
    v-if="show" 
    class="fixed inset-0 bg-black/50 z-[1009] backdrop-blur-sm lg:hidden transition-opacity duration-300"
    @click="closeMenu"
  ></div>
  
  <!-- Sidebar menu -->
  <div
    v-if="show"
    ref="target"
    class="w-[85%] max-w-[320px] h-screen fixed right-0 top-0 shadow-xl lg:hidden z-[1010] bg-white flex flex-col transform transition-transform duration-300 ease-in-out"
    v-bind="$attrs"
  >
    <!-- Header with logo and close button -->
    <div class="flex-shrink-0 flex items-center justify-between p-5 border-b border-gray-100">
      <div class="flex items-center">
        <img src="@/assets/img/logo.png" alt="Logo" class="h-8 w-8 mr-2">
        <h3 class="text-xl font-bold text-gray-900">Techfes</h3>
      </div>
      <button 
        @click="closeMenu" 
        class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Close menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- Navigation links -->
    <nav class="flex-grow overflow-y-auto p-5">
      <ul class="space-y-2">
        <li v-for="link in links" :key="link.url">
          <NuxtLink
            :to="link.url"
            class="nav-link flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
            @click="closeMenu"
          >
            <span class="icon-container flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-3">
              <!-- Service icon -->
              <svg v-if="link.icon === 'services'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              
              <!-- Works icon -->
              <svg v-if="link.icon === 'works'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              
              <!-- Process icon -->
              <svg v-if="link.icon === 'process'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              
              <!-- About icon -->
              <svg v-if="link.icon === 'about'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              
              <!-- Contact icon -->
              <svg v-if="link.icon === 'contact'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <div class="flex flex-col">
              <span class="font-medium text-gray-900">{{ link.name }}</span>
              <span class="text-xs text-gray-500">{{ getSubtitle(link.icon) }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    
    <!-- CTA Button -->
    <div class="flex-shrink-0 p-5 border-t border-gray-100 bg-white">
      <a href="/contact-us" 
        class="flex items-center justify-center w-full py-3 px-6 bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:bg-primary-600"
        @click="closeMenu"
      >
        Let's Talk
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  color: #1a202c;
  transition: all 0.3s ease;
  position: relative;
}

.router-link-exact-active {
  color: var(--primary-color);
  background-color: rgba(57, 0, 180, 0.05);
  font-weight: 500;
}

.router-link-exact-active .icon-container {
  background-color: rgba(57, 0, 180, 0.2);
}

/* Slide in animation */
.transform {
  transform: translateX(100%);
}

.transform.transition-transform.duration-300.ease-in-out {
  transform: translateX(0);
}

/* Ensure content doesn't overflow */
.overflow-hidden {
  overflow: hidden;
}

/* Fix for mobile scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
}
</style>