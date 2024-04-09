<template>
  <span @click="visibles" class="span"> + </span>
  <el-dialog v-model="visible" :show-close="false" width="1000">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <div>编辑目标</div>
        <span @click="closeDialog">完成</span>
      </div>
      <div class="center">
        <div class="tab">
          <span
              v-for="(item, index) in items"
              :key="index"
              @click="changeColor(index)"
              :class="{ 'my-tab': true, 'my-tab--active': tabIndex === index }"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="content-one" v-show="tabIndex == 0">
        <Item1/>
      </div>
      <div class="content-two" v-show="tabIndex == 1">
        <Item2/>
      </div>
      <div class="content-three" v-show="tabIndex == 2">
        <Item3/>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";
import {getToken} from "@/utils/token.js";
import {useRouter} from "vue-router";
import {ElDialog} from "element-plus";
import Item1 from "./Item1/item1.vue";
import Item2 from "./Item2/item2.vue";
import Item3 from "./Item3/item3.vue";
import {useGetTarget, useKeyRes} from "@/hooks/useGetTarget.js";

const {inp1, getTargetList, memo, sTime, eTime} = useGetTarget();
const {newResultValue} = useKeyRes();
import {reqGoingAdd} from "@/api/index.js";
import {ElMessage} from "element-plus";
const closeDialog = () => {
  if (inp1.value && newResultValue.value) {
    addGoingAdd();
    ElMessage.success("操作成功");
  }
  visible.value = false; // 控制窗口关闭
};

// reqGoingAdd
async function addGoingAdd() {
  let data = {
    startTime: sTime.value,
    endTime: eTime.value,
    addValue: inp1.value,
    keyRes: newResultValue.value,
    memo: memo.value,
  };
  let res = await reqGoingAdd(data);
  inp1.value = "";
  newResultValue.value = "";
  getTargetList();
}

const router = useRouter();

const visible = ref(false);
const radioValue = ref(false);
const visibles = () => {
  if (!getToken()) {
    router.push({
      path: "/login",
    });
    return;
  }
  visible.value = true;
};
const tabIndex = ref(0);
const items = ["基本信息", "关键结果", "动机&可行性"];
const changeColor = (index) => {
  tabIndex.value = index;
};
function radioCheck() {
  radioValue.value = !radioValue.value;
}
</script>

<style scoped>
.span {
  font-size: 40px;
  color: blue;
  margin-right: 5%;
}

.my-header {
  div:first-child {
    color: yellowgreen;
    text-align: center;
    display: inline-block;
    margin-right: 38%;
    font-size: 20px;
    font-weight: bolder;
  }

  span:nth-child(2) {
    color: rgb(0, 136, 255);
    font-weight: bold;
    font-size: 18px;
    margin-right: -45%;
  }
}

.center {
  div:first-child {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: antiquewhite;
    height: 50px;

    .my-tab {
      font-weight: bold;
      font-size: 0.6rem;
      color: gray;
      margin: 5%;
      /* border: 1px red solid; */
      padding: 13px 30px;
      border-radius: 10px;
    }

    .my-tab--active {
      /* color: red; */
      background-color: rgb(0, 255, 208);
    }
  }

  .tab {
    span {
      width: 100%;
      /* height: 100%; */
      overflow: hidden;
    }
  }
}
</style>
