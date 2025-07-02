<template>
  <div class="d-flex w-100 flex-wrap gap-4 p-3">
    <div class="d-flex" v-for="item in lista" :key="item.id">
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="mx-auto" color="grey-lighten-4" min-width="300" max-width="300" v-bind="props">
          <v-img :aspect-ratio="16 / 9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" cover>
            <v-expand-transition>
              <div v-if="isHovering" class="d-flex bg-orange-darken-2 v-card--reveal text-h2" style="height: 100%;">
                R${{ item.valor }}
              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text class="d-flex flex-column flex-grow-1 justify-space-between pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              <span>Autor </span>{{ item.autor }}
            </div>

            <h3 class="text-h4 font-weight-light text-orange mb-2">
              {{ item.nome }}
            </h3>

            <div class="font-weight-light text-h6 mb-2">
              {{ item.descricao }}
            </div>

            <div class="d-flex flex-row flex-wrap gap-2">
              <div class="d-flex" v-for="(tec, index) in item.tecnologias" :key="index">
                <span class="badge">
                  {{ tec }}
                </span>
              </div>
            </div>
            <div class="d-flex w-100 justify-end mt-4">
              <v-btn variant="outlined" color="primary" @click="adicionarAoCarrinhoStore(item)">
                <i class="fa-solid fa-cart-shopping"></i>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tecnologias {
  nome: string
}
interface ListaTemplate {
  id: number;
  nome: string;
  valor: number;
  descricao: string;
  tecnologias: Tecnologias;
  autor: string;
}
import { useCarrinhoStore } from '../stores/shop'
const carrinho = useCarrinhoStore();

const props = defineProps<{
  lista: ListaTemplate[]
}>()

const adicionarAoCarrinhoStore = (item: ListaTemplate) => {
  carrinho.adicionarAoCarrinho(item)
}

</script>

<style scoped leng="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;

}
.badge {
  padding: 8px;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
</style>
