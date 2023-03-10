<template>
  <v-progress-linear
    v-if="isLoading"
    :indeterminate="true"
    color="#E9C042"
    height="4"
  ></v-progress-linear>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  isLoading: false,
}>();
</script>