import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // เก็บข้อมูลผู้ใช้
  }),
  actions: {
    login(userData) {
      this.user = userData; // เซ็ตค่าผู้ใช้
    },
    logout() {
      this.user = null; // ล้างค่าผู้ใช้
    },
  },
});
