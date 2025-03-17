import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Products from "@/views/Products.vue";
import CartView from "@/views/CartView.vue";
import Checkout from "@/views/Checkout.vue";
import Login from "@/views/Login.vue";
import { useUserStore } from "@/store/user"; // ✅ ใช้ Store เพื่อตรวจสอบการล็อกอิน

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: Products },
  { path: "/cart", component: CartView },
  { 
    path: "/checkout", 
    component: Checkout,
    meta: { requiresAuth: true } // ✅ เพิ่ม Meta field เพื่อตรวจสอบการล็อกอิน
  },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Navigation Guard - ตรวจสอบก่อนเข้า Checkout
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userStore.isLoggedIn) {
      alert("กรุณาเข้าสู่ระบบก่อนทำการชำระเงิน!");
      next("/login"); // 🔄 Redirect ไปหน้า Login
    } else {
      next(); // ✅ อนุญาตให้ไปต่อ
    }
  } else {
    next(); // ✅ อนุญาตให้ไปต่อถ้าไม่ใช่หน้าที่ต้องล็อกอิน
  }
});

export default router;
