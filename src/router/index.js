import {createRouter, createWebHistory} from "vue-router";
import routes from "./routers";
import {getToken} from "@/utils/token.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if ((from.path == "/home" || from.path == "/") && to.path == "/login") {
            // 已登录就不能回到登录页面
            next('/home')
            return
        }
    }
    next()
});
export default router;
