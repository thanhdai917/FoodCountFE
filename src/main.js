import Vue from "vue";
import App from "./App.vue";
import "./assets/style.css";
import "./assets/style.js";
import '@/assets/css/tailwind.css'
import router from "./router";
Vue.config.productionTip = false;
// Vue.http.options.credentials = true
// Vue.http.options.emulateHTTP = true
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
