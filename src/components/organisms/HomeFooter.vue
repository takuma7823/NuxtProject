<script setup lang="ts">
import FavoriteButton from '../../assets/svgs/FavoriteButton.svg';
import GoButton from '../../assets/svgs/GoButton.svg';
import NoButton from '../../assets/svgs/NoButton.svg';

const emits = defineEmits([
  'click-no',
  'click-favorite'
]);

const clickNo = (): void => {
  emits('click-no');
}

const clickFavorite = (): void => {
  emits('click-favorite');
}
</script>

<template>
  <div class="home-footer">
    <div class="home-footer__button-bar">
      <NoButton
        @click="clickNo()"
      />
      <GoButton />
      <FavoriteButton
        @click="clickFavorite()"
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
