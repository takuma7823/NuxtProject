<script setup lang="ts">
const status = ref(false);
const emits = defineEmits<{
  (e: 'update:modelValue'): void;
}>();

const onChange = () => {
  status.value = !status.value;
  emits('update:modelValue');
};
</script>

<template>
  <div>
    <label class="switch">
      <input type="checkbox" @click="onChange" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #6b6b6b;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f1bf06;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f1bf06;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
