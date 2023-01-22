<template>
  <table>
    <thead>
    <tr>
      <th v-for="col in props.tCols" :key="col.id">{{ col.label }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in props.tBody" :key="row.id">
      <td v-for="col in props.tCols" :key="col.id">
        <div v-if="col?.rend">
          <Component :is="col.rend(row, col).name"></Component>
        </div>
        <div v-else>{{row[col.key]}}</div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const Component = ref('Test');
type TableRenderFunction = (row: any, col: any) => string | unknown

const props = defineProps<{
  tCols?: {
    id: number;
    label: string;
    key: string;
    rend?: TableRenderFunction
  }[];
  tBody?: []
}>();
</script>
