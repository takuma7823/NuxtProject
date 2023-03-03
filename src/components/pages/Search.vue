<script setup lang="ts">
const emits = defineEmits<{ (e: 'update:searchViewSituation'): void }>();

const onClick = () => {
  emits('update:searchViewSituation');
};
</script>

<template>
  <div>
    <MoluculesSearchHeader @click="onClick" />
    <AtomsSwitch />
    <MoluculesButtonBar />
  </div>
</template>

<style lang="scss" scoped>
.search {
  background-color: white;
}
</style>
