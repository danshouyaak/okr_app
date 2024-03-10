import requests from "../utils/request";

// export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

// 获取用户列表
export const reqGetUserList = () => requests.get("/admin/getUserList");


// 用户登录
export const reqUserLogin = (data) => requests({url: "/admin/login", method: 'post', data})


// 获取 目标列表
export const reqGetTargetList = () => requests({url: "/admin/Target/getTargetList", method: 'get'})

// 添加 目标内容
export const reqAddTarget = (params) => requests({url: "/admin/Target/addTarget", method: 'get', params})

// 根据id 删除某一条目标
export const reqDeleteTarget = (id) => requests({url: `/admin/Target/deleteTarget/${id}`, method: 'delete'})

