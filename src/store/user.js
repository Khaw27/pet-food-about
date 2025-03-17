import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // เก็บข้อมูลผู้ใช้
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login(userData) {
      this.user = userData;
    },
    logout() {
      this.user = null;
    }
  }
});
