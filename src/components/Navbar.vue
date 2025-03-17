<template>
    <nav class="navbar">
      <div class="logo">🐶 My Pet Food Shop</div>
      <div v-if="user" class="user-info">
        <img :src="user.avatar" class="avatar" />
        <span>{{ user.name }}</span>
        <span>{{ user.studentId }}</span>
        <button @click="logout">ออกจากระบบ</button>
      </div>
      <div v-else>
        <router-link to="/login">เข้าสู่ระบบ</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  import { useUserStore } from "@/store/userStore";
  import { computed } from "vue";
  
  export default {
    setup() {
      const userStore = useUserStore();
      const user = computed(() => userStore.user);
  
      const logout = () => {
        userStore.logout();
      };
  
      return { user, logout };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #1976d2;
    color: white;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  button {
    background: red;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  