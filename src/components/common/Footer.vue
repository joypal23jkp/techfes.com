<template>
  <div class="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
    <!-- "Let's Work Together" Section - Floating Card -->
    <div class="container mx-auto px-4 relative">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12 transform -translate-y-20 flex flex-col lg:flex-row items-center gap-8 z-20">
        <div class="lg:w-2/3">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p class="text-gray-600 mb-6 lg:pr-12">
            Ready to transform your ideas into reality? We're excited to hear about your project and explore how we can help you achieve your goals.
          </p>
        </div>
        <div class="lg:w-1/3 flex justify-center lg:justify-end">
          <CommonBtnPrimary
            name="Start a Project"
            link="/contact-us"
            class-name="!w-auto px-8 py-4 rounded-lg bg-primary hover:bg-primary-600 transition-all duration-300 group"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </template>
          </CommonBtnPrimary>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <!-- Main Footer Content - Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left Column with Logo, Description, and Philosophy -->
        <div class="lg:col-span-5 space-y-10">
          <!-- Logo and Company Info -->
          <div>
            <div class="flex items-center mb-6">
              <img class="mr-3 h-10 w-10" src="@/assets/img/logo.png" alt="Logo" />
              <h2 class="text-4xl font-bold text-gray-900">Techfes</h2>
            </div>
            <p class="text-gray-600 mb-6 lg:pr-12">
              We're a passionate team of designers and developers creating exceptional digital experiences that drive growth and innovation for businesses worldwide.
            </p>
            
            <!-- Social Media Links -->
            <div class="flex space-x-4 mt-6">
              <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Philosophy Card -->
          <div class="philosophy-card p-6 bg-white rounded-xl shadow-md border border-gray-100 transform transition-all duration-500 hover:shadow-lg hover:scale-102">
            <div class="flex items-center mb-4">
              <span class="inline-block w-10 h-10 bg-primary/10 rounded-full mr-3 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.6,2.3C12.2,1.4,10.6,1,9,1C7.4,1,5.8,1.4,4.4,2.3C3,3.1,1.9,4.2,1.1,5.6C0.4,7,0,8.5,0,10.1
                  c0,1.6,0.4,3.1,1.1,4.5c0.8,1.4,1.8,2.5,3.2,3.3c1.4,0.8,3,1.3,4.6,1.3c1.6,0,3.2-0.4,4.6-1.3c1.4-0.8,2.5-1.9,3.2-3.3
                  c0.8-1.4,1.2-2.9,1.2-4.5c0-1.6-0.4-3.1-1.2-4.5C16.1,4.2,15,3.1,13.6,2.3z M15.9,13.4c-0.3,0.6-0.8,1-1.4,1.3
                  c-0.6,0.3-1.3,0.5-2,0.5c-0.7,0-1.3-0.2-1.9-0.5c-0.6-0.3-1-0.8-1.4-1.3c-0.3-0.6-0.5-1.2-0.5-1.9c0-0.7,0.2-1.3,0.5-1.9
                  c0.3-0.6,0.8-1,1.4-1.3c0.6-0.3,1.2-0.5,1.9-0.5c0.7,0,1.4,0.2,2,0.5c0.6,0.3,1.1,0.8,1.4,1.3c0.3,0.6,0.5,1.2,0.5,1.9
                  C16.4,12.2,16.2,12.8,15.9,13.4z"></path>
                </svg>
              </span>
              <h3 class="text-xl font-semibold text-gray-900">Our Philosophy</h3>
            </div>
            <p class="text-gray-700 relative philosophy-text leading-relaxed">
              At Techfes, we believe in <span class="font-medium text-primary">innovation with purpose</span>. Every line of code we write and every design we create is guided by our commitment to excellence, user-centered thinking, and measurable impact for our clients.
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full animate-pulse-subtle">Innovation</span>
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full animate-pulse-subtle" style="animation-delay: 0.5s">Excellence</span>
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full animate-pulse-subtle" style="animation-delay: 1s">Transparency</span>
            </div>
          </div>
        </div>
        
        <!-- Right Column with Navigation Links -->
        <div class="lg:col-span-7">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-6 relative footer-heading">
                Quick Links
                <span class="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></span>
              </h3>
              <ul class="space-y-3">
                <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="footer-link">About Us</NuxtLink></li>
                <li><NuxtLink to="/work" class="footer-link">Portfolio</NuxtLink></li>
                <li><NuxtLink to="/process" class="footer-link">Our Process</NuxtLink></li>
                <li><NuxtLink to="/contact-us" class="footer-link">Contact Us</NuxtLink></li>
              </ul>
            </div>
            
            <!-- Services -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-6 relative footer-heading">
                Services
                <span class="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></span>
              </h3>
              <ul class="space-y-3">
                <li><NuxtLink to="/service" class="footer-link">UI/UX Design</NuxtLink></li>
                <li><NuxtLink to="/service" class="footer-link">Web Development</NuxtLink></li>
                <li><NuxtLink to="/service" class="footer-link">Mobile Development</NuxtLink></li>
                <li><NuxtLink to="/service" class="footer-link">Branding</NuxtLink></li>
                <li><NuxtLink to="/service" class="footer-link">Digital Marketing</NuxtLink></li>
              </ul>
            </div>
            
            <!-- Contact Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-6 relative footer-heading">
                Get in Touch
                <span class="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary"></span>
              </h3>
              <ul class="space-y-5">
                <li class="flex items-start">
                  <span class="inline-block mt-1 mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a href="mailto:hello@techfes.com" class="footer-link">hello@techfes.com</a>
                </li>
                <li class="flex items-start">
                  <span class="inline-block mt-1 mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a href="tel:+8801234567890" class="footer-link">+880 1234 567890</a>
                </li>
                <li class="flex items-start">
                  <span class="inline-block mt-1 mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span class="text-gray-600">House #29, 4th Floor, Road #12, Sector 11, Dhaka - 1230</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Newsletter Subscription -->
          <div class="mt-12 p-6 bg-gray-50 rounded-xl">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p class="text-gray-600 mb-6">Subscribe to our newsletter for the latest insights on design trends and tech innovation.</p>
            <form class="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" class="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              <button type="submit" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Copyright Section -->
    <div class="border-t border-gray-200 mt-12">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm">
            &copy; {{ new Date().getFullYear() }} Techfes. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-600 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="text-gray-600 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" class="text-gray-600 hover:text-primary text-sm transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RollingArrow from "~/components/common/svg/RollingArrow.vue";
import Arrow from "~/components/common/svg/Arrow.vue";
</script>

<style scoped>
/* Philosophy Card Animations */
.philosophy-card {
  position: relative;
  overflow: hidden;
}

.philosophy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: left 1s ease;
}

.philosophy-card:hover::before {
  left: 100%;
}

.philosophy-text {
  position: relative;
}

.philosophy-text::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(to right, var(--primary-color, #3900b4), transparent);
  transition: width 0.6s ease;
}

.philosophy-card:hover .philosophy-text::after {
  width: 100%;
}

@keyframes pulse-subtle {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s infinite ease-in-out;
}

/* Footer navigation link styling */
.footer-link {
  position: relative;
  color: #4B5563;
  display: inline-block;
  padding: 2px 0;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-color, #3900b4);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color, #3900b4);
}

.footer-link:hover::after {
  width: 100%;
}

/* Heading animation */
.footer-heading {
  position: relative;
  padding-bottom: 0.75rem;
  display: inline-block;
}

.footer-heading span {
  transition: width 0.3s ease;
  width: 30px;
}

.footer-heading:hover span {
  width: 100%;
}

/* Hover scale */
.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
