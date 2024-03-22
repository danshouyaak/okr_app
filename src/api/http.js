// 统一封装get post请求

import requests from "../utils/request";

// get请求
export function httpGet({url, meth, params = {}}) {
    return new Promise((resolve, reject) => {
        requests({
            url,
            meth,
            params,
        })
            .then((reslut) => {
                // console.log(reslut);
                resolve(reslut);
            })
            .catch((err) => {
                // console.log(err);
                reject(err);
            });
    });
}

export function httpPost({url, method, data = {}}) {
    return new Promise((resolve, reject) => {
        requests({url, method, data})
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
