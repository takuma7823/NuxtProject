<script setup lang="ts">
import FavoriteButton from '../../assets/svgs/FavoriteButton.svg';
import GoButton from '../../assets/svgs/GoButton.svg';
import NoButton from '../../assets/svgs/NoButton.svg';
</script>

<template>
  <div class="home-footer">
    <NoButton />
    <GoButton />
    <FavoriteButton />
  </div>
</template>

<style lang="scss" scoped>
.home-footer {
  height: 56px;
}
</style>
