<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const show = defineModel<boolean>();
const target = ref<HTMLElement | null>();

onClickOutside(target, event => {
  show.value = !show
});

</script>

<template>
  <div
      v-if="show"
      ref="target"
      class="w-3/5 h-screen fixed right-0 top-0 shadow-gray-200 shadow-lg lg:hidden z-[999] bg-white"
      v-bind="$attrs"
  >
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li>
        <NuxtLink
            to="/service"
            class="nav-link"
            aria-current="page"
        >
          Services
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
            to="/work"
            class="nav-link"
        >
          Works
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
            to="/process"
            class="nav-link"
        >
          Process
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
            to="/about"
            class="nav-link"
        >
          About Us
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
            to="/contact-us"
            class="nav-link"
        >
          Contact Us
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #4a5568; /* Gray 700 */
  border-bottom: 2px solid transparent; /* For underline effect */
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.nav-link:hover {
  color: #2b6cb0; /* Primary Color */
  border-color: #2b6cb0; /* Primary Color for underline */
}

.dark .nav-link {
  color: #a0aec0; /* Gray 400 */
}

.dark .nav-link:hover {
  background-color: #4a5568; /* Dark Gray */
  color: white;
}

.router-link-exact-active {
  color: #2b6cb0; /* Primary Color */
  border-color: #2b6cb0; /* Primary Color for underline */
}
</style>