<template>
  <v-responsive class="w-100 p-0">
    <v-app :theme="auth.thema">
      <v-main>
        <router-view />
        <v-snackbar v-model="snackbar.snackbar" :color="snackbar.variant" variant="outlined" multi-line
          :timeout="snackbar.time">
          {{ snackbar.text }}
        </v-snackbar>
      </v-main>
    </v-app>
  </v-responsive>

</template>
<script setup lang="ts">
import { useSnacStore } from './stores/snackbar';
import { useAuthStore } from './stores/auth';
const snackbar = useSnacStore();
const auth = useAuthStore()
</script>

<style lang="scss">
.v-main {
  width: 100vw;
}
</style>
