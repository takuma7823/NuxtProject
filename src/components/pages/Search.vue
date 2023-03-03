<script setup lang="ts">
const emits = defineEmits<{ (e: 'update:searchViewSituation'): void }>();

const onClick = () => {
  emits('update:searchViewSituation');
};
</script>

<template>
  <div>
    <div @click="onClick">閉じる</div>
    <div class="search">検索画面</div>
    <AtomsSwitch />
    <MoluculesButtonBar />
  </div>
</template>

<style lang="scss" scoped>
.search {
  background-color: white;
}
</style>
