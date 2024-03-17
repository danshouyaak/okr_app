import {ref} from "vue";
import {reqUserLogin} from "@/api/index";
import {ElMessage} from "element-plus";
import {setToken} from "@/utils/token";
import {useRouter} from "vue-router";

export const useLogin = () => {
    let userName = ref("");
    let userPwd = ref("");
    const router = useRouter();
    // 点击登录
    const loginUser = () => {
        if (!userName.value.trim() || !userPwd.value.trim()) {
            centerDialogVisible.value = false;
            return;
        }
        login();
    };

    // 登录请求的函数
    async function login() {
        let res = [];
        const data = {username: userName.value, password: userPwd.value};
        res = await reqUserLogin(data);
        // console.log(res);
        ElMessage({
            message: "登录成功",
            type: "success",
        });
        const token = res.data[0].token;
        setToken(token);

        router.push({
            path: "/home",
        });
    }

    return {
        userName,
        userPwd,
        loginUser,
        login,
    };
};
