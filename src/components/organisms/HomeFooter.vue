<script setup lang="ts">
import FavoriteButton from '../../assets/svgs/FavoriteButton.svg';
import GoButton from '../../assets/svgs/GoButton.svg';
import NoButton from '../../assets/svgs/NoButton.svg';
</script>

<template>
  <div class="home-footer">
    <div class="home-footer__button-bar">
      <NoButton />
      <GoButton />
      <FavoriteButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-footer {
  height: 74px;
  width: 100svw;
  padding: 0 36px;
  &__button-bar {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
