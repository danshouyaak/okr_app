<template>
  <div>
    <div class="top">
      <img src="../../../assets/list.png" width="25px" height="25px"/>
      <span>+</span>
    </div>
    <div class="allTar">
      <img src="../../../assets/tar.png" width="30px" height="30px"/>
      <h2>全部目标</h2>
    </div>
    <div class="group">
      <div class="group-item">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" class="input"/>
      </div>
    </div>
    <div class="underway">
      <div style="color: #a9a9a9; font-size: 10px; margin-left: -80%">
        进行中
      </div>
      <div class="underway-item">
        <div class="item">
          <div>示例目标：ios应用程序开发入门</div>
          <div>🗓️2024/1/6 ~ 2024/2/6</div>
          <el-progress :percentage="percentage1" :color="customColor1"/>
          <hr/>
        </div>

        <div class="item">
          <div>示例目标：ios应用程序开发入门</div>
          <div>🗓️2024/1/6 ~ 2024/2/6</div>
          <el-progress :percentage="percentage2" :color="customColor2"/>
          <hr/>
        </div>

        <div class="item">
          <div>示例目标：ios应用程序开发入门</div>
          <div>🗓️2024/1/6 ~ 2024/2/6</div>
          <el-progress :percentage="percentage3" :color="customColor3"/>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const percentage1 = ref(9);
const percentage2 = ref(20);
const percentage3 = ref(30);
const customColor1 = ref("#409eff");
const customColor2 = ref("#f56c6c");
const customColor3 = ref("#5cb87a");

const customColors = [
  {color: "#f56c6c", percentage: 20},
  {color: "#e6a23c", percentage: 40},
  {color: "#5cb87a", percentage: 60},
  {color: "#1989fa", percentage: 80},
  {color: "#6f7ad3", percentage: 100},
];
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: end;
  align-items: center;

  img {
    margin-right: 20px;
  }

  span {
    margin-right: 15px;
    font-size: 40px;
    color: blue;
  }
}

.allTar {
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    margin-left: 15px;
    margin-right: 15px;
  }
}

.underway {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.underway-item {
  height: 100%;
  width: 92%;
  // border: 1px solid red;
  border-radius: 10px;
  background-color: rgb(57, 62, 66);

  .item {
    margin-top: 2%;
    padding: 1%;
    // border: 1px solid brown;
    div {
      font-weight: 1000;
      font-size: 13px;
      text-align: left;
      margin-left: 10%;
      color: rgba(255, 255, 255, 0.645);
    }
  }
}

// search
.group {
  display: flex;
  justify-content: center;
}

.group-item {
  display: flex;
  height: 30px;
  border-radius: 10px;
  background-color: gray;
  width: 92%;
  align-items: center;
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-left: 2%;
}

.input {
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: gray;
  margin-left: 2%;
  width: 100%;
}

.input::placeholder {
  color: aliceblue;
}
</style>
