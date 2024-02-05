<template>
  <div class="scrollable-div">
    <div class="content-one">
      <!-- <span>提高身体素质</span> -->
      <input type="text" placeholder="例如：提高身体素质" class="input" />
      <!-- <input type="radio"> -->
      <input
        type="radio"
        name="radioGroup"
        :checked="radioValue"
        @click="radioCheck"
      />
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-items: start;
        align-items: start;
      "
    >
      <span>用简短的一句话描述目标，不包含量化的数字</span>
      <span>如：让自己变得跟健康</span>
    </div>
    <div style="margin-top: 5%; display: flex; flex-direction: column">
      <span style="text-align: left; margin-left: 2%">目标节点</span>
      <div
        style="
          padding: 10px;
          background-color: gray;
          display: flex;
          justify-content: space-between;
          border-radius: 10px;
        "
      >
        <span style="color: black">🗓️ 示例目标</span>
        <!-- <input type="radio"> -->
        <input type="radio" />
      </div>
    </div>
    <div class="plan">
      <div style="text-align: left; margin: 2%">计划</div>
      <div style="background-color: gray; border-radius: 10px">
        <div class="plan1">
          <span>开启</span>
          <el-switch v-model="value1" @change="handleChange" />
        </div>
        <div v-if="value1">
          <hr />
          <div class="plan1">
            <span>开始日期</span>
            <span>2024/1/15</span>
          </div>
          <hr />
          <div class="plan1">
            <span>结束日期</span>
            <span>2024/2/15</span>
          </div>
        </div>
      </div>
    </div>
    <div class="memo">
      <span>备忘</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const radioValue = ref(false);
const value1 = ref(true);
function radioCheck() {
  radioValue.value = !radioValue.value;
}
function handleChange(value) {
  console.log(value);
  if (value) {
  }
}
</script>

<style lang="scss" scoped>
.input {
  outline: none;
  background-color: transparent;
  border: none;
}
.input::placeholder {
  color: rgba(255, 255, 255, 0.5); /* 白色，透明度为0.5 */
}
* {
  color: black;
  font-size: 14px;
  font-weight: bold;
}

.scrollable-div {
  height: 407px;
  /* 设置div的高度 */
  overflow: auto;
  /* 当内容溢出时显示滚动条 */
}

.content-one {
  margin-top: 7%;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
}

.plan {
  margin-top: 7%;
  .plan1 {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.memo {
  margin-top: 10%;
}
</style>
