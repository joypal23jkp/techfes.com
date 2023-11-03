<script setup lang="ts">
interface Props {
  height?: number;
  width?: number;
  fill?: string;
}
const { height = 16, width = 16, fill = "none" } = defineProps<Props>();
</script>

<template>
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 932 333"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 50 260 Q 100 200, 180 260 T 360 190 Q 440 70, 520 135 T 660 60 Q 710 -50, 800 0 "
      stroke="#95C4FF"
      stroke-width="2.5"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped></style>
