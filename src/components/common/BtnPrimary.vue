<script lang="ts" setup>
interface PrimaryButton {
  name: string;
  className?: string;
  link?: string;
  externalLink?: string;
  iconColor?: string;
  dynamic?: boolean;
}
const props = withDefaults(defineProps<PrimaryButton>(), {
  className: '',
  iconColor: "white",
  dynamic: false
});
const emits = defineEmits<{
  (e: "onButtonClicked", payload: { event: Event; data: PrimaryButton }): void;
}>();
const handleButtonClick = (event: Event) => {
  const params = { event, data: props };
  emits("onButtonClicked", params);
};
</script>
<template>
  <NuxtLink
    v-if="props?.link || props?.externalLink"
    :to="props?.link || props?.externalLink"
    :target="props?.externalLink && '_black'"
    class="flex-center h-[40px] text-primary-foreground cursor-pointer"
    :class="`bg-primary rounded ${props.className} ${ props.dynamic ? 'w-[40px] lg:w-[140px]' : 'w-[140px]' }`"
  >
    <span :class="[ props.dynamic ? 'hidden lg:flex' : '' ]">{{ props.name }}</span>
    <slot name="icon">
      <svg
        width="13"
        height="13"
        class="mx-2"
        viewBox="0 0 13 14"
        :fill="iconColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z"
          fill="white"
        />
      </svg>
    </slot>
  </NuxtLink>

  <button
    v-else
    class="flex-center h-[40px] text-primary-foreground cursor-pointer"
    :class="`bg-primary rounded ${props.className} ${ props.dynamic ? 'w-[40px] lg:w-[140px]' : 'w-[140px]' }`"
    @click.prevent="handleButtonClick"
  >
    <span :class="[ props.dynamic ? 'hidden lg:flex' : '' ]">{{ props.name }}</span>
    <slot name="icon">
      <svg
        width="13"
        height="13"
        class="mx-2"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.0549316V2.05493H9.59L0 11.6449L1.41 13.0549L11 3.46493V12.0549H13V0.0549316H1Z"
          fill="white"
        />
      </svg>
    </slot>
  </button>
</template>
