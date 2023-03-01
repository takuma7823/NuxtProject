<script setup lang="ts">
import HomeHeader from '../components/organisms/HomeHeader.vue';
import HomeFooter from '../components/organisms/HomeFooter.vue';
import PostCard from '../components/organisms/PostCard.vue';
</script>

<template>
  <div>
    <HomeHeader />
    <div class="home-body">
      <PostCard />
    </div>
    <HomeFooter />
  </div>
</template>

<style lang="scss" scoped>
.parallax {
  margin: 50px 150px;
  height: 600px;
}
.card_list {
  display: flex;
  width: 1350px;
  margin: 0 auto;
  &_item {
    padding: 20px 50px;
  }
}
</style>
