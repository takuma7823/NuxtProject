<script setup lang="ts">
const emits = defineEmits<{ (e: 'update:searchViewSituation'): void }>();

const onClick = () => {
  emits('update:searchViewSituation');
};
</script>

<template>
  <div>
    <MoluculesSearchHeader @click="onClick" />

    <div class="search-body">
      <div class="search-body__section">
        <div class="search-body__section-title">エリア</div>
        <div class="search-body__section-row">
          <div>現在地から検索</div>
          <MoluculesButtonBar />
        </div>
      </div>
      <div class="section"></div>
      <div class="section"></div>
      <AtomsSwitch />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
