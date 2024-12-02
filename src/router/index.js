import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/loginPage.vue";
import LessonsPage from "@/pages/lessonsPage.vue";
import Cart from "@/pages/cartPage.vue";
import Register from "@/pages/registerPage.vue";
import ForgotPassword from "@/pages/forgotPassword.vue";
import ResetPassword from "@/pages/resetPassword.vue";
import NotFound from "@/pages/notFound.vue";
import ViewOrder from "@/pages/viewOrder.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: ForgotPassword,
    meta: { guest: true },
  },
  {
    path: "/reset-password/:token",
    name: "Reset Password",
    component: ResetPassword,
    meta: { guest: true },
  },
  {
    path: "/",
    name: "Lesson Page",
    component: LessonsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "Cart Page",
    component: Cart,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/view-order",
    name: "ViewOrder",
    component: ViewOrder,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && (!token || token === undefined)) {
    return next("/login");
  }

  if (to.meta.guest && token) {
    return next("/");
  }

  next();
});

export default router;
