<script setup lang="ts">
import HomeHeader from '../components/organisms/HomeHeader.vue';
import HomeFooter from '../components/organisms/HomeFooter.vue';
import PostCard from '../components/organisms/PostCard.vue';
import Slider from '../components/molucules/Slider.vue';

// MEMO hookで切り出しても良いとは思っている。
const searchViewSituation = ref<'open' | 'close' | 'default'>('default');
const openSearchView = () => {
  searchViewSituation.value = 'open';
};
const closeSearchView = () => {
  searchViewSituation.value = 'close';
  setTimeout(() => {
    searchViewSituation.value = 'default';
  }, 200);
};
</script>

<template>
  <div class="home">
    <HomeHeader @update:searchViewSituation="openSearchView" />
    <div class="home-body">
      <PostCard />
    </div>
    <HomeFooter />
  </div>
  <div class="search" :class="searchViewSituation">
    <PagesSearch @update:searchViewSituation="closeSearchView" />
    <Slider />
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100svh;
  width: 100svw;
}

.search {
  position: absolute;
  top: 0;
  left: 0;
  height: 100svh;
  width: 100svw;
  background-color: white;
  z-index: 1000;
  display: none;
}

// MEMO 以下のアニメーションはいづれアニメーションファイルで切り出しても良いと思っている
/* CSSアニメーションの指定 */
.open {
  display: inherit;
  animation: SlideIn 0.2s ease-out 0s 1 normal forwards;
}

.close {
  display: inherit;
  animation: SlideOut 0.2s ease-out 0s 1 normal forwards;
}

/* CSSアニメーションの設定 */
@keyframes SlideIn {
  0% {
    transform: translateY(100svh);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes SlideOut {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100svh);
  }
}
</style>
