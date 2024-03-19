import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VueSetupExtend()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
    server: {
        port: 4000, //启动端口
    },
  // proxy:{
  //   '/api': {
  //     // 后台地址
  //     target: 'http://localhost:3000/',
  //     changeOrigin: true,
  //     rewrite: path => path.replace(/^\/api/, '')
  //   },
  // }
});
