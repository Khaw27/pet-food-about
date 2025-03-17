<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} บาท</p>
      <button @click="$emit('add-to-cart', product)">เพิ่มลงตะกร้า</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
  };
  </script>
  