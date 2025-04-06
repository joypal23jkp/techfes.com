<script lang="ts" setup>
  import BtnPrimary from "~/components/common/BtnPrimary.vue";
  const content = ref({
    title: `We Create <span class="text-primary-200">Impactful</span> <br /> World Class Digital Brands Products Solutions`,
    description: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses Digital Brands Products Solutions.',
    button: {
      name: "Let's Talk",
      link: '/about'
    }
  });

  const { $gsap } = useNuxtApp();
  const heroContainer = ref(null);
  const heroSvg = ref(null);
  const heroTitle = ref(null);
  const heroDescription = ref(null);
  const heroButton = ref(null);
  
  // State for mouse position
  const mouseX = ref(0);
  const mouseY = ref(0);

  onMounted(() => {
    // Set up main timeline for coordinated animations
    const mainTimeline = $gsap.timeline({
      defaults: { 
        ease: "power2.out",
      }
    });
    
    // Animate title with character by character reveal
    mainTimeline.fromTo(
      '.hero-title',
      { 
        opacity: 0,
        y: 50 
      },
      {
        opacity: 1, 
        y: 0, 
        duration: 1,
        onComplete: () => {
          // Add a subtle highlight animation to the 'Impactful' span
          $gsap.to('.hero-title span', {
            color: '#6D28D9',
            textShadow: '0 0 10px rgba(109,40,217,0.3)',
            duration: 1,
            repeat: -1,
            yoyo: true
          });
        }
      }
    );
    
    // Animate description with a staggered character reveal
    mainTimeline.fromTo(
      '.hero-description',
      { 
        opacity: 0,
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.4" // Start slightly before title animation completes
    );
    
    // Animate button with a pop effect
    mainTimeline.fromTo(
      '.hero-btn',
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)" // Add bounce effect
      },
      "-=0.3"
    );
    
    // Add the SVG animations after the text elements appear
    mainTimeline.add(() => {
      animateHeroOverlay();
      
      // Make SVG visible with a fade-in
      $gsap.to('.hero-svg', {
        opacity: 1,
        duration: 1
      });
      
      // Add interactive elements classes
      addInteractiveClasses();
      
      // Setup mouse move event listener for parallax effect
      setupParallaxEffect();
    });
  });

  const animateHeroOverlay = () => {
    // Create a timeline for coordinated overlay animations
    const overlayTimeline = $gsap.timeline({
      defaults: { ease: "power1.inOut" }
    });
    
    // Animate overlay circles with staggered appearance
    overlayTimeline.fromTo('.overlay-circle', 
      { 
        scale: 0,
        opacity: 0 
      },
      {
        scale: 1,
        opacity: 0.5,
        duration: 0.8,
        stagger: 0.2,
        ease: "elastic.out(1, 0.3)"
      }
    );
    
    // Then add continuous float animation
    $gsap.to('.overlay-circle', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2,
      delay: 1
    });

    // Animate tech paths with drawing effect
    $gsap.fromTo('.overlay-path', 
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        opacity: 0
      },
      {
        strokeDashoffset: 0,
        opacity: 0.6,
        duration: 3,
        ease: 'power1.inOut',
        stagger: 0.5,
        delay: 0.8
      }
    );

    // Make the SVG animation visible with a fade-in
    $gsap.to('.hero-svg-overlay', {
      opacity: 1,
      duration: 1,
      delay: 0.5
    });
    
    // Add tech blinking elements with staggered timing
    $gsap.to('.tech-blink', {
      opacity: 0.8,
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3,
      delay: 1.5
    });
    
    // Create rotating effect for gear elements
    $gsap.to('.gear-point', {
      rotation: 360,
      transformOrigin: "center center",
      duration: 15,
      repeat: -1,
      ease: "none"
    });
    
    // Add pulsing effect to the gear points
    $gsap.to('.gear-point', {
      scale: 1.2,
      opacity: 0.6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4,
      delay: 2
    });
  }
  
  // Setup parallax effect
  const setupParallaxEffect = () => {
    if (!heroContainer.value) return;
    
    const container = heroContainer.value;
    
    container.addEventListener('mousemove', (e: MouseEvent) => {
      // Only calculate if we can track the bounds
      const rect = container.getBoundingClientRect();
      if (!rect) return;
      
      // Calculate mouse position relative to container center (-1 to 1 range)
      mouseX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      updateParallaxElements();
    });
    
    // Reset on mouse leave
    container.addEventListener('mouseleave', () => {
      mouseX.value = 0;
      mouseY.value = 0;
      updateParallaxElements(true);
    });
  }
  
  // Update elements with parallax effect
  const updateParallaxElements = (reset = false) => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach((el, index) => {
      // Create varied depths based on element index
      const depth = 0.05 + (index % 4) * 0.03;
      
      if (reset) {
        // Smoothly reset elements to original position
        $gsap.to(el, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      } else {
        // Apply parallax movement with depth variation
        $gsap.to(el, {
          x: mouseX.value * 30 * depth,
          y: mouseY.value * 30 * depth,
          rotateY: mouseX.value * 5 * depth,
          rotateX: -mouseY.value * 5 * depth,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });
  }
  
  // Add interactive classes to SVG elements
  const addInteractiveClasses = () => {
    // Get the SVG document
    const svgImg = document.querySelector('.hero-svg') as HTMLImageElement;
    if (!svgImg) return;
    
    // Add classes after image loads
    svgImg.onload = () => {
      // Add appropriate classes to various SVG elements
      
      // Purple elements for floating animation
      const purpleElements = document.querySelectorAll('.hero-svg [fill="#3900B4"], .hero-svg [fill="#5929BF"]');
      purpleElements.forEach((el, i) => {
        el.classList.add('parallax-element');
        // Add different delay classes
        el.classList.add(`delay-${(i % 5) + 1}`);
      });
      
      // Circle elements for pulse animation
      const circleElements = document.querySelectorAll('.hero-svg [fill="#BDCEFA"]');
      circleElements.forEach((el, i) => {
        if (i % 3 === 0) el.classList.add('interactive-element');
        if (i % 2 === 0) el.classList.add('parallax-element');
        if (i % 5 === 0) el.classList.add('tech-blink');
        // Add different delay classes
        el.classList.add(`delay-${(i % 5) + 1}`);
      });
      
      // Add gear points and gradient elements
      const gradientElements = document.querySelectorAll('.hero-svg [fill^="url(#paint"]');
      gradientElements.forEach((el, i) => {
        if (i % 2 === 0) el.classList.add('parallax-element');
        if (i % 3 === 0) el.classList.add('gear-point');
        // Add different delay classes
        el.classList.add(`delay-${(i % 5) + 1}`);
      });
    };
  }
</script>
<template>
  <div class="bg-[url(@/assets/img/background.jpg)] bg-cover bg-center">
    <!--    mobile-->
    <div class="w-full container mx-auto text-primary flex flex-col gap-8 py-10 lg:hidden overflow-hidden">
      <div class="w-full lg:w-6/12 flex flex-col items-center">
        <h1 class="hero-title text-4xl leading-normal text-center opacity-0" v-html="content.title" ref="heroTitle"></h1>
        <p class="hero-description leading-[24px] pt-8 pb-10 text-center opacity-0" ref="heroDescription">
          {{ content.description }}
        </p>
        <BtnPrimary name="Let's Talk" link="/" class="hero-btn opacity-0" ref="heroButton" />
      </div>
      <div class="w-full lg:w-1/2 flex justify-center hero-container overflow-visible" ref="heroContainer">
        <!-- Mobile overlay for animations -->
        <svg class="hero-svg-overlay absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 z-20 pointer-events-none">
          <!-- Simplified overlay elements for mobile -->
          <circle cx="30%" cy="20%" r="8" class="overlay-circle fill-primary-200 opacity-30" />
          <circle cx="70%" cy="30%" r="6" class="overlay-circle fill-primary-200 opacity-30 delay-1" />
          <circle cx="50%" cy="70%" r="5" class="overlay-circle fill-primary-200 opacity-30 delay-2" />
          
          <!-- Tech connection points -->
          <circle cx="40%" cy="40%" r="4" class="tech-blink fill-primary-100" />
          <circle cx="60%" cy="50%" r="3" class="tech-blink fill-primary-100 delay-1" />
        </svg>
        
        <img src="@/assets/img/hero_illustrator.svg" alt="hero illustrator" class="hero-svg relative z-10 opacity-0 w-full max-w-md" ref="heroSvg">
       </div>
    </div>
    
    <!--    desktop-->
    <div class="w-full min-h-[750px] container mx-auto text-primary hidden lg:flex items-center py-10 overflow-hidden">
      <div class="w-full lg:w-6/12">
        <h1 class="hero-title text-[44px] leading-[64px] font-bold opacity-0" v-html="content.title" ref="heroTitle" />
        <p class="hero-description leading-[24px] pt-8 pb-10 opacity-0 max-w-xl" ref="heroDescription">
          {{ content.description }}
        </p>
        <BtnPrimary name="Let's Talk" link="/" class="hero-btn opacity-0" ref="heroButton" />
      </div>
      <div class="w-full lg:w-1/2 flex justify-end hero-container relative overflow-visible" ref="heroContainer">
        <!-- Overlay SVG for animations -->
        <svg class="hero-svg-overlay absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 z-20 pointer-events-none">
          <!-- Animated circles with improved positioning -->
          <circle cx="24%" cy="30%" r="8" class="overlay-circle fill-primary-200 opacity-30" />
          <circle cx="75%" cy="25%" r="6" class="overlay-circle fill-primary-200 opacity-30 delay-1" />
          <circle cx="60%" cy="70%" r="10" class="overlay-circle fill-primary-200 opacity-30 delay-2" />
          <circle cx="30%" cy="65%" r="5" class="overlay-circle fill-primary-200 opacity-30 delay-3" />
          <circle cx="85%" cy="45%" r="7" class="overlay-circle fill-primary-200 opacity-30 delay-4" />
          <circle cx="45%" cy="15%" r="4" class="overlay-circle fill-primary-200 opacity-30 delay-5" />
          
          <!-- Animated paths with improved flow -->
          <path d="M100,100 Q200,50 300,150 T500,100" class="overlay-path stroke-primary-300 opacity-30 hero-svg-path-trace" stroke-width="2" fill="none" />
          <path d="M200,200 Q300,150 350,250 T500,200" class="overlay-path stroke-primary-300 opacity-30 hero-svg-path-trace delay-1" stroke-width="2" fill="none" />
          <path d="M150,250 Q250,180 350,280 T450,250" class="overlay-path stroke-primary-300 opacity-30 hero-svg-path-trace delay-2" stroke-width="2" fill="none" />
          <path d="M70,150 Q150,80 250,180 T350,150" class="overlay-path stroke-primary-300 opacity-30 hero-svg-path-trace delay-3" stroke-width="2" fill="none" />
          
          <!-- Tech connection points -->
          <circle cx="40%" cy="40%" r="4" class="tech-blink fill-primary-100" />
          <circle cx="65%" cy="35%" r="3" class="tech-blink fill-primary-100 delay-1" />
          <circle cx="50%" cy="60%" r="5" class="tech-blink fill-primary-100 delay-2" />
          <circle cx="75%" cy="55%" r="2" class="tech-blink fill-primary-100 delay-3" />
          <circle cx="30%" cy="50%" r="3" class="tech-blink fill-primary-100 delay-4" />
          <circle cx="60%" cy="20%" r="4" class="tech-blink fill-primary-100 delay-5" />
          
          <!-- Interactive gear points -->
          <circle cx="45%" cy="45%" r="6" class="gear-point fill-primary-300 opacity-20" />
          <circle cx="60%" cy="40%" r="5" class="gear-point fill-primary-300 opacity-20 delay-1" />
          <circle cx="55%" cy="65%" r="7" class="gear-point fill-primary-300 opacity-20 delay-2" />
          <circle cx="35%" cy="25%" r="4" class="gear-point fill-primary-300 opacity-20 delay-3" />
          <circle cx="70%" cy="30%" r="5" class="gear-point fill-primary-300 opacity-20 delay-4" />
        </svg>
        
        <!-- Main SVG illustration -->
        <img src="@/assets/img/hero_illustrator.svg" alt="hero illustrator" class="hero-svg relative z-10 opacity-0 w-full max-w-xl" ref="heroSvg">
      </div>
    </div>
  </div>
</template>

<style lang="css">
/* Import SVG animations from the CSS file */
@import '~/assets/css/svg-animations.css';

/* Enhanced hero component styles */
.hero-title span {
  display: inline-block;
  transition: color 0.5s ease, text-shadow 0.5s ease;
}

/* Specific interaction styles */
.hero-container {
  position: relative;
  transform-style: preserve-3d;
  perspective: 1200px;
  overflow: visible;
}

/* Custom hover effect for the button */
.hero-btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(109, 40, 217, 0.2);
}

/* Custom styles for SVG animations */
.hero-svg {
  transform-origin: center;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero-svg:hover {
  transform: scale(1.03) translateY(-10px);
}

/* Enhanced path tracing styles */
.overlay-path {
  stroke-linecap: round;
  stroke-linejoin: round;
}

@media (max-width: 768px) {
  .hero-svg {
    max-width: 90%;
  }
  
  .hero-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 1rem;
    line-height: 1.5;
  }
}
</style>