<script setup lang="ts"></script>

<template>
  <div class="middle">
    <div class="multi-range-slider">
      <div class="slider">
        <input type="range" min="0" max="200" value="25" />
        <input type="range" min="0" max="200" value="75" />
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
  position: absolute;
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
  z-index: 3;
  cursor: pointer;
}
.slider input[type='range']::-webkit-slider-thumb:hover {
  background: black;
}
</style>
