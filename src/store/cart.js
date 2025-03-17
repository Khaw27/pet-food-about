import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [], // 🛒 เก็บสินค้าในตะกร้า
  }),
  getters: {
    cartItemCount: (state) => state.cart.length, // 🛒 นับจำนวนสินค้าในตะกร้า
  },
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // ✅ ถ้ามีสินค้าอยู่แล้วให้เพิ่มจำนวน
      } else {
        this.cart.push({ ...product, quantity }); // ✅ เพิ่มสินค้าใหม่
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = []; // ✅ เคลียร์ตะกร้าหลังชำระเงิน
    },
  },
});
