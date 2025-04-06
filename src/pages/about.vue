<script setup lang="ts">
import HeroSection from "~/components/common/HeroSection.vue";
import BtnPrimary from "~/components/common/BtnPrimary.vue";
import { onMounted, ref } from "vue";

useHead({
  title: "TechFes | About Page",
});

// Team members data
const teamMembers = ref([
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "With over 15 years of experience in tech, John has led multiple successful startups.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Award-winning designer with a passion for creating intuitive and beautiful interfaces.",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Full-stack developer with expertise in modern web frameworks and cloud infrastructure.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "Digital marketing expert specializing in growth strategies for tech companies.",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  }
]);

// Company stats
const stats = ref([
  { number: 1, label: "Year in Business", icon: "⏱️" },
  { number: 12, label: "Projects Completed", icon: "🚀" },
  { number: 100, label: "Commitment", suffix: "%", icon: "💪" },
  { number: 8, label: "Team Members", icon: "👥" }
]);

// Skills data with percentages
const skills = ref([
  { name: "UX UI Design", percentage: 90 },
  { name: "Branding Design", percentage: 80 },
  { name: "Social Media Design", percentage: 90 },
  { name: "Android & iOS App Development", percentage: 95 },
  { name: "Web Development", percentage: 95 }
]);

// Values and principles
const values = ref([
  { 
    title: "Innovation", 
    icon: "💡",
    details: "Constantly pushing boundaries with creative solutions that challenge the status quo."
  },
  { 
    title: "Excellence", 
    icon: "🏆",
    details: "Committed to delivering exceptional quality in everything we do, no exceptions."
  },
  { 
    title: "Collaboration", 
    icon: "🤝",
    details: "Working together with clients as partners to achieve shared goals and success."
  },
  { 
    title: "Integrity", 
    icon: "🛡️",
    details: "Building relationships based on trust, transparency and honest communication."
  }
]);

// Timeline milestones
const timeline = ref([
  { year: 2023, title: "Company Founded", description: "Started with a vision and a small passionate team" },
  { year: 2023, title: "First Client Project", description: "Successfully delivered our first client solution" },
  { year: 2024, title: "Team Expansion", description: "Onboarded talented designers and developers" },
  { year: 2024, title: "Innovation Focus", description: "Launched R&D for emerging technologies" },
  { year: 2025, title: "Future Vision", description: "Aiming to become an industry leader in digital innovation" }
]);

// Animation functions
onMounted(() => {
  // Animate stats counting
  const statElements = document.querySelectorAll('.stat-number');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(el.getAttribute('data-value'));
        let currentValue = 0;
        const duration = 2000; // ms
        const interval = 20; // ms
        const increment = targetValue / (duration / interval);
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            clearInterval(timer);
            currentValue = targetValue;
          }
          el.textContent = Math.floor(currentValue);
        }, interval);
        
        observer.unobserve(el);
      }
    });
  }, observerOptions);
  
  statElements.forEach(el => {
    observer.observe(el);
  });
  
  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = el.getAttribute('data-width') + '%';
        el.style.width = width;
        skillObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });
  
  // Animate sections on scroll
  const animatedSections = document.querySelectorAll('.animate-on-scroll');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedSections.forEach(section => {
    sectionObserver.observe(section);
  });
});
</script>

