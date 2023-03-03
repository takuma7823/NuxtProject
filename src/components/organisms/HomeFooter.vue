<script setup lang="ts">
import FavoriteButton from '../../assets/svgs/FavoriteButton.svg';
import GoButton from '../../assets/svgs/GoButton.svg';
import NoButton from '../../assets/svgs/NoButton.svg';

const emits = defineEmits(['change-store']);

const changeStore = (): void => {
  emits('change-store');
}
</script>

<template>
  <div class="home-footer">
    <div class="home-footer__button-bar">
      <NoButton
        @click="changeStore()"
      />
      <GoButton />
      <FavoriteButton
        @click="changeStore()"
      />
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
