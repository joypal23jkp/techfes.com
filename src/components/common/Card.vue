<script lang="ts" setup>
interface Card {
  className?: string,
  height?: string;
  width?: string;
  backgroundColor?: string;
}
const {
  className = '',
  height = '400px',
  width = '370px',
  backgroundColor = 'bg-light'
} = defineProps<Card>();
const classList = ref(`h-[${height}] w-[${width}] ${backgroundColor} ${className}`);
</script>
<template>
  <div class="rounded-[12px] border border-gray-light" :class="classList">
    <slot />
  </div>
</template>