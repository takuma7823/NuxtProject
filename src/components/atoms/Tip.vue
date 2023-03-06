<script setup lang="ts">
import { GoogleMapGenre } from '../../constants/googleMap/genres';
type TipProps = {
  genre: GoogleMapGenre;
  pushed: boolean;
};

const props = defineProps<TipProps>();

const emits = defineEmits<{
  (e: 'update:modelValue'): void;
}>();
</script>

<template>
  <div class="tip" :class="{ pushed: props.pushed }" @click="emits('update:modelValue', props.genre)">
    <div class="tip-text">{{ props.genre }}</div>
  </div>
</template>
<style lang="scss" scoped>
.tip {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  gap: 2px;
  height: 24px;
  left: 7px;
  top: 41px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 15px;
}

.tip-text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #6b6b6b;
}

.pushed {
  background: #fae7a0;
}
</style>
