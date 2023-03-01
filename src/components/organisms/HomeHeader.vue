<script setup lang="ts">
import Search from '../../assets/svgs/Search.svg';

type HomeHeaderProps = {
  distance: string;
  hitCount: number;
  alreadyViewedCount: number;
};

// MEMO propsを渡す時にコメントアウトを外す
// defineProps<HomeHeaderProps>();

const emits = defineEmits<{ (e: 'update:isOpenSearch'): void }>();

const onClick = () => {
  emits('update:isOpenSearch');
};
</script>

<template>
  <div class="home-header">
    <div class="home-header__navigation">
      <div class="home-header__navigation-text">
        <div class="home-header__navigation-text__distance">300m以内で検索</div>
        <div class="home-header__navigation-text__count">35/100 件</div>
      </div>
      <div class="home-header__progress-bar">
        <v-progress-linear model-value="45" height="21" color="grey-darken-2"></v-progress-linear>
      </div>
    </div>

    <div class="home-header__search">
      <Search @click="onClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-header {
  height: 60px;
  width: 100svw;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &__navigation {
    width: 300px;
    &-text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      &__distance {
        color: #6b6b6b;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
      }
      &__count {
        color: #000000;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  &__progress-bar {
    border-radius: 4px;
    overflow: hidden;
  }

  &__search {
    padding: 0px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
