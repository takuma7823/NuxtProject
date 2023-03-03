<script setup lang="ts"></script>

<template>
  <div class="slider">
    <input type="range" min="0" max="200" value="100" oninput="rangeValue.innerText = this.value" />
    <p id="rangeValue">100</p>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 60px;
  padding: 30px;
  padding-left: 40px;
  background: #fcfcfc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 15px 40px #7e6d5766;
}
.slider p {
  font-size: 26px;
  font-weight: 600;
  font-family: Open Sans;
  padding-left: 30px;
  color: black;
}
.slider input[type='range'] {
  -webkit-appearance: none !important;
  width: 420px;
  height: 2px;
  background: black;
  border: none;
  outline: none;
}
.slider input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  width: 30px;
  height: 30px;
  background: black;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
}
.slider input[type='range']::-webkit-slider-thumb:hover {
  background: black;
}
</style>
