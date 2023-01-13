<script lang="ts" setup>
interface PrimaryButton {
  name: string;
  className?: string;
  link?: string;
  externalLink?: string
}
const props = withDefaults(defineProps<PrimaryButton>(), {
  className: 'bg-primary-400 rounded'
});
const emits = defineEmits<{
  (e: 'onButtonClicked', payload: { event: Event, data: PrimaryButton }): void
}>();
const handleButtonClick = (event: Event) => {
  const params = { event, data: props }
  emits('onButtonClicked', params)
}
</script>
<template>
  <NuxtLink
      v-if="props?.link || props?.externalLink"
      :to="props?.link || props?.externalLink"
      :class="props.className"
      :target="props?.externalLink && '_black'"
      class="h-[48px] w-[165px] font-bold text-light flex-center"
  >
    {{ props.name }}
    <slot name="icon">
      <svg width="13" height="13" class="mx-2" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" fill="white"/>
      </svg>
    </slot>
  </NuxtLink>

  <button
      v-else
      class="h-[48px] w-[165px] bg-primary font-bold text-light rounded flex-center"
      @click.prevent="handleButtonClick"
  >
    {{ props.name }}
    <slot name="icon">
      <svg width="13" height="13" class="mx-2" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z" fill="white"/>
      </svg>
    </slot>
  </button>
</template>