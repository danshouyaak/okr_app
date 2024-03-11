import requests from "../utils/request";
import {httpGet, httpPost} from "./http";

// export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

// 列 ！！！
// export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })
// getorglist({ id: 200 }).then(res => {console.log(res)}) // 页面中直接使用

// 获取用户列表
export const reqGetUserList = () => httpGet("/admin/getUserList");

// 用户登录
export const reqUserLogin = (data) => httpPost("/admin/login", data);

// 获取 目标列表
export const reqGetTargetList = () => httpGet("/admin/Target/getTargetList");

// 添加 目标内容
export const reqAddTarget = (params) =>
    httpGet("/admin/Target/addTarget", params);

// 根据id 删除某一条目标
export const reqDeleteTarget = (id) =>
    requests({url: `/admin/Target/deleteTarget/${id}`, method: "delete"});
