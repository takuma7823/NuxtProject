<template>
  <div>
    <v-container>
      <div
        v-ripple
        class="text-center elevation-2 pa-12 text-h5"
      >
        HTML element with v-ripple
      </div>
    </v-container>
    <div class="text-center">
      <div>
        <v-btn
          class="ma-2"
          color="primary"
          dark
        >
          Accept
          <v-icon
            dark
            right
          >
            mdi-checkbox-marked-circle
          </v-icon>
        </v-btn>
        <v-btn
          class="ma-2"
          color="red"
          dark
        >
          Decline
          <v-icon
            dark
            right
          >
            mdi-cancel
          </v-icon>
        </v-btn>
        <v-btn
          class="ma-2"
          dark
        >
          <v-icon
            dark
            left
          >
            mdi-minus-circle
          </v-icon>Cancel
        </v-btn>
      </div>
    </div>
    <div>
      <input type="text" v-model="message" style="border: solid 1px"/>
      <button @click="addMessage()">追加</button>
      <ul>
        <li v-for="(message,index) in messages" :key="index">{{ message.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

type Messages = {
  name: string;
};

export default ({
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