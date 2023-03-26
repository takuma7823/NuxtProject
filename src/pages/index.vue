<script setup lang="ts">
import { distance } from '@/helpers/Distance';
const runtimeConfig = useRuntimeConfig();
const apiKey = ref<string>(runtimeConfig.public.apiKey);
// const radius = ref<string>('');
const storeIndex = ref<number>(0);
const storeArray = ref<string[]>([]);
const storeDetailsArray = ref<string[]>([]);
const isLoading = ref(false);
const currentLocation = reactive({
  latitude: 0,
  longitude: 0
});

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

// 節約のために初期値は配列に値が入らないようにしている
const { data: data } = await useFetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: apiKey.value,
    location: '35.78928207428572, 139.4560333981599',
    radius: '3',
    type: 'store',
    // keyword: 'cafe',
    language: 'ja',
  },
});

if (data?.value?.status === 'OK') {
  storeArray.value = data.value.results;

  await Promise.all(
    storeArray.value.map(async function (store) {
      const { data: data } = await useFetch('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
          key: apiKey.value,
          fields: 'photos',
          place_id: store.place_id,
        },
      });
      storeDetailsArray.value.push(data);
    })
  );
}

const storeInfo = computed(() => {
  if (storeArray.value[storeIndex.value]) {
    return storeArray.value[storeIndex.value];
  } else {
    return [];
  }
});

const photos = computed(() => {
  if (storeDetailsArray.value.length) {
    return storeDetailsArray.value[storeIndex.value].value.result.photos;
  } else {
    // MEMO 初期状態は空配列を返す。
    return [];
  }
});

const changeStore = (): void => {
  // 節約のため制御
  if (storeIndex.value < 1) {
    const storeLength = storeArray.value.length - 1;

    if (storeLength > storeIndex.value) {
      storeIndex.value = storeIndex.value + 1;
      storeInfo.data = storeArray.value[storeIndex.value];
    }
  }
};

const clickNo = (): void => {
  console.log('Noの時の処理を入れる');
  changeStore();
};

const clickFavorite = (): void => {
  console.log('お気に入りの時の処理を入れる');
  changeStore();
};

const searchStore = async (searchOptions: any) => {
  isLoading.value = true;

  if (searchOptions.searchFromCurrentLocation) {
    const position: any = await getPosition();

    if (!position) { return };

    currentLocation.latitude = position.coords.latitude;
    currentLocation.longitude = position.coords.longitude;

    const params = {
      key: apiKey.value,
      location: currentLocation.latitude + ', ' + currentLocation.longitude,
      radius: searchOptions.radius,
      type: 'store',
      keyword: searchOptions.type,
      language: 'ja',
    };

    const { data: data } = await useFetch('/api/maps/api/place/nearbysearch/json', {
      params: params
    });

    if (data?.value?.status === 'OK') {
      storeArray.value = data.value.results;

      sortStoreForDistance();

      await Promise.all(
        storeArray.value.map(async function (store, index) {
          // 節約のため2件目までしか取得しない
          if (index < 3) {
            const { data: data } = await useFetch('/api/maps/api/place/details/json', {
              params: {
                key: apiKey.value,
                fields: 'photos',
                place_id: store.place_id,
              },
            });
            storeDetailsArray.value.push(data);
          }
        })
      );

      storeIndex.value = 0;
    }
  } else {
    //他の検索方法
  }

  isLoading.value = false;
};

const sortStoreForDistance = async (): void  => {
  storeArray.value.forEach(store => {
    store['distance'] = distance(currentLocation.latitude, currentLocation.longitude, store.geometry?.location?.lat, store.geometry?.location?.lng);
  });

  storeArray.value = storeArray.value.sort(function(a, b) {
    return (a.distance < b.distance) ? -1 : 1;
  });
};

async function getPosition() {
  if (window.navigator.geolocation) {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  return false;
};

const loading = computed(() => {
  return isLoading.value;
});

</script>

<template>
  <div class="home">
    <OrganismsHomeHeader @update:searchViewSituation="openSearchView" />
    <OrganismsLoader :is-loading="loading"></OrganismsLoader>
    <div class="home-body">
      <OrganismsPostCard
        :store-info="storeInfo"
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
      <PagesSearch @update:closeSearchView="closeSearchView" @update:decideSearchOptions="searchStore" />
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
