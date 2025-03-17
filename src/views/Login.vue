<template>
    <div class="login-container">
      <!-- แสดงข้อมูลผู้ใช้ที่ล็อกอิน -->
      <div class="user-info" v-if="user">
        <span>👤 {{ user.username }}</span>
        <button @click="logout">ออกจากระบบ</button>
      </div>
  
      <!-- ฟอร์มเข้าสู่ระบบ (ซ่อนเมื่อเข้าสู่ระบบแล้ว) -->
      <div v-if="!user">
        <h2>เข้าสู่ระบบ</h2>
        <form @submit.prevent="handleLogin">
          <input type="text" v-model="username" placeholder="ชื่อผู้ใช้" required />
          <input type="password" v-model="password" placeholder="รหัสผ่าน" required />
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        user: null // เก็บข้อมูลผู้ใช้ที่ล็อกอิน
      };
    },
    mounted() {
      this.checkLogin();
    },
    methods: {
      handleLogin() {
        if (this.username === 'admin' && this.password === '2354165987') {
          const userData = { username: this.username };
          localStorage.setItem('user', JSON.stringify(userData));
          this.user = userData; // อัปเดต user
          this.$router.push('/'); // กลับไปที่หน้า Home
        } else {
          this.errorMessage = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
        }
      },
      checkLogin() {
        const userData = localStorage.getItem('user');
        if (userData) {
          this.user = JSON.parse(userData);
        }
      },
      logout() {
        localStorage.removeItem('user');
        this.user = null;
        this.$router.push('/login'); // กลับไปหน้าล็อกอิน
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
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
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    width: 100%;
    padding: 10px;
    background: #ff4d94;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  