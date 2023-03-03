<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const apiKey = runtimeConfig.public.apiKey;
// const radius = ref<string>('');
const storeIndex = ref<number>(0);
const storeArray = ref<string[]>([]);
const storeDetailsArray = ref<string[]>([]);

const { data: data } = await useFetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: apiKey,
    location: '35.78928207428572, 139.4560333981599',
    radius: '30',
    type: 'store',
    language: 'ja',
  },
});

storeArray.value = data.value.results;

await Promise.all(
  storeArray.value.map(async function (store) {
    const { data: data } = await useFetch('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        key: apiKey,
        fields: 'photos',
        place_id: store.place_id,
      },
    });
    storeDetailsArray.value.push(data);
  })
);

const storeInfo = computed(() => {
  if (storeArray.value[storeIndex.value]) {
    return storeArray.value[storeIndex.value];
  } else {
    return [];
  }
});

const photos = computed(() => {
  if (storeDetailsArray.value[storeIndex.value].value.result.photos) {
    return storeDetailsArray.value[storeIndex.value].value.result.photos;
  } else {
    // MEMO 初期状態は空配列を返す。
    return [];
  }
});

const changeStore = (): void => {
  const storeLength = storeArray.value.length - 1;

  if (storeLength > storeIndex.value) {
    storeIndex.value = storeIndex.value + 1;
    storeInfo.data = storeArray.value[storeIndex.value];
  }
};
</script>

<template>
  <div class="home">
    <HomeHeader @update:searchViewSituation="openSearchView" />
    <div class="home-body">
      <OrganismsPostCard
        :storeInfo="storeInfo"
        :photos="photos"
      />
    </div>
    <OrganismsHomeFooter
      @change-store="changeStore"
    />
  </div>
  <div class="search" :class="searchViewSituation">
    <PagesSearch @update:searchViewSituation="closeSearchView" />
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
