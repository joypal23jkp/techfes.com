<template>
  <svg
    width="80"
    height="45"
    viewBox="0 0 80 45"
    fill="fill"
    xmlns="http://www.w3.org/2000/svg"
    class="morphing-arrow"
  >
    <!-- Straight line (initial state) -->
    <path
      d="M4 20 L76 20"
      stroke="#F2F2F2"
      stroke-width="2"
      class="arrow-line"
    />
    
    <!-- Curved arrow (final state) -->
    <g filter="url(#filter0_d_97_1726)" class="arrow-curved">
      <path
        d="M9.40685 29.7197C9.70882 28.7497 9.88145 28.1372 10.0912 27.5339C12.0785 21.8421 15.1241 16.7556 19.2938 12.4878C25.6309 6.00048 33.252 4.25678 41.7824 6.60344C42.173 6.71109 42.5682 6.82141 42.9298 6.92139C43.1339 6.76686 43.2924 6.67595 43.4118 6.55271C49.086 0.55861 55.7741 -0.311149 63.0576 2.43539C67.4521 4.09458 71.1542 6.85925 74.0921 10.6001C74.5606 11.1961 74.9584 11.8941 75.2108 12.6126C75.5222 13.4874 75.0712 14.3574 74.3533 14.5129C73.5217 14.692 73.2253 14.1346 72.9688 13.4604C72.7824 12.9707 72.5281 12.4723 72.1886 12.0799C68.4021 7.70694 63.75 4.77757 58.0359 3.84037C53.7209 3.13188 49.7855 4.18925 46.4378 7.23736C46.1809 7.47317 45.9888 7.78126 45.6814 8.15263C46.2994 8.54646 46.8492 8.88464 47.3863 9.23415C50.8603 11.4971 53.5202 14.4795 55.0307 18.427C56.1112 21.2463 56.4876 24.1387 55.3269 27.0799C53.7571 31.056 49.7027 32.8758 45.7993 31.3396C42.5998 30.0793 40.6114 27.6407 39.6108 24.3757C38.2503 19.9396 38.6431 15.5596 40.4503 11.2707C40.7035 10.6712 40.9694 10.076 41.2868 9.34884C40.6674 9.1319 40.1881 8.90365 39.6826 8.80031C32.7656 7.38792 26.5406 8.84735 21.4319 14.0417C17.2809 18.2613 14.23 23.2511 12.392 28.9526C12.2992 29.2411 12.2192 29.5339 12.159 29.829C12.1259 30.0029 12.1454 30.1858 12.1339 30.5812C12.5508 30.3364 12.9016 30.1962 13.1703 29.9611C14.2134 29.0488 15.2146 28.0933 16.2632 27.1874C16.8176 26.7085 17.4495 26.5493 17.9872 27.2047C18.4518 27.7703 18.2735 28.3453 17.8304 28.8365C17.3883 29.3315 16.8942 29.7741 16.4275 30.2484C14.6576 32.0559 12.8887 33.8671 11.1189 35.6746C11.0758 35.7179 11.0373 35.7638 10.9987 35.8098C10.5128 36.3757 9.97866 36.9039 9.17493 36.7066C8.30958 36.4949 8.03893 35.7501 7.85201 34.9546C7.57723 33.7833 7.34483 32.5964 6.98526 31.4565C6.1346 28.7659 5.22709 26.0949 4.3268 23.4219C3.84934 22.0008 3.98607 21.1863 4.7944 20.9156C5.58467 20.6499 6.29039 21.1607 6.79452 22.5195C7.47969 24.3774 8.09092 26.2635 8.74361 28.1303C8.89064 28.5564 9.08542 28.9575 9.40685 29.7197ZM44.0967 10.3992C40.7982 14.4613 40.6133 22.6354 43.6245 26.4972C44.525 27.6522 45.6357 28.4942 47.0311 28.9514C49.6986 29.8215 52.304 28.4732 53.0173 25.6872C53.3089 24.5396 53.4692 23.2559 53.2742 22.1096C52.3092 16.5089 48.8199 12.9402 44.0967 10.3992Z"
        fill="#F2F2F2"
      />
    </g>
    
    <!-- Arrow head for the straight line (initial state) -->
    <path
      d="M76 20 L70 15 M76 20 L70 25"
      stroke="#F2F2F2"
      stroke-width="2"
      class="arrow-head"
    />
    
    <defs>
      <filter
        id="filter0_d_97_1726"
        x="0.0516968"
        y="0.944946"
        width="79.2592"
        height="43.8038"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_97_1726"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_97_1726"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

interface Props {
  height?: number;
  width?: number;
  fill?: string;
  autoAnimate?: boolean;
}

const { height = 45, width = 80, fill = "none", autoAnimate = true } = defineProps<Props>();

onMounted(() => {
  if (autoAnimate) {
    // Add a slight delay before starting the animation
    setTimeout(() => {
      const svgElement = document.querySelector('.morphing-arrow');
      if (svgElement) {
        svgElement.classList.add('auto-animating');
      }
    }, 1500);
  }
});
</script>

<style scoped>
.morphing-arrow {
  position: relative;
  overflow: visible;
}

.arrow-curved {
  opacity: 0;
  transform-origin: center;
  transition: opacity 0.8s ease-in-out;
}

.arrow-line, .arrow-head {
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
}

/* Auto-animation that plays on load */
.morphing-arrow.auto-animating .arrow-curved {
  opacity: 1;
  animation: appearAndBounce 1s forwards;
}

.morphing-arrow.auto-animating .arrow-line,
.morphing-arrow.auto-animating .arrow-head {
  opacity: 0;
}

/* Apply hover animation */
.morphing-arrow:hover .arrow-curved {
  opacity: 1;
  animation: appearAndBounce 0.8s forwards;
}

.morphing-arrow:hover .arrow-line,
.morphing-arrow:hover .arrow-head {
  opacity: 0;
}

@keyframes appearAndBounce {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  80% {
    transform: scale(0.95);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
