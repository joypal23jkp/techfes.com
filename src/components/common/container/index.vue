<script lang="ts" setup>
interface Props {}
const {} = defineProps<Props>();
const classes = "container relative h-[280px] w-full bg-primary-400 text-light";
useAttrs();
</script>
<template>
  <CommonCard>
    <div :class="`${$attrs?.class} ${classes}`">
      <slot>
        <div class="flex h-full w-full items-center justify-center opacity-50">
          Empty Content
        </div>
      </slot>
    </div>
  </CommonCard>
</template>
