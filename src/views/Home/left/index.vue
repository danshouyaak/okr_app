<template>
  <div>
    <img
      src="../../../assets/list.png"
      style="display: flex; margin: 2% 0 0 5%"
    />
    <h2 style="text-align: left; margin-left: 4%">Vision</h2>
    <div style="display: flex; justify-content: center">
      <div class="abstract">
        <img src="../../../assets/zhaiyao.png" width="30px" height="30px" />
        <span>摘要</span>
      </div>
    </div>
    <div style="height: 450px">
      <div style="margin-top: 5%"></div>
    </div>
  </div>
  <div>
    <div class="button">
      <img src="../../../assets/setting.png" alt="" srcset="" />
      <!-- <span>+</span> -->
      <Dialog></Dialog>
    </div>
  </div>
</template>

<script setup>
import Dialog from "../../../components/Dialog/index.vue";
</script>

<style lang="scss" scoped>
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

.button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 40px;
    color: blue;
    margin-right: 5%;
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: 5%;
  }

  z-index: 2;
}
</style>
