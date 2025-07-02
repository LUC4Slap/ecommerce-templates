import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import DayJsAdapter from '@date-io/dayjs';
import ptBR from 'dayjs/locale/ptBR';
import { createVuetify } from 'vuetify';

export default createVuetify({
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'outlined',
      rounded: true,
    },
  },
  theme: {
    defaultTheme: 'light',
  },
  date: {
    adapter: DayJsAdapter,
    locale: {
      en: ptBR,
    },
  },
});
