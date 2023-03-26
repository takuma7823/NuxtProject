<script setup lang="ts">
import { PriceLevel } from '@/models/enum/PriceLevel';
// interface PostCardProps {
// logo: string;
// storeName: string;
// storeNameKana: string;
// photos: string[];
// distance: string;
// openTime: string;
// closeTime: string;
// minPrice: string;
// maxPrice: string;
// discription: Text;
// };
const runtimeConfig = useRuntimeConfig();
const apiKey = runtimeConfig.public.apiKey;
const photoUrlFond = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400';
const imgEl = ref(null)
const photoIndex = ref<number>(0);

const props = defineProps<{
  storeInfo: Object,
  photos: any[],
}>();

const getStoreName = computed((): string => {
  if (props.storeInfo.name) {
    return props.storeInfo.name;
  } else {
    return 'No Data';
  }
});

const getStoreDistance = computed((): string => {
  if (props.storeInfo.distance) {
    return props.storeInfo.distance;
  } else {
    return 'No Data';
  }
});

const getStoreOpen = computed((): string => {
  if (props.storeInfo.length !== 0) {
    if (props.storeInfo?.opening_hours?.open_now) {
      return 'Opening';
    } else {
      return 'Closing';
    }
  }

  return '0';
});

const getPriceLevel = computed((): string => {
  if (props.storeInfo?.length !== 0) {
    return PriceLevel[props.storeInfo?.price_level];
  }

  return '0';
});

const getStorePhotoUrl = computed((): string => {
  if (props.photos.length) {
    const photoReference = props.photos[photoIndex.value].photo_reference;
    return photoUrlFond + '&photoreference=' + photoReference + '&key=' + apiKey;
  } else {
    return '';
  }
});

const changePhoto = (event: any): void => {
  const touchX = event.changedTouches[0].clientX;
  const imageEl = imgEl.value?.$el;
  const imageWidth = imageEl.clientWidth;
  const imageCenter = imageWidth / 2;
  const photoLength = props.photos.length - 1;

  if (touchX > imageCenter && photoLength > photoIndex.value) {
    photoIndex.value = photoIndex.value + 1;
  } else if (touchX < imageCenter && photoIndex.value > 0) {
    photoIndex.value = photoIndex.value - 1;
  }
};

</script>

<template>
  <v-card
    class="postcard"
  >
    <v-card-title>{{ getStoreName }}</v-card-title>

    <v-img
      v-if="getStorePhotoUrl"
      ref="imgEl"
      :src="getStorePhotoUrl"
      @touchstart="changePhoto"
      height="400px" cover
    />
    <v-img
      v-else
      height="400px" cover
    />

    <v-card-subtitle>{{ getStoreDistance }}</v-card-subtitle>
    <v-card-subtitle v-if="getStoreOpen !== '0'">{{ getStoreOpen }}</v-card-subtitle>
    <v-card-subtitle v-if="getPriceLevel !== '0'">Price：{{ getPriceLevel }}</v-card-subtitle>

    <v-card-text>
      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping,
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.postcard {
  border-radius: 24px;
}
</style>
