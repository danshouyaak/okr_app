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
      <div class="resAdd"></div>
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
    <div class="plan" style="transition: all 1s">
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
            <curDate @startTime="startTime"></curDate>
            <!--  -->
          </div>
          <hr />
          <div class="plan1">
            <span>结束日期</span>
            <curDate @endTime="endTime"></curDate>
          </div>
        </div>
      </div>
    </div>
    <div class="memo">
      <div style="color: black">备忘</div>
      <textarea placeholder="备忘" v-model="memo"></textarea>
    </div>
  </div>

  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
  >
    <span>是否确认删除</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="deleteButton(false)">取消</el-button>
        <el-button type="primary" @click="deleteButton(true)"> 确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup name="Item1">
import {ref, onMounted} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
import curDate from "../../Date/index.vue";
import {reqAddTarget, reqDeleteTarget} from "@/api/index";
import {getToken} from "@/utils/token";

import {useGetTarget} from "@/hooks/useGetTarget.js";

const {inp1, state, sTime, eTime, memo, getTargetList} = useGetTarget();

let id = ref(null);
const radioValue = ref(false);
const value1 = ref(false);
// let sTime = ref(""); // 开始时间
// let eTime = ref(""); // 结束时间

onMounted(() => {
  if (getToken()) {
    // getTargetList();
  }
});
const startTime = (value) => {
  sTime.value = value.value.replace(/-/g, "/");
};
const endTime = (value) => {
  eTime.value = value.value.replace(/-/g, "/");
};
onMounted(() => {
});

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
  // addTarget();
  inp1.value = "";
  radioValue.value = false;
}

function radioCheck() {
  radioValue.value = !radioValue.value;
}
function handleChange(value) {
  // 技术开启的开关
  // console.log(value);
  if (value) {
  }
}

// 点击删除
const deleteResItem = (deleteId) => {
  id.value = deleteId;
  dialogVisible.value = true;
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

// 添加目标
async function addTarget() {
  let data = {addValue: inp1.value};
  let res = await reqAddTarget(data);
  if (res.meta.status === 200) {
    ElMessage({
      message: "添加成功",
      type: "success",
    });
  }
  getTargetList();
}

// 根据id删除某一个目标
async function DeleteTarget(id) {
  let res = await reqDeleteTarget(id);
  if (res.meta.status === 200) {
    ElMessage({
      message: "删除成功",
      type: "success",
    });
  }
  getTargetList();
  return res;
}

// 删除弹窗
const dialogVisible = ref(false);
let deleteButton = (variable) => {
  if (variable) {
    // DeleteTarget(id.value);
    getTargetList();
    dialogVisible.value = false;
    return;
  }
  dialogVisible.value = false;
  return;
};
const handleClose = () => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
};
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

  textarea {
    width: 95%;
    height: 200px;
    border-radius: 10px;
    outline: none;
    background-color: rgba(0, 0, 0, 0.242);
    padding-left: 2%;
    padding-top: 2%;
    resize: none;
    border: none;
  }
}
</style>
