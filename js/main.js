import HomeComponent from "./components/HomeComponent.js";
import RegisterComponent from "./components/RegisterComponent.js";

const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
  { path: "/register", name: "Register", component: RegisterComponent}
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

const vm = new Vue({
  // el: '#app',

  data: {},

  mounted() { },

  methods: {},

  router: router
}).$mount("#app");
