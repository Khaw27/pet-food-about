<template>
  <div class="home-container">
    <!-- แสดงข้อมูลผู้ใช้ที่ล็อกอิน -->
    <div class="user-info" v-if="user">
      <span>👤 {{ user.username }}</span>
      <button @click="logout">ออกจากระบบ</button>
    </div>

    <!-- แบนเนอร์หลัก (สไลด์อัตโนมัติ) -->
    <section class="hero-banner">
      <div class="hero-content">
        <h1>INTERN <span>Pet Home Store</span></h1>
        <p>ร้านจำหน่ายอาหารสัตว์และอุปกรณ์สัตว์เลี้ยงที่ครบวงจรที่สุด</p>
        <router-link to="/products" class="btn-shop">เลือกซื้อสินค้า</router-link>
      </div>
      <img :src="currentBanner" alt="แบนเนอร์สัตว์เลี้ยง" class="banner-image">
    </section>

    <!-- หมวดหมู่สินค้า -->
    <section class="categories">
      <h2>หมวดหมู่สินค้า</h2>
      <div class="category-list">
        <div class="category-item" v-for="category in categories" :key="category.id">
          <img :src="category.image" :alt="category.name">
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </section>

    <!-- สินค้าแนะนำ -->
    <section class="featured-products">
      <h2>สินค้าแนะนำ</h2>
      <div class="product-list">
        <div class="product-item" v-for="product in featuredProducts" :key="product.id">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} บาท</p>
          <button @click="buyProduct(product)">ซื้อสินค้า</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';
import catFood from '@/assets/cat-food.png';
import dogFood from '@/assets/dog-food.png';
import petAccessories from '@/assets/pet-accessories.png';
import petSnacks from '@/assets/pet-snacks.png';
import royalCanin from '@/assets/royal-canin.png';
import perfecta from '@/assets/perfecta.png';
import cesar from '@/assets/cesar.png';
import whiskas from '@/assets/whiskas.png';
import meo from '@/assets/meo.png';
import pedigree from '@/assets/pedigree.png';
import jerhigh from '@/assets/jerhigh.png';
import catLitter from '@/assets/cat-litter.png';

export default {
  data() {
    return {
      user: null, // เก็บข้อมูลผู้ใช้
      banners: [banner1, banner2, banner3],
      currentBannerIndex: 0,
      categories: [
        { id: 1, name: "อาหารแมว", image: catFood },
        { id: 2, name: "อาหารสุนัข", image: dogFood },
        { id: 3, name: "อุปกรณ์สัตว์เลี้ยง", image: petAccessories },
        { id: 4, name: "ขนมสัตว์เลี้ยง", image: petSnacks }
      ],
      featuredProducts: [
        { id: 1, name: "Royal Canin", price: 499, image: royalCanin },
        { id: 2, name: "Perfecta", price: 299, image: perfecta },
        { id: 3, name: "Cesar", price: 159, image: cesar },
        { id: 4, name: "Whiskas", price: 199, image: whiskas },
        { id: 5, name: "Me-O", price: 189, image: meo },
        { id: 6, name: "Pedigree", price: 349, image: pedigree },
        { id: 7, name: "JerHigh Stick", price: 129, image: jerhigh },
        { id: 8, name: "Cat Litter", price: 250, image: catLitter }
      ]
    };
  },
  computed: {
    currentBanner() {
      return this.banners[this.currentBannerIndex];
    }
  },
  mounted() {
    this.startBannerSlide();
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const userData = localStorage.getItem("user");
      if (userData) {
        this.user = JSON.parse(userData);
      }
    },
    startBannerSlide() {
      setInterval(() => {
        this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
      }, 3000);
    },
    buyProduct(product) {
      if (!this.user) {
        alert("กรุณาเข้าสู่ระบบก่อนทำการชำระเงิน!");
        this.$router.push("/login");
      } else {
        alert(`คุณกำลังซื้อสินค้า: ${product.name}`);
        this.$router.push("/checkout");
      }
    },
    logout() {
      localStorage.removeItem("user");
      this.user = null;
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.home-container {
  text-align: center;
}

/* แสดงข้อมูลผู้ใช้ */
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff4d94;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.user-info button {
  background: white;
  color: #ff4d94;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.hero-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff4d94;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.hero-content h1 {
  font-size: 2.5em;
  color: white;
}

.hero-content span {
  color: #000;
  font-weight: bold;
}

.banner-image {
  width: 50%;
  border-radius: 10px;
  transition: opacity 1s ease-in-out;
}

.categories, .featured-products {
  margin-top: 20px;
}

.category-list, .product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.category-item, .product-item {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: 0.3s;
  width: 200px;
}

.category-item:hover, .product-item:hover {
  transform: translateY(-5px);
}

.btn-shop {
  display: inline-block;
  background: #ffcc00;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
