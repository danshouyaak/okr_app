import requests from "../utils/request";
import {httpGet, httpPost} from "./http";

// export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

// 列 ！！！
// export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })
// getorglist({ id: 200 }).then(res => {console.log(res)}) // 页面中直接使用

// 获取用户列表
export const reqGetUserList = () => httpGet("/admin/getUserList");

// 用户登录
export const reqUserLogin = (data) =>
    httpPost({url: "/admin/login", method: "post", data});
// export const reqUserLogin = (data) =>
//   requests({ url: "/admin/login", method: "post", data });

// 获取 目标列表
export const reqGetTargetList = () =>
    httpPost({url: "/admin/Target/getTargetList", method: "get"});

// 添加 目标内容
export const reqAddTarget = (params) =>
    httpGet({url: "/admin/Target/addTarget", method: "get", params});

// 根据id 删除某一条目标
export const reqDeleteTarget = (id) =>
    httpPost({url: `/admin/Target/deleteTarget/${id}`, method: "delete"});

// 获取用户信息
export const reqGetUserInfo = () =>
    httpGet({url: "/admin/UserInfo/getUserInfoList", method: "get"});

// 新建关键结果
export const reqGetKeyResultList = () =>
    httpGet({url: "/admin/KeyResult/getKeyResultList", method: "get"});
// 添加关键结果 
export const reqAddKeyResult = (data) =>
    httpPost({url: "/admin/KeyResult/addKeyResult", method: 'post', data})
// 根据id删除关键结果
export const reqDeleteResult = (id) => httpPost({url: `/admin/KeyResult/deteleKeyRes/${id}`, method: 'delete'})