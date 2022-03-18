import Vue from "vue";
import Vuex from "vuex";
import Auth from "./auth/Auth";
import Admin from "./admin/Admin";
import Cook from "./cook/Cook.js";
import Waiter from "./waiter/Waiter.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    admin: Admin,
    cook: Cook,
    waiter: Waiter,
  },
});
