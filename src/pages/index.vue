<template>
  <div>
    <NuxtLink :to="`/about`">about.vue</NuxtLink>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      class="parallax"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </div>
    </v-parallax>
    <div class="card_list">
      <v-card
        class="card_list_item mx-auto"
        max-width="344"
        variant="outlined"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              OVERLINE
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn variant="outlined">
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        class="card_list_item mx-auto"
        max-width="344"
        variant="outlined"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              OVERLINE
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn variant="outlined">
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        class="card_list_item mx-auto"
        max-width="344"
        variant="outlined"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              OVERLINE
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn variant="outlined">
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">

export default ({
  setup() {
    return {
    }
  }
})
</script>

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