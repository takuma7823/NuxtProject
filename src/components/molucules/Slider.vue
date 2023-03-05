<script setup lang="ts">
import { useEventListener } from '@vueuse/core';

const inputLeftProperty = ref({ min: 0, max: 100, value: 0 });
const thumbLeftStyleObject = ref({ left: '0%' });
const rangeStyleObject = ref({ left: '0%', right: '0%' });

const inputLeft = ref(null);
const thumbLeft = ref(null);
const range = ref(null);

onMounted(() => {
  const setLeftValue = () => {
    if (inputLeft.value && thumbLeft.value && range.value) {
      console.log(inputLeftProperty.value);
      inputLeftProperty.value.value = inputLeftProperty.value.value;
      const percent =
        ((inputLeftProperty.value.value - inputLeftProperty.value.min) /
          (inputLeftProperty.value.max - inputLeftProperty.value.min)) *
        100;
      thumbLeftStyleObject.value.left = `${percent}%`;
      rangeStyleObject.value.left = `${percent}%`;
    }
  };
  setLeftValue();

  if (inputLeft && thumbLeft) {
    useEventListener(inputLeft.value, 'input', setLeftValue);

    useEventListener(inputLeft.value, 'mouseover', function () {
      thumbLeft.value.classList.add('hover');
    });
    useEventListener(inputLeft.value, 'mouseout', function () {
      thumbLeft.value.classList.remove('hover');
    });
    useEventListener(inputLeft.value, 'mousedown', function () {
      thumbLeft.value.classList.add('active');
    });
    useEventListener(inputLeft.value, 'mouseup', function () {
      thumbLeft.value.classList.remove('active');
    });
  }
});
</script>

<template>
  <div class="middle">
    <div class="multi-range-slider">
      <input
        ref="inputLeft"
        type="range"
        id="input-left"
        :min="inputLeftProperty.min"
        :max="inputLeftProperty.max"
        :value="inputLeftProperty.value"
        @input="inputLeftProperty.value = $event.target.value"
      />

      <div class="slider">
        <div class="track"></div>
        <div ref="range" class="range" :style="rangeStyleObject"></div>
        <div ref="thumbLeft" class="thumb left" :style="thumbLeftStyleObject"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.middle {
  position: relative;
  width: 100%;
}

.slider {
  position: relative;
  z-index: 1;
  height: 4px;
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #f1bf07;
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #d9d9d9;
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 22px;
  height: 22px;
  background-color: white;
  border: 2px solid #f1bf07;
  border-radius: 50%;
}
.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}

input[type='range'] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0;
}
input[type='range']::-webkit-slider-thumb {
  pointer-events: all;
  width: 22px;
  height: 22px;
  border-radius: 0;
  border: 0 none;
  -webkit-appearance: none;
}
</style>
