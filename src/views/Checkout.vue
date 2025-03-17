<template>
    <div class="checkout-container">
      <h2>ชำระเงิน</h2>
      <img :src="qrCodeImage" alt="QR Code" class="qr-code" />
      <p>กรุณาชำระเงินภายใน {{ timer }} นาที</p>
      <button @click="confirmPayment">ยืนยันการชำระเงิน</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useCartStore } from "@/store/cart"; // ✅ ใช้ Pinia จัดการตะกร้าสินค้า
  import qrCodeImage from "@/assets/qrcode.png"; // ✅ ตรวจสอบให้แน่ใจว่ามีไฟล์นี้ใน `src/assets`
  
  const timer = ref(15);
  const router = useRouter();
  const cartStore = useCartStore();
  
  onMounted(() => {
    const countdown = setInterval(() => {
      timer.value--;
      if (timer.value <= 0) {
        clearInterval(countdown);
        alert("หมดเวลาการชำระเงิน!");
        router.push("/");
      }
    }, 60000);
  });
  
  const confirmPayment = () => {
    alert("ชำระเงินเรียบร้อย! ขอบคุณที่ใช้บริการ");
    cartStore.clearCart(); // ✅ เคลียร์ตะกร้าหลังชำระเงิน
    router.push("/");
  };
  </script>
  
  <style>
  .checkout-container {
    text-align: center;
    padding: 20px;
  }
  
  .qr-code {
    width: 200px;
    height: 200px;
    margin: 10px 0;
  }
  
  button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  