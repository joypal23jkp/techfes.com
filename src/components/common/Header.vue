<script lang="ts" setup>
  import BtnPrimary from "~/components/common/BtnPrimary.vue";

  const links = [
    { name: 'Service', url: '/' },
    { name: 'Works', url: '/' },
    { name: 'About Us', url: '/' },
  ];
</script>
<template>
  <div class="w-full h-[100px] flex justify-between container mx-auto">
    <div class="w-1/5 flex-vertical-center">
      <img class="w-8 h-8 mr-2" src="@/assets/img/logo.png" alt="Logo">
      <h5 class="font-bold text-4xl leading-9">Techfes</h5>
    </div>
    <div class="w-1/2 flex justify-between">
      <ul class="inline-flex">
        <li v-for="link in links" class="font-semibold flex-vertical-center px-8">
          <NuxtLink :to="link.url">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex-vertical-center">
         <BtnPrimary name="Let's Talk" link="/" />
      </div>
    </div>
  </div>
</template>