<template>
  <!-- 头像信息 -->
  <!-- @click="centerDialogVisible = true" -->
  <!--               @click="islogin" -->
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar
              :size="50"
              :src="circleUrl"
              @click="centerDialogVisible = true"
          />
        </div>
      </div>
    </el-col>
  </el-row>

  <el-dialog
      v-model="centerDialogVisible"
      @closed="handleClosed = false"
      title=""
      width="1000"
      center
      class="el-dialog"
      style="display: flex; justify-content: right; height: 500px"
  >
    <div
        v-if="!getToken()"
        class="form-wrapper"
        style="margin-right: 100px; margin-top: 30px"
    >
      <div class="header">LOGIN</div>
      <div class="input-wrapper">
        <div class="border-wrapper">
          <input
              class="border-item"
              v-model="userName"
              placeholder="请输入账号"
              autocomplete="off"
          />
        </div>
        <div class="border-wrapper">
          <input
              class="border-item"
              type="password"
              v-model="userPwd"
              placeholder="请输入密码"
              autocomplete="off"
          />
        </div>
      </div>

      <div
          v-if="!getToken()"
          style="text-align: center; background-color: rgba(255, 255, 255, 0)"
          class="action"
      >
        <div class="btn" @click="loginUser">确认</div>
      </div>
    </div>
    <!-- 登录之后展示的信息 -->
    <template v-if="getToken()" style="display: flex">
      <UserInfo></UserInfo>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref, reactive, toRefs, onMounted} from "vue";
import {reqUserLogin} from "@/api/index";
import {ElMessage} from "element-plus";
import {setToken, getToken, removeToken} from "@/utils/token";
import UserInfo from "@/components/UserInfo/index.vue";
import {useRouter} from 'vue-router'

const router = useRouter()

const centerDialogVisible = ref(false);
let userName = ref("");
let userPwd = ref("");
let flex = ref("center");

onMounted(() => {
  if (isTonken()) {
    state.circleUrl =
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
  }
});

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
  console.log(res);
  ElMessage({
    message: "登录成功",
    type: "success",
  });

  const token = res.data[0].token;
  setToken(token);
  centerDialogVisible.value = false;
  window.location.reload();
}

// 头像的图片
const state = reactive({
  circleUrl:
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});
const {circleUrl} = toRefs(state);

// 判断 是否存在token
const isTonken = () => {
  if (getToken()) {
    return true;
  }
  return false;
};


// 没登陆 跳转到登录页面
const islogin = () => {

  if (getToken()) {
    centerDialogVisible.value = true
    return
  }
  console.log('islogin');
  router.push({
    path: '/login'
  })

}
</script>
<style lang="scss" scoped></style>
<style lang="scss">
.el-dialog,
.el-pager li {
  background: rgba(255, 0, 0, 0);
  background-image: url("@/assets/background-img.png");
  background-size: 100% 100%;
}

.el-dialog__header {
  padding-top: 10px !important;
  background-color: rgb(255, 255, 255, 0);
  border-radius: 14px 14px 0 0;
}

.el-dialog__body {
  border-top: 0 !important;
  background-color: rgba(19, 31, 59, 0);
  color: #ffffff;
}

.el-dialog__footer {
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
}
</style>
<style scoped lang="scss">
.demo-basic--circle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.block {
  flex: 1;
}

// 美化登录界面

* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: JetBrains Mono Medium;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #0e92b3; */
  background: url("img/city.png") no-repeat;
  background-size: 100% 100%;
}

.form-wrapper {
  width: 300px;
  background-color: rgba(41, 45, 62, 0.8);
  color: #fff;
  border-radius: 2px;
  padding: 50px;
}

.form-wrapper .header {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 100px;
}

.form-wrapper .input-wrapper input {
  background-color: rgb(41, 45, 62);
  border: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  outline: none;
}

.form-wrapper .input-wrapper input::placeholder {
  text-transform: uppercase;
}

.form-wrapper .input-wrapper .border-wrapper {
  background-image: linear-gradient(to right, #e8198b, #0eb4dd);
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper .input-wrapper .border-wrapper .border-item {
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 30px;
}

.form-wrapper .action {
  display: flex;
  justify-content: center;
}

.form-wrapper .action .btn {
  width: 60%;
  text-transform: uppercase;
  border: 2px solid #0e92b3;
  text-align: center;
  line-height: 50px;
  border-radius: 30px;
  cursor: pointer;
}

.form-wrapper .action .btn:hover {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.form-wrapper .icon-wrapper {
  text-align: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 1px dashed rgb(146, 146, 146);
  padding: 20px;
}

.form-wrapper .icon-wrapper i {
  font-size: 20px;
  color: rgb(187, 187, 187);
  cursor: pointer;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 20px;
}

.form-wrapper .icon-wrapper i:hover {
  background-color: #0e92b3;
}
</style>