<template>
  <HeroSection
      hero-title="About Us"
      description="We are a team of passionate digital creators dedicated to transforming ideas into exceptional digital experiences that drive growth and innovation."
  />

  <!-- Mission & Vision Section -->
  <section class="py-20 bg-gradient-to-b from-white to-gray-50 animate-on-scroll">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="md:w-1/2 space-y-6">
          <div class="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span class="text-primary font-semibold tracking-wide text-sm">OUR MISSION</span>
          </div>
          <h2 class="text-4xl font-bold leading-tight text-gray-900">Creating digital experiences that make a difference</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            We're dedicated to building innovative digital solutions that solve real problems and create measurable impact for our clients. Through thoughtful design and development, we transform visions into reality.
          </p>
          <div class="pt-4">
            <BtnPrimary
              name="Our Work"
              link="/work"
              class-name="bg-primary hover:bg-primary-600 transition-all duration-300"
            />
          </div>
        </div>
        <div class="md:w-1/2 relative">
          <div class="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                 alt="Our team collaboration" 
                 class="w-full h-auto">
          </div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-16 bg-primary text-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, index) in stats" :key="index" 
             class="text-center p-6 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
             :style="`transition-delay: ${index * 100}ms`">
          <div class="text-5xl mb-4">{{ stat.icon }}</div>
          <div class="flex justify-center items-baseline">
            <span class="stat-number text-5xl font-bold" :data-value="stat.number">0</span>
            <span v-if="stat.suffix" class="text-3xl font-bold">{{ stat.suffix }}</span>
          </div>
          <p class="text-lg mt-2 text-white/80">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values Section -->
  <section class="py-20 bg-white animate-on-scroll">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
          <span class="text-primary font-semibold tracking-wide text-sm">OUR VALUES</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900">Principles that guide us</h2>
        <p class="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          These core values define our culture and shape every decision we make and every project we deliver.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(value, index) in values" :key="index" 
             class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
             :style="`transition-delay: ${index * 100}ms`">
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.details }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills & Expertise Section -->
  <section class="py-20 bg-gray-50 animate-on-scroll">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-16">
        <div class="lg:w-1/2">
          <div class="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span class="text-primary font-semibold tracking-wide text-sm">OUR EXPERTISE</span>
          </div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <p class="text-lg text-gray-700 mb-10">
            We combine cutting-edge technologies with creative expertise to deliver solutions that are not only visually stunning but also functionally powerful.
          </p>
          
          <div class="space-y-6">
            <div v-for="(skill, index) in skills" :key="index" class="skill-item">
              <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-800">{{ skill.name }}</span>
                <span class="text-primary font-semibold">{{ skill.percentage }}%</span>
              </div>
              <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div class="skill-progress-bar h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full"
                     :style="`width: 0%; transition-delay: ${index * 200}ms`"
                     :data-width="skill.percentage"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2 flex flex-col justify-center">
          <div class="card-section grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(_, index) in 4" :key="index"
                 class="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all duration-300"
                 :style="`transition-delay: ${index * 100}ms`">
              <div class="text-4xl text-primary mb-4 transform hover:rotate-12 transition-all duration-300">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ ["Problem Solving", "Creative Thinking", "Technical Excellence", "User-Focused Design"][index] }}
              </h3>
              <p class="text-gray-600">
                {{ ["We tackle complex challenges with innovative solutions.", 
                     "We think outside the box to create unique designs.", 
                     "We build robust, scalable applications with clean code.", 
                     "We create intuitive interfaces with the user in mind."][index] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20 bg-white animate-on-scroll">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
          <span class="text-primary font-semibold tracking-wide text-sm">OUR TEAM</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900">Meet the people behind our success</h2>
        <p class="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Our talented team combines creativity, technical expertise, and industry experience to deliver exceptional results.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(member, index) in teamMembers" :key="index" 
             class="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
             :style="`transition-delay: ${index * 100}ms`">
          <div class="relative overflow-hidden">
            <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div class="p-4 w-full">
                <div class="flex justify-center space-x-4">
                  <a v-for="(_, network) in member.social" :key="network" :href="member.social[network]" 
                     class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.18-2.935 5.34-4.82c.235-.21-.054-.329-.36-.329l-6.604 4.33-2.84-.944c-.617-.2-.628-.617.13-.913l11.074-4.26c.503-.2.943.13.822.812z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">{{ member.name }}</h3>
            <p class="text-primary font-medium mb-3">{{ member.role }}</p>
            <p class="text-gray-600">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Company Timeline -->
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white animate-on-scroll relative mb-20 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
          <span class="text-primary font-semibold tracking-wide text-sm">OUR JOURNEY</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900">Startup Roadmap</h2>
        <p class="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Our journey has just begun, but we're moving fast with a clear vision of where we're headed and the impact we aim to create.
        </p>
      </div>
      
      <!-- New Journey Path Design -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full"></div>
        
        <!-- The journey path - curved line -->
        <div class="relative py-10">
          <div class="hidden md:block absolute z-0 top-1/2 left-0 w-full h-1 bg-gray-200"></div>
          
          <!-- Path with gradient -->
          <div class="hidden md:block absolute z-1 top-1/2 left-0 w-full h-2 rounded-full" 
               style="background: linear-gradient(90deg, var(--primary-color, #3900b4) 0%, var(--primary-color, #3900b4) 30%, #ccc 30%, #ccc 100%);"></div>
          
          <!-- The milestones -->
          <div class="flex flex-col md:flex-row justify-between items-start relative z-10">
            <div v-for="(milestone, index) in timeline" :key="index" 
                 class="milestone-card group flex flex-col items-center w-full md:w-1/5 px-2 transition-all duration-500"
                 :class="{'md:mt-28': index % 2 === 1}"
                 :style="`transition-delay: ${index * 150}ms`">
              
              <!-- Milestone circle/dot marker -->
              <div class="relative">
                <div :class="{'md:absolute': true, 'md:bottom-8': index % 2 === 0, 'md:top-8': index % 2 === 1}">
                  <div class="w-12 h-12 rounded-full bg-white border-4 flex items-center justify-center shadow-lg mb-4 transition-all duration-300 group-hover:scale-110"
                       :class="index < 2 ? 'border-primary' : 'border-gray-300'">
                    <span class="text-xl font-bold" :class="index < 2 ? 'text-primary' : 'text-gray-500'">{{ milestone.year }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Content Card -->
              <div class="bg-white rounded-xl p-6 shadow-md w-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2"
                   :class="index < 2 ? 'border-l-4 border-primary/70' : 'border-l-4 border-gray-200'">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ milestone.title }}</h3>
                <p class="text-gray-600">{{ milestone.description }}</p>
                
                <!-- Connection line for mobile -->
                <div class="md:hidden w-1 h-8 bg-gray-200 mx-auto mt-4"></div>
              </div>
            </div>
          </div>
          
          <!-- Journey indicators -->
          <div class="hidden md:flex justify-between items-center mt-8">
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
              <span class="ml-2 text-sm font-medium text-primary">We are here</span>
            </div>
            
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-gray-400"></div>
              <span class="ml-2 text-sm font-medium text-gray-500">Future goals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call To Action -->
  <section class="py-16 relative z-10 md:mb-80 overflow-hidden">
    <!-- Remove gradient background -->
    <!-- <div class="absolute inset-0 bg-gradient-to-r from-primary to-indigo-700 opacity-90"></div> -->
    
    <!-- Update decorative elements to be more subtle -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full -translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl p-10 text-center shadow-xl border border-gray-200">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h2 class="text-4xl font-bold mb-4 text-gray-900">Ready to start your project?</h2>
        
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life with innovative solutions tailored to your unique needs.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/work" class="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-700 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300">
            View Our Work
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animated underlines */
.animated-link {
  position: relative;
  display: inline-block;
}

.animated-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color, #3900b4), #7c5cff);
  transition: width 0.3s ease;
}

.animated-link:hover::after {
  width: 100%;
}

/* Skill bar animation */
.skill-progress-bar {
  width: 0;
  transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.skill-item:hover .skill-progress-bar {
  animation: progress-pulse 1.5s ease infinite;
}

@keyframes progress-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

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

/* Card hover effects */
.card-section > div {
  transition: all 0.3s ease;
}

.card-section > div:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-10px);
}
</style>
