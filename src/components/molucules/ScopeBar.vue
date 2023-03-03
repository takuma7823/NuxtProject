<script setup lang="ts">
const inputLeftProperty = ref({ min: 0, max: 100, value: 25 });
const inputRightProperty = ref({ min: 0, max: 100, value: 75 });
const thumbLeftStyleObject = ref();
const rangeStyleObject = ref();

onMounted(() => {
  const inputLeft = document.getElementById('input-left');
  const inputRight = document.getElementById('input-right');
  const thumbLeft = document.querySelector('.slider > .thumb.left');
  const thumbRight = document.querySelector('.slider > .thumb.right');
  const range = document.querySelector('.slider > .range');

  function setLeftValue() {
    if (inputLeft && thumbLeft && inputRight && range) {
      inputLeftProperty.value.value = Math.min(inputLeftProperty.value.value, inputRightProperty.value.value - 1);
      const percent =
        ((inputLeftProperty.value.value - inputLeftProperty.value.min) /
          (inputLeftProperty.value.max - inputLeftProperty.value.min)) *
        100;

      thumbLeftStyleObject.value = { left: `${percent}'%'` };
      rangeStyleObject.value = { left: `${percent}'%'` };
    }
  }
  setLeftValue();

  // function setRightValue() {
  //   let _this = inputRight;
  //   if (inputLeft && thumbRight && inputRight && range) {
  //     (min = parseInt(_this.min)), (max = parseInt(_this.max));

  //     _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  //     let percent = ((_this.value - min) / (max - min)) * 100;

  //     thumbRight.style.right = 100 - percent + '%';
  //     range.style.right = 100 - percent + '%';
  //   }
  // }
  // setRightValue();

  if (inputLeft && inputRight && thumbLeft && thumbRight) {
    inputLeft.addEventListener('input', setLeftValue);
    //   inputRight.addEventListener('input', setRightValue);

    inputLeft.addEventListener('mouseover', function () {
      thumbLeft.classList.add('hover');
    });
    inputLeft.addEventListener('mouseout', function () {
      thumbLeft.classList.remove('hover');
    });
    inputLeft.addEventListener('mousedown', function () {
      thumbLeft.classList.add('active');
    });
    inputLeft.addEventListener('mouseup', function () {
      thumbLeft.classList.remove('active');
    });

    inputRight.addEventListener('mouseover', function () {
      thumbRight.classList.add('hover');
    });
    inputRight.addEventListener('mouseout', function () {
      thumbRight.classList.remove('hover');
    });
    inputRight.addEventListener('mousedown', function () {
      thumbRight.classList.add('active');
    });
    inputRight.addEventListener('mouseup', function () {
      thumbRight.classList.remove('active');
    });
  }
});
</script>

<template>
  <div class="middle">
    <div class="multi-range-slider">
      <input
        type="range"
        id="input-left"
        :min="inputLeftProperty.min"
        :max="inputLeftProperty.max"
        :value="inputLeftProperty.value"
      />
      <input
        type="range"
        id="input-right"
        :min="inputRightProperty.min"
        :max="inputRightProperty.max"
        :value="inputRightProperty.value"
      />

      <div class="slider">
        <div class="track"></div>
        <div class="range" :style="rangeStyleObject"></div>
        <div class="thumb left" :style="thumbLeftStyleObject"></div>
        <div class="thumb right"></div>
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

.youtube-link {
  position: fixed;
  left: 20px;
  bottom: 20px;
  color: #000;
  text-decoration: none;
  font-size: 12px;
}
</style>
