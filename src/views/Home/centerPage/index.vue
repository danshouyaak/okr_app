<template>
  <div class="all">
    <div class="top">
      <img src="../../../assets/list.png" width="25px" height="25px"/>
      <Dialog></Dialog>
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
        <div
            class="item"
            v-for="(item, index) in state.goingList"
            :key="item.id"
            :class="{
            'underway-item-active': index === selectTemp,
          }"
            @click="selectItem(index, item)"
        >
          <!-- <div v-for="item in state.resAdd" :key="item.id">{{ item.target_content }}</div> -->
          <div>{{ item.key_result_content }}</div>
          <!-- <div>🗓️2024/1/6 ~ 2024/2/6</div> -->
          <div>
            🗓️{{ item.okr_target.start_time || "未设置" }}~{{
              item.okr_target.end_time || "未设置"
            }}
          </div>
          <el-progress :percentage="percentage1" :color="customColor1"/>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dialog from "@/components/Dialog/index.vue";
import {ref, onMounted, reactive} from "vue";
import {useGoing} from "@/hooks/useGoing.js";

const {getGoingTargetList, state} = useGoing();

onMounted(() => {
  getGoingTargetList();
  // console.log(state.goingList);
});
const percentage1 = ref(9);
const customColor1 = ref("#409eff");
const selectTemp = ref(0);

const selectItem = (index, item) => {
  selectTemp.value = index;
  state.leftTempRes = item;
};
</script>

<style lang="scss" scoped>
.all {
  max-height: 100%;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 5px;
  height: 16px;
  background-color: aqua;
}

::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #40a0ff;
}

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

.underway-item-active {
  background-color: black;
  transition: all 0.8s;
}

.underway-item {
  margin-bottom: 2%;
  height: 100%;
  width: 92%;
  // border: 1px solid red;
  border-radius: 10px;
  background-color: rgb(57, 62, 66);

  .item {
    padding: 1%;
    border-radius: 10px;
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
