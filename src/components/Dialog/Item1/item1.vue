<template>
  <div class="scrollable-div">
    <div class="content-one">
      <!-- <span>提高身体素质</span> -->
      <input
        class="input"
        type="text"
        placeholder="请输入目标：提高身体素质"
        v-model="inp1"
      />
      <button
        @click="enterInp1"
        style="
          margin: 0;
          padding: 0;
          background-color: gray;
          outline: none;
          border: none;
        "
      >
        点击添加
      </button>
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
      <div class="resAdd">
        <div
          style="margin-top: 1%; margin-bottom: 1%"
          v-for="(item, index) in resAdd"
          :key="index"
        >
          <div>
            <div class="resAdd-item">
              <span>{{ item }}</span>
              <div>
                <span>{{ curTime }}</span>
                <button style="outline: none" @click="deleteResItem(index)">
                  删除
                </button>
              </div>
            </div>
            <hr v-if="index !== resAdd.length - 1" />
          </div>
        </div>
      </div>
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
            <!--  -->
            <curDate></curDate>
            <!--  -->
          </div>
          <hr />
          <div class="plan1">
            <span>结束日期</span>
            <curDate></curDate>
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
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import curDate from "../../Date/index.vue";

let inp1 = ref("");
const resAdd = reactive([]);
const radioValue = ref(false);
const value1 = ref(true);

// 点击添加的函数
function enterInp1() {
  if (!inp1.value.trim()) {
    ElMessage.error("输入内容不能为空！！！");
    return;
  }
  if (!radioValue.value) {
    ElMessage.error("请勾选添加按钮！！！");
    return;
  }
  getCurrentDate();
  resAdd.push(inp1.value);
}

function radioCheck() {
  radioValue.value = !radioValue.value;
}
function handleChange(value) {
  // 技术开启的开关
  console.log(value);
  if (value) {
  }
}
const deleteResItem = (index) => {
  // console.log(index);
  resAdd.splice(index, 1);
};

//获取当前日期
let curTime = ref("");
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // padStart(获取字符串的最小长度，不够长度补充)
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  curTime.value = `${year}/${month}/${day} ${hours}:${minutes}`;
}
//
</script>

<style lang="scss" scoped>
.input,
.resAdd {
  outline: none;
  background-color: transparent;
  border: none;
  width: 80%;
  background-color: gray;
  border-radius: 10px;
}
.input::placeholder {
  color: rgba(255, 255, 255, 0.5); /* 白色，透明度为0.5 */
}
.resAdd {
  width: 100%;
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
.resAdd-item {
  display: flex;
  align-items: center;
  span {
    flex: 50%;
  }
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1%;
  }
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
