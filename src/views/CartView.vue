<template>
  <div class="cart-container">
    <h2>🛒 ตะกร้าสินค้า</h2>
    <div v-if="cartStore.cart.length === 0">ไม่มีสินค้าในตะกร้า</div>
    <div v-else>
      <ul>
        <li v-for="item in cartStore.cart" :key="item.id">
          <img :src="item.image" class="cart-image" />
          {{ item.name }} - {{ item.quantity }} ชิ้น - {{ item.price * item.quantity }} บาท
          <button @click="cartStore.removeFromCart(item.id)">❌</button>
        </li>
      </ul>
      <h3>รวมทั้งหมด: {{ totalPrice }} บาท</h3>
      <button @click="goToCheckout">🛍️ ไปชำระเงิน</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/store/cart";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

// ✅ คำนวณราคาทั้งหมด
const totalPrice = computed(() => {
  return cartStore.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const goToCheckout = () => {
  if (cartStore.cart.length === 0) {
    alert("ไม่มีสินค้าในตะกร้า!");
    return;
  }
  router.push("/checkout");
};
</script>

<style>
.cart-container {
  padding: 20px;
}
.cart-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}
</style>
