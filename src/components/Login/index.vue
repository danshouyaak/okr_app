<template>
  <el-button plain @click="centerDialogVisible = true"> 点击登录</el-button>

  <el-dialog
      v-model="centerDialogVisible"
      @closed="handleClosed"
      title="登录"
      width="500"
      center
  >
    <span>
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
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import {ref} from "vue";
import {reqGetUserList} from "@/api/index";

const centerDialogVisible = ref(false);
let userName = ref("");
let userPwd = ref("");

async function handleClosed() {
  console.log(111);
  let res = [];
  try {
    res = await reqGetUserList();
    console.log(res);
  } catch (error) {
    console.error("请求失败：", error);
  }
}
</script>
