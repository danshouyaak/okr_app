<template>
  <div class="scrollable-div">
    <div class="newResult">
      <input placeholder="📃新建关键结果" v-model="newResultValue"/>
      <!-- <button type="button">点击新建☞</button> -->
      <button class="button" @click="handleRes">
        <span class="transition"></span>
        <span class="gradient"></span>
        <span class="label">点击新建</span>
      </button>
    </div>
    <div class="newRes">
      <div v-for="(item, index) in state.keyResultList" :key="index">
        <div style="display: flex; align-items: center; height: 50px">
          <div style="flex: 9">{{ item.key_result_content }}</div>
          <button style="margin-right: 2%" @click="deleteRes(item.id)">
            删除
          </button>
        </div>
        <hr v-if="index !== state.keyResultList.length - 1"/>
      </div>
    </div>
    <div class="moresetting">
      <div style="font-size: 10px; text-align: left">更多设置</div>
      <div style="">
        <div>📃 使用权重</div>
        <el-switch v-model="switchVal"/>
      </div>
      <div style="font-size: 12px; text-align: left">
        根据关键结果对于目标进度进行共享分配权重等级
      </div>
    </div>
  </div>
</template>

<script setup name="关键结果">
import {ref, reactive, onMounted} from "vue";
import {
  reqGetKeyResultList,
  reqAddKeyResult,
  reqDeleteResult,
} from "@/api/index.js";
import {ElMessage} from "element-plus";

let switchVal = ref(true);
const newResultValue = ref("");
const state = reactive({
  keyResultList: [],
});
// 点击新建按钮
const handleRes = () => {
  AddKeyRes();
  getKeyResLisst();
  ElMessage.success("添加成功");
  newResultValue.value = "";
};
// 删除按钮
const deleteRes = (id) => {
  DeleteKeyRes(id);
  getKeyResLisst();
  ElMessage.success("删除成功");
};
onMounted(() => {
  getKeyResLisst();
});

// 获取关键结果列表
async function getKeyResLisst() {
  await reqGetKeyResultList().then((res) => {
    state.keyResultList = res.data;
  });
}

// 添加关键结果
async function AddKeyRes() {
  const data = {keyRes: newResultValue.value};
  await reqAddKeyResult(data);
}

// 根据id删除关键结果 reqDeleteResult
async function DeleteKeyRes(id) {
  await reqDeleteResult(id);
}
</script>

<style lang="scss" scoped>
.scrollable-div {
  height: 350px;
  /* 设置div的高度 */
  overflow: auto;
  /* 当内容溢出时显示滚动条 */
}
.newResult {
  text-align: left;
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  input {
    border: none;
    background-color: transparent;
    font-weight: bolder;
    outline: none;
    border: none;
    width: 80%;
  }
}

//
.button {
  width: 150px;
  height: 100%;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
  padding: 1em 2.7em;
  font-weight: 500;
  background: #1f2937;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
  cursor: pointer;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.6em;
  margin-top: -0.25em;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3)
  );
}

.label {
  position: relative;
  top: -1px;
}

.transition {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: rgba(16, 185, 129, 0.6);
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button:hover .transition {
  width: 14em;
  height: 14em;
}

button:active {
  transform: scale(0.97);
}

//

.newResult > input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.newRes {
  margin-top: 5%;
  background-color: gray;
  border-radius: 10px;
}
.moresetting {
  margin-top: 5%;

  div:nth-child(2) {
    background-color: gray;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    align-items: center;
    padding: 5px;
  }
}
</style>
