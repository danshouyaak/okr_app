<template>
  <el-button plain @click="centerDialogVisible = true"> 点击登录</el-button>

  <el-dialog v-model="centerDialogVisible" title="登录" width="500" center>
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
<script lang="ts" setup>
import {ref} from "vue";

const centerDialogVisible = ref(false);
let userName = ref("");
let userPwd = ref("");
</script>
