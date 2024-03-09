import requests from "../utils/request";

// export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

// 获取用户列表
export const reqGetUserList = () => requests.get("/admin/getUserList");


// 用户登录
export const reqUserLogin = (data) => requests({url: "/admin/login", method: 'post', data})


