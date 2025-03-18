<template>
  <div class="howto-container">
    <section class="hero-banner">
      <div class="hero-content">
        <h1 class="title"> วิธีสั่งซื้อสินค้า 🐶🐱</h1>
        <p> ทำตามขั้นตอนง่ายๆ เพื่อสั่งซื้อสินค้าของคุณ </p>
      </div>
      <img src="@/assets/pet2.png" alt="สัตว์เลี้ยงน่ารัก" class="banner-image" />
    </section>

    <section class="order-steps">
      <div class="step">
        <h2>1️⃣ เลือกสินค้าที่ต้องการ</h2>
        <p>🔍 เรียกดูสินค้า และกด "เพิ่มลงตะกร้า"</p>
      </div>
      <div class="step">
        <h2>2️⃣ ตรวจสอบตะกร้าสินค้า</h2>
        <p>🛒 ตรวจสอบรายการสินค้าที่เลือก และกด "ชำระเงิน"</p>
      </div>
      <div class="step">
        <h2>3️⃣ กรอกที่อยู่และเลือกวิธีชำระเงิน</h2>
        <p>📦 ใส่ข้อมูลการจัดส่ง และเลือกชำระผ่าน QR Code / บัตรเครดิต</p>
        <img src="@/assets/qr-code.jpg" alt="QR Code สำหรับชำระเงิน" class="qr-code" />
      </div>
      <div class="step">
        <h2>4️⃣ ยืนยันคำสั่งซื้อ</h2>
        <p>✅ ตรวจสอบข้อมูลอีกครั้ง แล้วกด "ยืนยัน"</p>
      </div>
      <div class="step">
        <h2>🎁 รอรับสินค้า! 🚚</h2>
        <p>💝 สินค้าจะถูกจัดส่งให้คุณโดยเร็วที่สุด 💝</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 🎀 สไตล์หลัก */
.howto-container {
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  padding: 20px;
  background: #fffbf5;
}

/* 🎨 ส่วนของแบนเนอร์ */
.hero-banner {
  background: linear-gradient(45deg, #ffccff, #ff99cc);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.4);
}

.hero-content {
  flex: 1;
}

/* ⭐ ปรับขนาดตัวอักษรของ "วิธีสั่งซื้อสินค้า" ⭐ */
.title {
  color: #ff4081;
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  margin-left: 20px;
}

p {
  color: #444;
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
}

/* 🖼️ ปรับขนาดรูปสัตว์ให้ใหญ่ขึ้น */
.banner-image {
  width: 250px;
  height: 250px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 15px;
  margin-left: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 🐾 ส่วนของขั้นตอนการสั่งซื้อ */
.order-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step {
  background: #ffffff;
  padding: 15px;
  margin: 10px;
  width: 80%;
  border-radius: 12px;
  box-shadow: 0px 6px 10px rgba(255, 105, 180, 0.2);
  transition: transform 0.2s ease-in-out;
}

.step:hover {
  transform: scale(1.05);
}

.step h2 {
  color: #ff4081;
}

.step p {
  color: #666;
  font-size: 16px;
}

/* 📱 ปรับขนาด QR Code ให้ใหญ่ขึ้น */
.qr-code {
  width: 180px;
  height: auto;
  max-width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}
</style>
