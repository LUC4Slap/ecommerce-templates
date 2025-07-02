<template>
  <v-container class="d-flex w-100 align-center justify-center">
    <v-card width="400" class="pa-4 elevation-10">
      <v-card-title class="text-h6 text-center">
        Login
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit" ref="form">
          <v-text-field v-model="login" label="Login" :rules="loginRules" prepend-inner-icon="mdi-account"
            required></v-text-field>

          <v-text-field v-model="password" label="Senha" :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'" prepend-inner-icon="mdi-lock" required>
            <template #append-inner>
                <i @click="togglePasswordVisibility"
                  :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                  class="cursor-pointer p-2"
                ></i>
            </template>
          </v-text-field>

          <v-btn :loading="loading" type="submit" color="primary" class="mt-4" block>
            Entrar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { useSnacStore } from '../../stores/snackbar';

const auth = useAuthStore();
const snackbar = useSnacStore();
const router = useRouter();

const login = ref('');
const password = ref('');
const loading = ref(false);
const form = ref(null);
const type = ref('password')
const showPassword = ref(false);

const loginRules = [
  v => !!v || 'Login é obrigatório',
  v => v.length <= 20 || 'Máximo 20 caracteres',
];

const passwordRules = [
  v => !!v || 'Senha é obrigatória',
  v => v.length >= 5 || 'Mínimo 5 caracteres',
];

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  type.value = type.value === 'password' ? 'text' : 'password';
}


const submit = () => {
  loading.value = true;

  const success = auth.authenticate(login.value, password.value);
  snackbar.setVariant('success')
  if (success) {
    snackbar.changeText("Bem vindo ao portal!");
    router.push('/home');
  } else {
    snackbar.setVariant('error')
    snackbar.changeText("Login ou senha inválidos");
  }

  loading.value = false;
};

</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
