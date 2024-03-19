export default [
    {path: "/", redirect: "/home"},
    {
        path: "/home",
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存
        },
        component: () => import("../views/Home/index.vue"),
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存
        },
    },
    {
        path: "/login",
        component: () => import("../views/Login/index.vue"),
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存
        },
    },
    {
        path: "/register",
        component: () => import("../views/register/index.vue"),
        meta: {
            keepAlive: true, //设置页面是否需要使用缓存
        },
    },
];
