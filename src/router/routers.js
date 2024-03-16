export default [
    {path: "/", redirect: "/home"},
    {
        path: "/home",
        component: () => import("../views/Home/index.vue"),
    },
    {
        path: "/login",
        component: () => import("../views/Login/index.vue")
    },
];
