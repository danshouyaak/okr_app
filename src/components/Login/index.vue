<template>
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
  <!-- <el-button plain @click="centerDialogVisible = true"> 点击登录</el-button> -->

  <el-dialog
      v-model="centerDialogVisible"
      @closed="handleClosed"
      title="登录"
      width="500"
      center
  >
    <span>
      <el-row :justify="flex">
        <el-input
          v-model="userName"
          style="width: 240px"
          placeholder="请输入账号"
        />

        <el-input
          type="password"
          v-model="userPwd"
          style="width: 240px"
          placeholder="请输入密码"
        />
      </el-row>
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="loginUser"> 确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import {ref, reactive, toRefs} from "vue";
import {reqUserLogin} from "@/api/index";
import {ElMessage} from "element-plus";

const centerDialogVisible = ref(false);
let userName = ref("");
let userPwd = ref("");
let flex = ref("center");

const loginUser = () => {
  if (!userName.value.trim() || !userPwd.value.trim()) {
    centerDialogVisible.value = false
    return
  }
  login()
};

// 登录请求的函数
async function login() {
  let res = [];
  try {
    const data = {username: userName.value, password: userPwd.value};
    res = await reqUserLogin(data);
    if (res.meta.status === 200) {
      ElMessage({
        message: "登录成功",
        type: "success",
      });
    }
    state.circleUrl =
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
    centerDialogVisible.value = false;
    console.log(res);
  } catch (error) {
    console.error("请求失败：", error);
  }
}


// 头像的图片
const state = reactive({
  circleUrl:
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});
const {circleUrl} = toRefs(state);
</script>
<style scoped>
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
</style>
