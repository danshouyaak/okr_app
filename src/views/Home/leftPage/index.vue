<template>
  <div>
    <div class="login">
      <Login></Login>
    </div>
    <h2 style="text-align: left; margin-left: 4%">Vision</h2>
    <div class="mid">
      <div class="abstract">
        <img src="../../../assets/zhaiyao.png" width="30px" height="30px"/>
        <span>摘要</span>
      </div>
    </div>
  </div>
  <div>
    <div class="foot">
      <img src="../../../assets/setting.png" alt="" srcset=""/>
      <Dialog></Dialog>
    </div>
  </div>
</template>

<script setup>
import Dialog from "@/components/Dialog/index.vue";
import Login from "@/components/Login/index.vue";
</script>

<style lang="scss" scoped>
.mid {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}

.abstract {
  background-color: rgb(57, 62, 66);
  display: flex;
  width: 90%;
  height: 40px;
  justify-content: start;
  align-items: center;

  img {
    margin-left: 20px;
  }

  span {
    margin-left: 20px;
  }
}

.foot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -5%;

  img {
    width: 30px;
    height: 30px;
    margin-left: 5%;
  }

  span {
    width: 30px;
    height: 30px;
    margin-right: 5%;
  }

  z-index: 2;
}

.login {
  margin-left: -18%;
  margin-top: 3%;
}
</style>
