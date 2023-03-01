<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig();
  const apiKey = runtimeConfig.public.apiKey;
  // const photoUrlFond = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400';
  // const radius = ref<string>('');
  const storeIndex = ref<number>(0);
  const storeArray = ref<string[]>([]);
  const storeDetailsArray = ref<string[]>([]);
  let storeInfo = reactive({ data: null });

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

  await Promise.all(storeArray.value.map(async function (store) {
    const { data: data } = await useFetch('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        key: apiKey,
        fields: 'photos',
        place_id: store.place_id
      }
    });
    storeDetailsArray.value.push(data);
  }));

  console.log('storeDetailsArray.value',storeDetailsArray.value);
</script>

<template>
  <div>
    <OrganismsHomeHeader />
    <div class="home-body">
      <OrganismsPostCard />
    </div>
    <OrganismsHomeFooter />
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
