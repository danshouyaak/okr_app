// 统一封装get post请求

import axios from "axios";

// get请求
export function httpGet({url, params = {}}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params,
            })
            .then((reslut) => {
                resolve(reslut.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// post请求
export function httpPost({url, data, params = {}}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: "post",
            transformRequest: [
                function (data) {
                    let ret = "";
                    for (let it in data) {
                        ret +=
                            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
                    }
                    return ret;
                },
            ],
            //   发送的数据
            data,
            // url参数
            params,
        }).then((result) => {
            resolve(result.data);
        });
    });
}
