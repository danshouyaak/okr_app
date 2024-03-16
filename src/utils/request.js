//对于axios进行二次封装
import axios from "axios";

//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import {getToken, setToken, removeToken} from "@/utils/token";

//1.利用axios对象的方法create，去创建一个axios实例
//2.request就是axios

const requests = axios.create({
    // 配置axios对象
    //   基础路径
    baseURL: "http://localhost:3000",
    //   请求超出的时间
    timeout: 3000,
});

//请求拦截器：再发请求之前，请求拦截器可以检测的到，可以在请求发送出去之前做一些事情
requests.interceptors.request.use(
    (config) => {
        if (getToken()) {
            config.headers.Authorization = getToken();
        }
        nprogress.start();
        return config;
    },
    (err) => {
        console.log(2222);
        return Promise.reject(new Error("file"));
    }
);

// 响应拦截器
requests.interceptors.response.use(
    (res) => {
        nprogress.done();
        return res.data;
    },
    (err) => {
        let code = err.request.status
        if (code == 401) {
            removeToken()
            window.location.href = '/login'
        }
        return Promise.reject(err);
    }
);

export default requests;
