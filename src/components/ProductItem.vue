<template>
    <div class="product-item">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} บาท</p>
      <button @click="addToCart">เพิ่มลงตะกร้า</button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "@/store/cart";
  
  export default {
    props: ["product"],
    setup(props) {
      const cartStore = useCartStore();
  
      const addToCart = () => {
        cartStore.addToCart(props.product);
      };
  
      return { addToCart };
    },
  };
  </script>
  
  <style scoped>
  .product-item {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
    width: 200px;
  }
  .product-item img {
    max-width: 100%;
  }
  </style>
  