import {ref, reactive} from "vue";
import {reqUserLogin, reqUserRegister} from "@/api/index";
import {ElMessage} from "element-plus";
import {setToken} from "@/utils/token";
import {useRouter} from "vue-router";

let userName = ref("");
let userPwd = ref("");
let loadings = reactive({
    listLoading: false,
});
// 登录hooks
export const useLogin = () => {
    const router = useRouter();
    // 点击登录
    const loginUser = () => {
        if (!userName.value.trim() || !userPwd.value.trim()) {
            //   centerDialogVisible.value = false;
            return;
        }
        loadings.listLoading = true;
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
        // loadings.listLoading = false
        router.push({
            path: "/home",
        });
    }

    return {
        userName,
        userPwd,
        loginUser,
        login,
        loadings,
    };
};
export const useRegister = () => {
    const router = useRouter();
    // 点击注册
    const registerUser = () => {
        if (
            !userPwd.value ||
            !userName.value ||
            !userName.value.trim() ||
            !userPwd.value.trim()
        ) {
            ElMessage.error("请填写完整账号密码");
            return;
        }
        loadings.listLoading = true;
        register();
        router.push({
            path: "/login",
        });
    };

    async function register() {
        let res = [];
        const data = {username: userName.value, password: userPwd.value};
        res = await reqUserRegister(data);
        ElMessage({
            message: res.meta.msg,
            type: "success",
        });
        loadings.listLoading = false;
    }

    return {
        userName,
        userPwd,
        registerUser,
        register,
        loadings
    };
};
