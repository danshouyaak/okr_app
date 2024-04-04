// vite.config.js
import {defineConfig} from "file:///D:/okr_app/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/okr_app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueSetupExtend from "file:///D:/okr_app/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";

var vite_config_default = defineConfig({
    plugins: [vue(), VueSetupExtend()],
    resolve: {
        alias: {
            "@": "/src"
        }
    },
    server: {
        port: 4e3
        //启动端口
    }
    // proxy:{
    //   '/api': {
    //     // 后台地址
    //     target: 'http://localhost:3000/',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   },
    // }
});
export {
    vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxva3JfYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxva3JfYXBwXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9va3JfYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IFZ1ZVNldHVwRXh0ZW5kIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbdnVlKCksIFZ1ZVNldHVwRXh0ZW5kKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBcIi9zcmNcIixcbiAgICB9LFxuICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBwb3J0OiA0MDAwLCAvL1x1NTQyRlx1NTJBOFx1N0FFRlx1NTNFM1xuICAgIH0sXG4gIC8vIHByb3h5OntcbiAgLy8gICAnL2FwaSc6IHtcbiAgLy8gICAgIC8vIFx1NTQwRVx1NTNGMFx1NTczMFx1NTc0MFxuICAvLyAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXG4gIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gIC8vICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuICAvLyAgIH0sXG4gIC8vIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvTixTQUFTLG9CQUFvQjtBQUNqUCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxvQkFBb0I7QUFJM0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7QUFBQSxFQUNuQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNFLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQTtBQUFBLEVBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
