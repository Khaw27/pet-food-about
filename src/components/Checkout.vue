<template>
    <div>
      <h2>ชำระเงิน</h2>
      <p>รวม {{ total }} บาท</p>
      <button @click="confirmPurchase">ยืนยันคำสั่งซื้อ</button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "@/store/cart";
  
  export default {
    setup() {
      const cartStore = useCartStore();
  
      const total = cartStore.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
      const confirmPurchase = () => {
        alert("สั่งซื้อสำเร็จ!");
        cartStore.clearCart();
      };
  
      return { total, confirmPurchase };
    },
  };
  </script>
  