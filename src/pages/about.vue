<script setup>
import Table from '~/components/Table.vue';

defineProps({
  msg: String,
});

const tableData = reactive({
  tCols: [
    {
      id: 1,
      label: 'Name',
      key: 'name',
    },
    {
      id: 2,
      label: 'Email',
      key: 'email',
      rend: (row, col) => {
        return {
          name: 'Test',
          props: {}
        };
      }
    },
  ],
  tBody: [
    {
      id: 1,
      name: 'faisal',
      email: 'faisal@softzino.com',
    },
    {
      id: 1,
      name: 'faisal-',
      email: 'faisal-@softzino.com',
    },
  ],
});

const count = ref(0);

const Test = import('../components/Test.vue');
</script>

<template>
  <h1>{{ msg }}</h1>

  <Table :t-cols="tableData.tCols" :t-body="tableData.tBody" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
