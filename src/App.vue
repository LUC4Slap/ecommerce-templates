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
import { onMounted } from 'vue';
import { useSnacStore } from './stores/snackbar';
import { useAuthStore } from './stores/auth';
import { useCarrinhoStore } from './stores/shop';
import api from './services/api';
const snackbar = useSnacStore();
const auth = useAuthStore()
const carrinho = useCarrinhoStore();

onMounted(async () => {
  await api.get('/template')
    .then((res) => {
      snackbar.setVariant('success')
      carrinho.produtos = res.data
      snackbar.changeText("Produtos carregados com sucesso!")
      // auth.setUser(res.data.user)
    })
    .catch((err) => {
      snackbar.setVariant('error')
      snackbar.changeText(err.response.data.message)
      // snackbar.setSnackbar(err.response.data.message, 'error', 3000)
    })
})
</script>

<style lang="scss">
.v-main {
  width: 100vw;
}
</style>
