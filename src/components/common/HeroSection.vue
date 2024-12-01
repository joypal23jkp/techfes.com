<script setup lang="ts">
  interface IProps {
    heroTitle: string;
    description: string;
  }
  const props = defineProps<IProps>();
</script>
<template>
  <div class="relative text-white">
    <section class="w-full min-h-[400px] bg-blue-900 relative">
      <section class="absolute w-full lg:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 class="text-center text-[44px] font-bold">{{ props.heroTitle }}</h1>
          <p class="text-center leading-loose">{{ props.description }}</p>
      </section>
      <svg  class="absolute -top-20" width="421" height="363" viewBox="0 0 421 363" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.1" x="-216.304" y="84.1077" width="244.385" height="645.284" rx="122.192" transform="rotate(-60 -216.304 84.1077)" fill="url(#paint0_linear_532_1467)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1467" x1="48.8012" y1="512.193" x2="-172.983" y2="508.055" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      <svg  class="absolute top-5 left-1/3" width="101" height="102" viewBox="0 0 101 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M101 50.6094C101 22.7697 78.4315 0.201172 50.5918 0.201172C22.7521 0.201172 0.183594 22.7697 0.183594 50.6094C0.183594 78.4491 22.7521 101.018 50.5918 101.018C78.4315 101.018 101 78.4491 101 50.6094ZM80.4635 50.6094C80.4635 67.107 67.0896 80.481 50.592 80.481C34.0944 80.481 20.7204 67.107 20.7204 50.6094C20.7204 34.1118 34.0944 20.7379 50.592 20.7379C67.0896 20.7379 80.4635 34.1118 80.4635 50.6094Z" fill="url(#paint0_linear_532_1461)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1461" x1="100.866" y1="101.018" x2="100.866" y2="0.469927" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.01"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
        </defs>
      </svg>

      <svg  class="absolute top-20 right-1/3" width="126" height="125" viewBox="0 0 126 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M125.019 62.2095C125.019 27.9038 97.2083 0.0935059 62.9026 0.0935059C28.5969 0.0935059 0.786613 27.9038 0.786613 62.2095C0.786613 96.5152 28.5969 124.325 62.9026 124.325C97.2083 124.325 125.019 96.5152 125.019 62.2095ZM99.7123 62.2094C99.7123 82.5387 83.2321 99.0189 62.9028 99.0189C42.5735 99.0189 26.0933 82.5387 26.0933 62.2094C26.0933 41.8801 42.5735 25.3999 62.9028 25.3999C83.2321 25.3999 99.7123 41.8801 99.7123 62.2094Z" fill="url(#paint0_linear_532_1464)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1464" x1="124.853" y1="124.325" x2="124.853" y2="0.424682" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.01"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
        </defs>
      </svg>

      <svg class="absolute -top-20 right-0" width="525" height="316" viewBox="0 0 525 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.1" x="514.836" y="-173.644" width="244.385" height="645.284" rx="122.192" transform="rotate(60 514.836 -173.644)" fill="url(#paint0_linear_532_1468)"/>
        <defs>
          <linearGradient id="paint0_linear_532_1468" x1="779.941" y1="254.442" x2="558.156" y2="250.304" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </section>
  </div>
</template>