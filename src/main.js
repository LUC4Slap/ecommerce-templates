import { createApp } from 'vue'
import './style.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
// import vuetify from './plugins/vuetify';
// import { registerPlugins } from '@/plugins';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app');
