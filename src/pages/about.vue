<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()
  const apiKey = runtimeConfig.public.apiKey
  const photoUrlFond = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400'
  const radius = ref<string>('')
  const storeIndex = ref<number>(0)
  const storeArray = ref<string[]>([])
  let storeInfo = reactive( {data: null} )

  const searchStore = async () => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const params = new URLSearchParams({
      key: apiKey,
      location: '35.78928207428572, 139.4560333981599',
      radius: '30',
      type: 'store',
      language: 'ja'
    })
    const res = await fetch(url + params.toString())
    // CORS問題発生
    console.log('res',res)
  }

  const { data: data } = await useFetch(
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    {
      params: {
        key: apiKey,
        location: '35.78928207428572, 139.4560333981599',
        radius: '30',
        type: 'store',
        language: 'ja'
      }
    }
  )
  storeArray.value = data.value.results
  storeInfo.data = storeArray.value[storeIndex.value]

  const getStorePhotoUrl = computed((): string => {
    if (storeInfo.data.hasOwnProperty('photos')) {
      const photoReference = storeInfo.data.photos[0].photo_reference

      return photoUrlFond + '&photoreference=' + photoReference + '&key=' + apiKey
    }

    return ''
  })

  const getStoreName = computed((): string => {
    return storeInfo.data.name
  })

  const changeStore = (): void => {
    storeIndex.value = storeIndex.value + 1
    storeInfo.data = storeArray.value[storeIndex.value]
  }
</script>

<template>
  <div class="about">
    <NuxtLink :to="`/`">index.vue</NuxtLink>

    <div class="search">
      <input v-model="radius" type="text" class="radius">
      <button @click="searchStore()">検索</button>
    </div>

    <div v-if="storeInfo" class="result">
      <p>{{ getStoreName }} </p>
      <img v-if="getStorePhotoUrl" :src="getStorePhotoUrl">
      <p v-else>No Image</p>
      <button @click="changeStore()">Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    margin: 50px auto;
  }
  .radius {
    border: solid 1px;
  }
</style>