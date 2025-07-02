<template>
  <div>
    <h1>HOME</h1>
    <v-card>
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a card subtitle</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <p>Contador: {{ counter.count }}</p>
      </v-card-text>
    </v-card>
    <v-btn class="ma-2" @click="counter.increment">
      <v-icon color="info" size="large">
        mdi mdi-account
      </v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router';

// usando a store
const counter = useCounterStore()

</script>

<style scoped leng="scss">
h1 {
  color: var(--secondary-color);
}
</style>
