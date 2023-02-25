<template>
  <div class="about">
    <NuxtLink :to="`/`">index.vue</NuxtLink>
    <v-sheet width="300" class="mx-auto">
      <v-text-field
        v-model="state.form"
        @focus="resetForm"
        label="入力してね"
      />
      <v-btn @click="setText" block class="mt-2">Submit</v-btn>
    </v-sheet>
    <div
    v-if="state.text"
      class="about_text d-flex justify-center"
    >
      <v-card width="300px">
        <v-card-text>
          {{ state.text }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default ({
  setup() {
    const state = reactive({
      text: '',
      form: ''
    })

    const setText = () => {
      if (state.form === 'delete') {
        state.text = ''
      } else {
        state.text = state.form
      }
    }

    const resetForm = () => {
      state.form = ''
    }

    return {
      state,
      setText,
      resetForm,
    }
  }
})
</script>

<style lang="scss" scoped>
  .about {
    margin: 50px auto;
    &_text {
      margin-top: 50px;
    }
  }
</style>