import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    logado: false,
    thema: 'light'
  }),
  actions: {
    increment() {
      this.count++;
    },
    authenticate(login: string, password: string) {
      if(login === 'admin' && password === '12345') {
        this.logado = true;
        sessionStorage.setItem('logado', 'true');
        return true;
      } else {
        this.logado = false;
        return false;
      }
    },
    toggleThem(thema: string) {
      this.thema = thema;
    }
  },
});

