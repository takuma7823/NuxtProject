<script setup lang="ts">
import CloseButton from '../../assets/svgs/closeButton.svg';
</script>
<template>
  <div class="search-header">
    <div class="search-header__title">検索画面</div>
    <CloseButton class="close-button" />
  </div>
</template>
<style lang="scss" scoped>
.search-header {
  position: relative;
  height: 60px;
  width: 100svw;
  display: flex;
  justify-content: center;
  &__title {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #6b6b6b;
  }
}

.close-button {
  position: absolute;
  top: 22px;
  left: 24px;
}
</style>
