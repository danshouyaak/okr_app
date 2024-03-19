<template>
  <div class="home">
    <div class="form-wrapper">
      <div class="header">LOGIN</div>
      <div class="input-wrapper">
        <div class="border-wrapper">
          <input
              type="text"
              name="username"
              placeholder="username"
              class="border-item"
              autocomplete="off"
              v-model="userName"
          />
        </div>
        <div class="border-wrapper">
          <input
              type="password"
              name="password"
              placeholder="password"
              class="border-item"
              autocomplete="off"
              v-model="userPwd"
          />
        </div>
      </div>
      <div class="action">
        <el-button class="btn" @click="loginUser" :loading="loadings.listLoading">login</el-button>
      </div>
      <router-link :to="{ path: 'register'}" style="font-size: 10px;margin-top: 1%;">点击注册</router-link>
    </div>
  </div>
</template>

<script setup>
import {useLogin} from "@/hooks/useLogin.js";

const {userName, userPwd, loginUser, loadings} = useLogin();

</script>

<style lang="scss" scoped>
.home {
  width: 1000px;
  height: 680px;
  background-image: url("@/assets/background-img.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper {
  border-radius: 10px;
  background-color: rgb(41, 45, 62, 0.4);
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.header {
  font-size: 35px;
  color: white;
}

.input-wrapper {
  //   border: 1px solid black;
  width: 60%;
}

.input-wrapper input::placeholder {
  text-transform: uppercase;
  font-size: 14px;
}

.border-wrapper {
  margin: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-image: linear-gradient(to right, #e8198b, #0eb4dd);
}

.border-item {
  outline: none;
  border: none;
  width: 95%;
  height: 85%;
  line-height: 20%;
  border-radius: 30px;
  background-color: rgb(41, 45, 62);
  height: calc(100% - 6px);
  width: calc(100% - 10px);
  text-align: center;
}

.action {
  margin-top: 3%;
  border: 1px solid black;
  font-size: 25px;
  width: 30%;
  height: 13%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: rgb(179, 220, 245);
  border-width: 2px;
}

.btn {
  background-color: rgb(41, 45, 62, 0.4);
  border-radius: 30px;
  height: calc(100% - 6px);
  width: calc(100% - 8px);
}

.action .btn:hover {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
</style>
