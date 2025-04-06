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
    class="flex-center h-[40px] text-primary-foreground cursor-pointer nuxt-link btn-primary"
    :class="`bg-primary rounded ${props.className} ${ props.dynamic ? 'w-[40px] lg:w-[140px]' : 'w-[140px]' }`"
  >
    <span class="btn-text" :class="[ props.dynamic ? 'hidden lg:flex' : '' ]">{{ props.name }}</span>
    <slot name="icon">
      <svg
        width="13"
        height="13"
        class="btn-arrow mx-2"
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
      class="flex-center h-[40px] text-primary-foreground cursor-pointer button btn-primary"
      :class="`bg-primary rounded ${props.className} ${ props.dynamic ? 'w-[40px] lg:w-[140px]' : 'w-[140px]' }`"
      @click.prevent="handleButtonClick"
  >
    <span class="btn-text" :class="[ props.dynamic ? 'hidden lg:flex' : '' ]">{{ props.name }}</span>
    <slot name="icon">
      <svg
          width="13"
          height="13"
          class="btn-arrow mx-2"
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

<style lang="css" scoped>
.btn-primary {
  position: relative;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(57, 0, 180, 0.1);
  will-change: transform, box-shadow;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(255,255,255,0) 0%, 
    rgba(255,255,255,0.3) 50%, 
    rgba(255,255,255,0) 100%);
  transition: all 0.8s ease;
  z-index: 1;
}

.btn-primary:hover {
  background-color: #4612c0; /* Slightly darker shade of primary */
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 6px 15px rgba(57, 0, 180, 0.25);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 4px rgba(57, 0, 180, 0.2);
}

.btn-text {
  position: relative;
  z-index: 2;
  transition: letter-spacing 0.3s ease;
}

.btn-primary:hover .btn-text {
  letter-spacing: 0.5px;
}

.btn-arrow {
  position: relative;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-primary:hover .btn-arrow {
  transform: translateX(6px) rotate(10deg);
}

/* Shimmer effect for button */
.shimmer-effect.btn-primary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    -45deg, 
    rgba(255,255,255,0) 0%, 
    rgba(255,255,255,0.08) 25%, 
    rgba(255,255,255,0.15) 50%, 
    rgba(255,255,255,0.08) 75%, 
    rgba(255,255,255,0) 100%
  );
  transform: rotate(30deg);
  animation: shimmerButton 6s linear infinite;
  pointer-events: none;
  z-index: 1;
}

@keyframes shimmerButton {
  0% { transform: rotate(30deg) translateX(-100%); }
  100% { transform: rotate(30deg) translateX(100%); }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(57, 0, 180, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(57, 0, 180, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(57, 0, 180, 0);
  }
}

.btn-primary:focus {
  outline: none;
  animation: pulse 1.5s infinite;
}

/* Animated entry for button */
@keyframes buttonAppear {
  from { 
    opacity: 0; 
    transform: scale(0.9) translateY(10px);
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0);
  }
}

.button-appear {
  animation: buttonAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>
