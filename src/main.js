import "./assets/main.css";
import router from "./router/index";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faXmark, faShoppingCart);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
