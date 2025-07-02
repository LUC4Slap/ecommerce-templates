<template>
  <nav class="navbar">
    <h3>Mega templates</h3>
    <ul>
      <li>
        <router-link to="/pedidos">
          <v-badge color="error" :content="carrinho.totalCarrinho" overlap>
            <i class="fa-solid fa-cart-shopping"></i>
          </v-badge>
        </router-link>

      </li>
    </ul>
  </nav>
</template>
<script setup>
import { useCarrinhoStore } from '../stores/shop'

// store
const carrinho = useCarrinhoStore();


</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 5px;
  left: 50%;
  width: 80%;
  transform: translateX(-50%);
  justify-content: space-between;
  align-items: center;
  background: var(--bg-vidro);
  backdrop-filter: blur(8px);
  // -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 12px;
  align-items: center;
  z-index: 1000;

  h3 {
    color: #fff;
    font-size: 24px;
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    // width: 30%;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 10px;

    li {
      display: flex;
      justify-content: flex-end;

      i {
        color: white;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
        mix-blend-mode: difference;
        cursor: pointer;
        font-size: 20px;
      }
    }
  }
}
</style>
