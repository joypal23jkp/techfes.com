<!-- layout.vue | page.vue | component.vue -->

<template>
  <div>
    <h1 class="title">Nuxt Gsap</h1>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
})
</script>