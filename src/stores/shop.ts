import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    produtos: [],
    totalCarrinho: 0,
    carrinho: [],
  }),
  actions: {
    adicionarAoCarrinho(produto) {
      let existeItem = this.carrinho.find((item) => item.id === produto.id);
      if (existeItem) {
        existeItem.quantidade += 1;
      }
      else
        this.carrinho.push(produto);

      this.totalCarrinho++;
    },
    removerItemCarrinho(item) {
      const itemCarrinho = this.carrinho.find((car) => car.id === item.id);
      this.carrinho = this.carrinho.filter((car) => car.id !== item.id);
      if(itemCarrinho.quantidade)
        this.totalCarrinho -= itemCarrinho.quantidade;
       else
        this.totalCarrinho--;
    },
    limparCarrinho() {
      this.carrinho = [];
      this.totalCarrinho = 0;
    },
    adiconar(id) {
      const item = this.carrinho.find((item) => item.id === id);
      item.quantidade++;
      this.totalCarrinho++;
    },
    removerItemQuantidade(id){
      const item = this.carrinho.find((item) => item.id === id);
      if(item.quantidade > 1){
        item.quantidade--;
        this.totalCarrinho--;
      }
      else
        this.removerItemCarrinho(item);
    }
  },
});
