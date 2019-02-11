import HomeComponent from "./components/HomeComponent.js";

const routes = [{ path: "/", name: "home", component: HomeComponent }];

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
