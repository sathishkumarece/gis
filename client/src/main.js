import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.common['content-type'] = "application/x-www-form-urlencoded";

createApp(App)
  .use(router)
  .mount("#app");
