<script setup lang="ts">
import { googleMapGenres } from '~~/constants/googleMap/genres';
const emits = defineEmits<{ (e: 'update:searchViewSituation'): void }>();

const onClick = () => {
  emits('update:searchViewSituation');
};
</script>

<template>
  <div>
    <MoluculesSearchHeader @click="onClick" />

    <div class="search-body">
      <!-- エリア -->
      <div class="search-body__section">
        <div class="search-body__section-title">エリア</div>
        <div class="search-body__section-contents">
          <div>
            <div class="search-body__section-row">
              <div>現在地から検索</div>
              <AtomsSwitch />
            </div>
          </div>
          <div>
            <div class="search-body__section-row">
              <div class="serch-body__section-row__left">住所から検索</div>
              <AtomsSwitch />
            </div>
            <div class="search-body__section-row">
              <div class="serch-body__section-row__left">駅名検索</div>
              <div>未選択</div>
            </div>
            <div class="search-body__section-row">
              <div class="serch-body__section-row__left">住所入力</div>
              <div>未入力</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 距離 -->
      <div class="search-body__section">
        <div class="search-body__section-title">距離</div>
        <div>
          <div class="search-body__section-row">
            <div>住所から</div>
            <div>300m以内</div>
          </div>
        </div>
        <div>
          <div class="search-body__section-row">
            <MoluculesSlider />
          </div>
        </div>
      </div>

      <!-- 価格帯 -->
      <div class="search-body__section">
        <div class="search-body__section-title">価格帯</div>
        <div>
          <div class="search-body__section-row end">
            <div>¥1000 ~ 2000</div>
          </div>
        </div>
        <div>
          <div class="search-body__section-row">
            <MoluculesScopeBar />
          </div>
        </div>
      </div>

      <!-- ジャンル -->
      <div class="search-body__section">
        <div class="search-body__section-title">ジャンル</div>
        <div>
          <div class="search-body__section-row genres">
            <template v-for="genre in googleMapGenres">
              <AtomsTip :genre="genre" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MoluculesButtonBar />
</template>

<style lang="scss" scoped>
.search-body {
  width: 100svw;

  &__section {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
    &-title {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 16px;
      display: flex;
      align-items: center;
    }
    &-row {
      display: flex;
      justify-content: space-between;
      padding-right: 12px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #6b6b6b;
      &__left {
        width: 84px;
        text-align: right;
      }
    }
  }

  .end {
    justify-content: end;
  }

  .genres {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 6px;
  }
}
</style>
