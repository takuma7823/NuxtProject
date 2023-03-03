<script setup lang="ts">
import { useEventListener } from '@vueuse/core';

const inputLeftProperty = ref({ min: 0, max: 100, value: 25 });
const inputRightProperty = ref({ min: 0, max: 100, value: 75 });
const thumbLeftStyleObject = ref();
const thumbRightStyleObject = ref();
const rangeStyleObject = ref();

const inputLeft = ref(null);
const inputRight = ref(null);
const thumbLeft = ref(null);
const thumbRight = ref(null);
const range = ref(null);

onMounted(() => {
  const setLeftValue = () => {
    if (inputLeft.value && thumbLeft.value && inputRight.value && range.value) {
      inputLeftProperty.value.value = Math.min(inputLeftProperty.value.value, inputRightProperty.value.value - 1);
      const percent =
        ((inputLeftProperty.value.value - inputLeftProperty.value.min) /
          (inputLeftProperty.value.max - inputLeftProperty.value.min)) *
        100;
      thumbLeftStyleObject.value = { left: `${percent}'%'` };
      rangeStyleObject.value = { left: `${percent}'%'` };
    }
  };
  setLeftValue();

  const setRightValue = () => {
    if (inputLeft.value && thumbLeft.value && inputRight.value && range.value) {
      inputRightProperty.value.value = Math.max(inputRightProperty.value.value, inputLeftProperty.value.value + 1);

      const percent =
        ((inputRightProperty.value.value - inputRightProperty.value.min) /
          (inputRightProperty.value.max - inputRightProperty.value.min)) *
        100;

      thumbRightStyleObject.value = { right: `${percent}'%'` };
      rangeStyleObject.value = { right: `${percent}'%'` };
    }
  };
  setRightValue();

  if (inputLeft && inputRight && thumbLeft && thumbRight) {
    useEventListener(inputLeft.value, 'input', setLeftValue);
    useEventListener(inputRight.value, 'input', setRightValue);

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

    useEventListener(inputRight.value, 'mouseover', function () {
      thumbRight.value.classList.add('hover');
    });
    useEventListener(inputRight.value, 'mouseout', function () {
      thumbRight.value.classList.remove('hover');
    });
    useEventListener(inputRight.value, 'mousedown', function () {
      thumbRight.value.classList.add('active');
    });
    useEventListener(inputRight.value, 'mouseup', function () {
      thumbRight.value.classList.remove('active');
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
      />
      <input
        ref="inputRight"
        type="range"
        id="input-right"
        :min="inputRightProperty.min"
        :max="inputRightProperty.max"
        :value="inputRightProperty.value"
      />

      <div class="slider">
        <div class="track"></div>
        <div ref="range" class="range" :style="rangeStyleObject"></div>
        <div ref="thumbLeft" class="thumb left" :style="thumbLeftStyleObject"></div>
        <div ref="thumbRight" class="thumb right" :style="thumbRightStyleObject"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.middle {
  position: relative;
  width: 50%;
  max-width: 500px;
}

.slider {
  position: relative;
  z-index: 1;
  height: 10px;
  margin: 0 15px;
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #c6aee7;
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #6200ee;
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  background-color: #6200ee;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}
.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}
.slider > .thumb.right {
  right: 25%;
  transform: translate(15px, -10px);
}
.slider > .thumb.hover {
  box-shadow: 0 0 0 20px rgba(98, 0, 238, 0.1);
}
.slider > .thumb.active {
  box-shadow: 0 0 0 40px rgba(98, 0, 238, 0.2);
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
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none;
}
</style>
