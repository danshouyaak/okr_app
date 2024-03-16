<template>
  <div class="box-max">
    <div class="info-box">
      <div class="info-box-content">
        <img
            style="width: 90px; height: 90px; border-radius: 100%"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div class="info-box-info">
          <div> I'm zhang San</div>
          <div
              style="
              background-color: skyblue;
              width: 200px;
              height: 3px;
              border-radius: 20px;
              margin: 10px 0;
            "
          />
          <span>我是{{ user.nick_name | zhangsan }}</span>
          <span>我是一条咸鱼🐟</span>
        </div>
      </div>
    </div>
    <button class="button" @click="logOut">点击退出</button>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted} from "vue";
import {removeToken} from "@/utils/token";
import {reqGetUserInfo} from "@/api/index.js";
const logOut = () => {
  removeToken();
  window.location.reload();
};
onMounted(() => {
  getUserInfo();
});
let state = reactive({
  userInfo: [],
});
let user = []

// 获取用户信息
async function getUserInfo() {
  await reqGetUserInfo().then((res) => {
    // state.userInfo = res.data;
    user = res.data.findAllUserInfoList[0]
    console.log(res.data.findAllUserInfoList[0].nick_name);
  });
}
</script>

<style lang="scss" scoped>
.box-max {
  width: 800px;
  height: 450px;
  margin-right: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-box {
  width: 40%;
  height: 70%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

.info-box-content {
  margin-top: -45px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-box-info {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.button {
  width: 88px;
  height: 35px;
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #a29bfe;
}

.button:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}
</style>
