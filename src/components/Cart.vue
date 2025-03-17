<template>
  <div>
    <h2>ตะกร้าสินค้า</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.price }} บาท ({{ item.quantity }} ชิ้น)
      </li>
    </ul>
    <button @click="checkout">ชำระเงิน</button>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    }
  },
  methods: {
    checkout() {
      this.$router.push("/checkout");
    }
  }
};
</script>
