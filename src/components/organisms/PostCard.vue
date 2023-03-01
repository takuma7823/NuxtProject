<script setup lang="ts">
type PostCardProps = {
  logo: string;
  storeName: string;
  storeNameKana: string;
  Images: string[];
  distance: string;
  openTime: string;
  closeTime: string;
  minPrice: string;
  maxPrice: string;
  discription: Text;
};

// MEMO propsを渡すときにコメントアウト外す
// defineProps<PostCardProps>();
</script>

<template>
  <v-card class="mx-auto" max-width="600" max-height="700">
    <v-card-title> カフェ国木田 </v-card-title>
    <v-card-subtitle> cafe kunikida </v-card-subtitle>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="400px" cover></v-img>

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
