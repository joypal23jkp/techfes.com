<template>
<div>
  <button v-show="loggedIn" data-testid="logout">Logout</button>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const loggedIn = ref(false);

async function getUserInfo() {
  return {
    name: 'hello'
  }
}
async function getAccounts(userName: string) {
  
}

getUserInfo().then(res => {

})

</script>

<style scoped>
  
</style>