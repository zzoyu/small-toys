import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import GOL from "./components/GOL.vue";
import Conffeti from "./components/Conffeti.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/gol", component: GOL },
    { path: "/conffeti", component: Conffeti },
  ],
});

createApp(App).use(router).mount("#app");
