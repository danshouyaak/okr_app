<template>
  <span @click="visible = true" class="span"> + </span>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <div>编辑目标</div>
        <span @click="close">完成</span>
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
      <div class="content-one" v-if="tabIndex == 0">
        <!-- <span>提高身体素质</span> -->
        <!-- <input type="radio"> -->
        <!-- <input type="radio" name="radioGroup" :checked="radioValue" @click="radioCheck"> -->
        <Item1></Item1>
      </div>
      <div
          class="content-two"
          style="color: black; margin-top: 8%"
          v-if="tabIndex == 1"
      >
        <Item2></Item2>
      </div>
      <div
          class="content-three"
          style="color: black; margin-top: 8%"
          v-if="tabIndex == 2"
      >
        <Item3></Item3>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";
import {ElButton, ElDialog} from "element-plus";
import Item1 from "./Item1/item1.vue";
import Item2 from "./Item2/item2.vue";
import Item3 from "./Item3/item3.vue";

const visible = ref(false);
const radioValue = ref(false);

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

.content-one {
  /* color: black;
    margin-top: 8%; */

  /* div:first-child {
        display: flex;
        justify-content: space-between;
        background-color: gray;
        padding: 2%;
        border-radius: 10px;

        span {
            font-size: 15px;
            font-weight: bolder;
            color: rgba(245, 245, 245, 0.705);
        }
    } */
}
</style>
