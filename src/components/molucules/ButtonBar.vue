<script setup lang="ts"></script>
<template>
  <div class="button-bar">
    <AtomsButton :text="'すべてリセット'" />
    <AtomsButton :text="'この条件で検索'" style="background-color: #f1bf07" />
  </div>
</template>
<style lang="scss" scoped>
.button-bar {
  display: flex;
  justify-content: space-between;
  padding: 88px 42px;
}
</style>
