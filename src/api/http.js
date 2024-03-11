// 统一封装get post请求

import axios from "axios";
import requests from "../utils/request";

// get请求
export function httpGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        requests
            .get(url, {
                params,
            })
            .then((reslut) => {
                resolve(reslut);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function httpPost(url, data = {}) {
    return new Promise((resolve, reject) => {
        requests
            .post(url, data)
            .then((reslut) => {
                resolve(reslut);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// post请求
// export function httpPost({ url, data = {}, params = {} }) {
//   return new Promise((resolve, reject) => {
//     axios({
//       url,
//       method: "post",
//       transformRequest: [
//         function (data) {
//           let ret = "";
//           for (let it in data) {
//             ret +=
//               encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
//           }
//           return ret;
//         },
//       ],
//       // 发送的数据
//       data,
//       // url参数
//       params,
//     }).then((res) => {
//       resolve(res.data);
//     });
//   });
// }
