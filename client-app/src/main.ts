import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
import { setupCalendar } from 'v-calendar';
import { VueQueryPlugin } from "@tanstack/vue-query";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(setupCalendar, {})

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60,
      },
    },
  },
});

app.mount("#app");
