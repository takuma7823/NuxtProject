<template>
  <div>
    <input type="text" v-model="message" />
    <button @click="addMessage()">追加</button>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

type Messages = {
  name: string;
};

export default defineComponent({
  setup() {
    const message = ref<string>('')
    const messages = ref<Messages[]>([])

    const addMessage = (): void => {
      messages.value.push({
        name: message.value,
      });
      message.value = '';
    };

    return {
      message,
      messages,
      addMessage
    }
  }
})
</script>