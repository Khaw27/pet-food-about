<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p>ราคา: {{ product.price }} บาท</p>

      <!-- ✅ เลือกจำนวนสินค้า -->
      <label>จำนวน:</label>
      <input type="number" v-model="quantities[product.id]" min="1" class="quantity-input" />

      <button @click="addToCart(product)">เพิ่มลงตะกร้า</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

// ✅ เก็บจำนวนของแต่ละสินค้า
const quantities = ref({});

// ✅ จำลองสินค้าที่ยังไม่มี API
const products = [
  { id: 1, name: "อาหารแมว", price: 200, image: "/src/assets/cat-food.jpg" },
  { id: 2, name: "อาหารสุนัข", price: 300, image: "/src/assets/dog-food.jpg" },
];

// ✅ เพิ่มสินค้าไปในตะกร้าพร้อมจำนวนที่เลือก
const addToCart = (product) => {
  const quantity = quantities.value[product.id] || 1; // ถ้าไม่เลือกให้เป็น 1
  cartStore.addToCart(product, quantity);
  alert(`เพิ่ม ${product.name} จำนวน ${quantity} ชิ้น ลงตะกร้าแล้ว!`);
  quantities.value[product.id] = 1; // รีเซ็ตค่าหลังเพิ่มสินค้า
};
</script>

<style>
.product-list {
  display: flex;
  gap: 20px;
}
.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
.product-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.quantity-input {
  width: 50px;
  text-align: center;
  margin: 5px;
}
</style>
