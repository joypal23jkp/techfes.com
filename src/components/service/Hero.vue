<script lang="ts" setup>
  const props = defineProps({
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });

</script>
<template>
  <div
      class="w-full min-h-[420px] text-primary-foreground flex flex-col justify-center items-center gap-2"
      style="background: linear-gradient(to left, #3900B4 100%, #3900B4 80%)"
  >
      <h1 class="font-heading font-bold text-4xl">{{ props.header }}</h1>
      <p class="text-base leading-6">{{ props.description }}</p>

    <svg viewBox="-12 -2 34 14" xmlns="http://www.w3.org/2000/svg">
<!--      <rect opacity="1" x="-216.304" y="84.1077" width="244.385" height="645.284" rx="122.192" transform="rotate(-60 -216.304 84.1077)" fill="red"/>-->
      <rect x="-216.304" y="84.1077" width="244.385" height="645.284" fill="red" transform="rotate(100, 10, 10)"  />
      <rect
          x="0"
          y="0"
          width="244"
          height="645"
          fill="green"
          transform="rotate(100, 10, 10)" />
<!--      <defs>-->
<!--        <linearGradient id="paint0_linear_532_1467" x1="48.8012" y1="512.193" x2="-172.983" y2="508.055" gradientUnits="userSpaceOnUse">-->
<!--          <stop stop-color="white"/>-->
<!--          <stop offset="1" stop-color="white" stop-opacity="0"/>-->
<!--        </linearGradient>-->
<!--      </defs>-->
    </svg>


<!--    <?svg version="1.0" standalone="no"?>-->
<!--    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">-->

<!--      <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>-->
<!--      <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>-->

<!--      <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>-->
<!--      <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>-->

<!--      <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>-->
<!--      <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"-->
<!--                stroke="orange" fill="transparent" stroke-width="5"/>-->

<!--      <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"-->
<!--               stroke="green" fill="transparent" stroke-width="5"/>-->

<!--      <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>-->
<!--    </svg>-->
  </div>
</template>
