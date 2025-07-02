import { defineStore } from 'pinia';

export const useSnacStore = defineStore('snacobar', {
  state: () => ({
    snackbar: false,
    text: '',
    variant: 'success',
    time: 1500
  }),
  actions: {
    ative() {
      this.snackbar = true;
    },
    deactive() {
      this.snackbar = false;
    },
    changeText(text: string) {
      this.snackbar = true;
      this.text = text;
    },
    setVariant(variant: string) {
      this.variant = variant;
    }
  },
});

