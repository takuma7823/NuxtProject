<script setup lang="ts">
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
  photos: any[]
}>();

const getStoreName = computed((): string => {
  return props.storeInfo.name;
});

const getStorePhotoUrl = computed((): string => {
  const photoReference = props.photos[photoIndex.value].photo_reference;
  return photoUrlFond + '&photoreference=' + photoReference + '&key=' + apiKey;
});

const changePhoto = (event): void => {
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
}
</script>

<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-title>{{ getStoreName }}</v-card-title>
    <v-card-subtitle> sub title </v-card-subtitle>
    <v-img
      ref="imgEl"
      :src="getStorePhotoUrl"
      @touchstart="changePhoto"
      height="600px" cover
    />

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-text>
      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping,
      soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and
      two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped></style>
