<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const apiKey = runtimeConfig.public.apiKey;
// const radius = ref<string>('');
const storeIndex = ref<number>(0);
const storeArray = ref<string[]>([]);
const storeDetailsArray = ref<string[]>([]);

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

const { data: data } = await useFetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: apiKey,
    location: '35.78928207428572, 139.4560333981599',
    radius: '10',
    type: 'store',
    // keyword: 'cafe',
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

const clickNo = (): void => {
  console.log('No');
  changeStore();
};

const clickFavorite = (): void => {
  console.log('お気に入り');
  changeStore();
};

const log = (searchOptions) => {
  console.log(searchOptions);
};
</script>

<template>
  <div class="home">
    <OrganismsHomeHeader @update:searchViewSituation="openSearchView" />
    <div class="home-body">
      <OrganismsPostCard
        :storeInfo="storeInfo"
        :photos="photos"
        class="postcard"
      />
    </div>
    <OrganismsHomeFooter
      @click-no="clickNo"
      @click-favorite="clickFavorite"
      class="home-footer"
    />
    <div class="search" :class="searchViewSituation">
    <PagesSearch @update:closeSearchView="closeSearchView" @update:decideSearchOptions="log" />
  </div>
  </div>
</template>

<style lang="scss" scoped>
.postcard {
  margin: 12vw 2vw 0;
}

.home {
  height: 100svh;
  width: 100svw;
  background-color: #f5f5f5;
}

.home-footer {
  position: absolute;
  bottom: 0;
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
