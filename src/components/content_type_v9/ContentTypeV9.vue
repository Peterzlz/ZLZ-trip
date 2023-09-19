<script setup lang="ts">
defineProps({
  typeV9Data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="type-v9">
    <h2>{{ typeV9Data.houseName }}</h2>
  </div>
</template>

<style lang="less" scoped></style>
