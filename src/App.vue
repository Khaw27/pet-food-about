<script setup>
import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push("/login"); // กลับไปหน้า Login หลังออกจากระบบ
};
</script>

<template>
  <div>
    <nav>
      <router-link to="/">หน้าแรก</router-link> |
      <router-link to="/about">เกี่ยวกับ</router-link> |
      <router-link to="/products">สินค้า</router-link> |
      <router-link to="/cart">ตะกร้า ({{ cartStore.cart.length }})</router-link> |
      <router-link to="/login" v-if="!userStore.user">เข้าสู่ระบบ</router-link>
      <div v-else class="user-profile">
        <img :src="userStore.user.profileImage" alt="โปรไฟล์" class="profile-pic" />
        <span>{{ userStore.user.name }}</span>
        <button @click="logout">ออกจากระบบ</button>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
nav {
  background: #f8f8f8;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
