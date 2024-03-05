import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
    server: {
        port: 4000, //启动端口
        proxy: {
            "/api": {
                target: "http://localhost:3000", // 实际请求地址
                changeOrigin: true, // 是否改变请求源
                rewrite: (path) => path.replace(/^\/api/, ""), // 重写请求路径
                // rewrite: (path) => path.replace(/^/api/, '') 的作用是将请求路径中的 /api 替换为空，也就是去掉请求路径中的 /api。
            },
        },
    },
});
