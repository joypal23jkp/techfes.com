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
    width="16"
    height="16"
    viewBox="0 0 17 17"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.798872 5.6051C0.385088 5.46717 0.381125 5.24443 0.806799 5.10254L15.9369 0.0594494C16.3562 -0.0800638 16.5964 0.154572 16.4791 0.565185L12.1557 15.6944C12.0368 16.1138 11.7951 16.128 11.6175 15.7301L8.76857 9.31885L13.5247 2.97734L7.18319 7.73347L0.798872 5.6051V5.6051Z"
      fill="#3900B4"
    />
  </svg>
</template>

<style scoped></style>
