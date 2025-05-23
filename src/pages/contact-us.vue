<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HeroSection from "~/components/common/HeroSection.vue";
import BtnPrimary from "~/components/common/BtnPrimary.vue";

useHead({
  title: "TechFes | Contact Us",
});

// Form data
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  isSubmitting: false,
  isSubmitted: false,
  error: null
});

// Form validation
const isValid = computed(() => {
  return form.value.name && form.value.email && form.value.subject;
});

// Submit form
const submitForm = async () => {
  if (!isValid.value) return;
  
  form.value.isSubmitting = true;
  
  try {
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    form.value.isSubmitted = true;
    form.value.name = '';
    form.value.email = '';
    form.value.subject = '';
    form.value.message = '';
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      form.value.isSubmitted = false;
    }, 5000);
    
  } catch (error) {
    form.value.error = 'Something went wrong. Please try again.';
  } finally {
    form.value.isSubmitting = false;
  }
};

// Contact information
const contactInfo = [
  {
    icon: 'mail',
    title: 'Email Us',
    details: 'hello@techfes.com',
    link: 'mailto:hello@techfes.com'
  },
  {
    icon: 'map-pin',
    title: 'Visit Us',
    details: 'House #29, 4th Floor, Road #12, Sector 11, Dhaka - 1230',
    link: 'https://maps.google.com'
  },
  {
    icon: 'phone',
    title: 'Call Us',
    details: '+880 1234 567890',
    link: 'tel:+8801234567890'
  }
];

// Social links
const socialLinks = [
  { name: 'Twitter', icon: 'twitter', link: '#' },
  { name: 'LinkedIn', icon: 'linkedin', link: '#' },
  { name: 'GitHub', icon: 'github', link: '#' },
  { name: 'Instagram', icon: 'instagram', link: '#' }
];

// Animate elements on scroll
onMounted(() => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
</script>

<template>
  <HeroSection
    hero-title="Get in Touch"
    description="Have a project in mind or just want to say hello? We'd love to hear from you."
  />

  <section class="py-20 bg-white relative">
    <!-- Decorative shape -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full"></div>
    
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-16 relative z-10">
        <!-- Contact Information -->
        <div class="w-full lg:w-1/3 animate-on-scroll">
          <div class="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p class="text-gray-600 mb-8">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
            
            <div class="space-y-6">
              <div v-for="(item, index) in contactInfo" :key="index" class="contact-info-item flex items-start space-x-4 group">
                <div class="p-3 bg-white rounded-lg shadow-md text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg v-if="item.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <svg v-else-if="item.icon === 'map-pin'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg v-else-if="item.icon === 'phone'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{{ item.title }}</h3>
                  <a :href="item.link" class="text-gray-600 hover:text-primary transition-colors duration-300">{{ item.details }}</a>
                </div>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="mt-10 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a v-for="(social, index) in socialLinks" :key="index" :href="social.link" 
                   class="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                  <svg v-if="social.icon === 'twitter'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                  <svg v-else-if="social.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                  <svg v-else-if="social.icon === 'github'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <svg v-else-if="social.icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="w-full lg:w-2/3 animate-on-scroll" style="transition-delay: 200ms;">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p class="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div v-if="form.isSubmitted" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 animate-fadeIn">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Your message has been sent! We'll get back to you soon.</span>
              </div>
            </div>
            
            <div v-if="form.error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 animate-fadeIn">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span>{{ form.error }}</span>
              </div>
            </div>
            
            <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group md:col-span-1">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="John Doe" 
                  required 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                  :class="{'border-red-300': form.name === ''}"
                />
              </div>
              
              <div class="form-group md:col-span-1">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="john@example.com" 
                  required 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                  :class="{'border-red-300': form.email === ''}"
                />
              </div>
              
              <div class="form-group md:col-span-2">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  placeholder="How can we help you?" 
                  required 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                  :class="{'border-red-300': form.subject === ''}"
                />
              </div>
              
              <div class="form-group md:col-span-2">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="Tell us about your project or request..." 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                ></textarea>
              </div>
              
              <div class="form-group md:col-span-2">
                <button 
                  type="submit" 
                  :disabled="!isValid || form.isSubmitting"
                  class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg v-if="form.isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ form.isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-on-scroll.animated {
  opacity: 1;
  transform: translateY(0);
}

/* Contact info item hover effect */
.contact-info-item {
  transition: all 0.3s ease;
}

.contact-info-item:hover {
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease forwards;
}
</style>
