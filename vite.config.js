import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // เปลี่ยนพอร์ตได้ตามต้องการ
    open: true, // เปิดเบราว์เซอร์อัตโนมัติเมื่อรัน `npm run dev`
  },
  build: {
    outDir: "dist", // ไฟล์ที่ถูก build จะอยู่ในโฟลเดอร์ `dist`
  },
});
