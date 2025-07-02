<template>
  <v-container class="py-6">
    <div v-if="carrinho.carrinho.length > 0">
      <h2 class="text-h4 font-weight-medium mb-6 text-center">Seu Carrinho</h2>
      <div class="d-flex flex-column flex-md-row gap-4">
        <!-- Lista de Itens -->
        <div class="flex-grow-1">
          <v-card v-for="(item, index) in carrinho.carrinho" :key="index" class="mb-4" elevation="2">
            <v-card-item>
              <div class="d-flex flex-column flex-md-row justify-space-between align-md-center gap-4">

                <div>
                  <div class="text-h6 font-weight-medium mb-1">
                    {{ item.nome }}
                  </div>
                  <div class="text-body-2 text-grey-darken-1 mb-2">
                    {{ item.descricao }}
                  </div>
                  <div class="d-flex flex-row gap-2 align-center" v-if="item.quantidade">
                    <v-btn size="small" icon :color="color" @click="carrinho.adiconar(item.id)">
                      <i class="fa-solid fa-plus"></i>
                    </v-btn>
                    <span> {{ item.quantidade }} </span>
                    <v-btn size="small" icon :color="color" @click="carrinho.removerItemQuantidade(item.id)">
                      <i class="fa-solid fa-minus"></i>
                    </v-btn>
                  </div>
                </div>

                <div class="d-flex flex-column align-end text-end">
                  <span class="text-subtitle-1 font-weight-bold">R$ {{ (item.valor *
                    item.quantidade).toFixed(2).replace(".", ",") }}</span>
                  <v-btn size="small" variant="text" color="red-darken-1" @click="remove(item)">
                    <v-icon start>mdi-delete</v-icon>
                    Remover
                  </v-btn>
                </div>

              </div>
            </v-card-item>
          </v-card>
        </div>

        <!-- Resumo -->
        <div style="min-width: 300px">
          <v-card elevation="3" class="pa-4">
            <h4 class="text-h5 font-weight-medium mb-4 text-center">Resumo do Pedido</h4>
            <div class="d-flex justify-space-between mb-2">
              <span>Total:</span>
              <span class="text-h6 font-weight-bold">R$ {{ valorTotal.toFixed(2).replace(".", ",") }}</span>
            </div>

            <v-form @submit.prevent="submit" ref="form" class="mt-4">
              <v-text-field v-model="email" ref="emailField" label="E-mail para contato" :rules="emailRole"
                prepend-inner-icon="mdi-email" required></v-text-field>
              <v-btn :variant="variant" :color="color" type="submit" block class="mt-2">
                Finalizar Compra
              </v-btn>
            </v-form>
          </v-card>
        </div>
      </div>

      <div class="d-flex justify-center mt-6">
        <router-link to="/">
          <v-btn :variant="variant" color="primary">
            Continuar Comprando
          </v-btn>
        </router-link>
      </div>
    </div>

    <!-- Carrinho Vazio -->
    <div v-else>
      <v-container class="d-flex flex-column align-center justify-center text-center empty-cart-container">
        <v-icon color="grey-darken-2" size="96">mdi-cart-off</v-icon>
        <h3 class="text-h5 font-weight-medium mt-4">Seu carrinho está vazio</h3>
        <p class="text-body-1 mb-4">Adicione algum template na tela inicial para começar suas compras.</p>
        <router-link to="/">
          <v-btn :variant="variant" color="primary">
            Ir para tela inicial
          </v-btn>
        </router-link>
      </v-container>
    </div>
  </v-container>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCarrinhoStore } from '../stores/shop'
const carrinho = useCarrinhoStore();

const variant = 'outlined'
const color = ref('indigo')
const valorTotal = ref(carrinho.carrinho.reduce((total, item) => total + (item.quantidade * item.valor), 0))
const email = ref('');
const form = ref(null);

watch(() => carrinho.carrinho, (newCarrinho) => {
  valorTotal.value = newCarrinho.reduce((total, item) => total + (item.quantidade * item.valor), 0)
}, { deep: true })

const remove = (item: any) => {
  carrinho.removerItemCarrinho(item)
}

const emailRole = [
  value => !!value || 'E-mail é obrigatório.',
  value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'E-mail inválido.'
  },
];

const submit = async () => {
  const isFormValid = await form.value?.validate();

  if (!isFormValid.valid)
    return;

  const data = {
    idsProdutos: carrinho.carrinho.map((item) => item.id),
    valorTotal: carrinho.carrinho.reduce((total, item) => total + (item.quantidade * item.valor), 0),
    emailCliente: email.value
  }
  console.log(data);
}
</script>

<style lang="scss" scoped>
.v-container {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe, #d8b4fe);
  // padding: 2rem;
}

h4 {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: 600;
}

// .empty-cart-container {
//   min-height: 100vh;
// }

.text-grey-darken-1 {
  color: #757575;
}

@media (min-width: 960px) {
  .v-container {
    // max-width: 100vh;
  }
}
</style>
