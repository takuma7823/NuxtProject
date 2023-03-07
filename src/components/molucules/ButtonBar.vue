<script setup lang="ts">
const emits = defineEmits<{
  (e: 'update:reset'): void;
}>();
</script>
<template>
  <div class="button-bar">
    <AtomsButton :text="'すべてリセット'" @click="emits('update:reset')" />
    <AtomsButton :text="'この条件で検索'" style="background-color: #f1bf07" />
  </div>
</template>
<style lang="scss" scoped>
.button-bar {
  display: flex;
  justify-content: space-between;
  padding: 42px;
}
</style>
