<script setup lang="ts">
type ButtonProps = {
  text: string;
};
const props = defineProps<ButtonProps>();
</script>
<template>
  <div class="button">
    <div class="button-text">{{ props.text }}</div>
  </div>
</template>
<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 14px;
  gap: 10px;

  width: 126px;
  height: 36px;

  background: #6b6b6b;
  border-radius: 30px;
}

.button-text {
  height: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
}
</style>
