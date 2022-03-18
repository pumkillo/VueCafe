import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/Admin/UserView.vue";
import LogoutView from "@/views/LogoutView.vue";
import NewUser from "@/components/Admin/NewUser.vue";
import EmployeeShift from "@/views/Admin/EmployeeShift.vue";
import ShiftOrders from "@/views/Admin/ShiftOrders.vue";
import CreateOrder from "@/views/Waiter/CreateOrder.vue";
import OrdersView from "@/views/Waiter/OrdersView.vue";
import OrderView from "@/views/Waiter/OrderView.vue";
import ShiftOrdersView from "@/views/Cook/ShiftOrdersView.vue";
import Shifts from "@/views/Admin/Shifts.vue";
import CreateShift from "@/views/Admin/CreateShift.vue";

Vue.use(VueRouter);

const routes = [
  // auth
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  // admin
  {
    path: "/users",
    name: "users",
    component: UserView,
  },
  {
    path: "/user/new",
    name: "newUser",
    component: NewUser,
  },
  {
    path: "/shift/user",
    name: "employeeShift",
    component: EmployeeShift,
  },
  {
    path: "/shifts",
    name: "shifts",
    component: Shifts,
  },
  {
    path: "/shift/create",
    name: "createShift",
    component: CreateShift,
  },
  {
    path: "/shift/orders",
    name: "shiftOrders",
    component: ShiftOrders,
  },
  // waiter
  {
    path: "/create/order",
    name: "createOrder",
    component: CreateOrder,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/order/:id",
    name: "order",
    component: OrderView,
    // props: true,
  },
  // cook
  {
    path: "/work-shift/now/orders",
    name: "activeShiftOrders",
    component: ShiftOrdersView,
  },
  // 
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
