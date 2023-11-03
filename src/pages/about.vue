opn
<script setup lang="ts">
useHead({
  title: "TechFes | About Page",
});
</script>
<template>
  <div>
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <!--      <path d="M 10 10 H 90 V 90 H 10 L 10 10" />-->
      <!-- Points -->
      <circle cx="10" cy="10" r="2" fill="red" />
      <circle cx="90" cy="90" r="2" fill="red" />
      <circle cx="90" cy="10" r="2" fill="red" />
      <circle cx="10" cy="90" r="2" fill="red" />

      <!--      <path-->
      <!--        d="M 10 10 H 90 V 90 h -70  L 10 10"-->
      <!--        fill="transparent"-->
      <!--        stroke="black"-->
      <!--      />-->
      <path
        d="M 10 10 C 20 20, 30 40, 50 10"
        stroke="black"
        fill="transparent"
      />
    </svg>
  </div>
</template>
