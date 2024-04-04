<template>
  <div class="all">
    <div class="top">
      <h4>目标示例：ios应用开发入门</h4>
      <div>
        <span>复盘</span>
        <img src="../../../assets/edit.png"/>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center">
      <span style="font-size: 0.2em; margin-left: -85%">进度</span>
      <div class="demo-progress">
        <el-progress :percentage="9.23" :format="format"/>
      </div>
    </div>
    <div class="motive">
      <div class="motive-head">
        <span>进度</span>
        <span>v</span>
      </div>
      <div class="motive-content">
        <div>
          <span>1、</span>
          <div>尝试不同的发展方向，我要更多可能性!</div>
        </div>
        <hr style="width: 86.7%; margin-left: 13%"/>
        <div>
          <span>2、</span>
          <div>尝试不同的发展方向，我要更多可能性!</div>
        </div>
      </div>
    </div>
    <div class="feasibility">
      <div class="feasibility-head">
        <span>可行性</span>
        <span>v</span>
      </div>
      <div class="feasibility-content">
        <div>
          <span>1、</span>
          <div>尝试不同的发展方向，我要更多可能性!</div>
        </div>
        <hr style="width: 86.7%; margin-left: 13%"/>
        <div>
          <span>2、</span>
          <div>尝试不同的发展方向，我要更多可能性!</div>
        </div>
      </div>
    </div>
    <div class="keyResult">
      <div style="font-size: 11px; margin-left: -80%">关键结果</div>
      <div class="keyResult-content">
        <div>看完20集springboot视频</div>
        <div>看完20集springboot视频</div>
        <div>看完20集springboot视频</div>
      </div>
    </div>
    <div class="targetNode">
      <div class="targetNode-head" style="font-size: 11px; margin-left: -80%">
        目标节点
      </div>
      <div class="targetNode-content">
        <span>1 无</span>
      </div>
    </div>
    <div class="memo">
      <div class="memo-head" style="font-size: 11px; margin-left: -80%">
        备忘
      </div>
      <div class="memo-content">
        <div class="textarea" placeholder="备忘">
          {{
            state.leftTempRes.okr_target
                ? state.leftTempRes.okr_target.memo
                : "备忘"
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
const format = (percentage) => (percentage === 100 ? "Full" : `${percentage}%`);
import {useGoing} from "@/hooks/useGoing.js";

const {state} = useGoing();
</script>

<style lang="scss" scoped>
.all {
  max-height: 100%;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 7px;
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
  align-items: center;

  h4 {
    margin-left: 25%;
  }

  div {
    margin-left: 11%;
    display: flex;
    align-items: center;

    span {
      margin-right: 15%;
      width: 50px;
      color: rgba(143, 143, 192, 0.796);
      font-size: 18px;
      font-weight: bolder;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
}

.demo-progress {
  width: 95%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.242);
}

.demo-progress .el-progress--line {
  margin: 2%;
  max-width: 95%;
}

.motive,
.feasibility {
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.motive-content,
.feasibility-content {
  background-color: rgba(0, 0, 0, 0.242);
  border-radius: 10px;
  width: 95%;

  div {
    margin: 2%;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;

    span {
      color: blue;
      font-size: 20px;
      font-weight: bolder;
      flex: 1;
    }

    div {
      flex: 8;
    }
  }
}

.motive-head,
.feasibility-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 93%;

  :nth-child(1) {
    font-size: 0.2em;
  }

  :nth-child(2) {
    color: blue;
  }
}

.keyResult {
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.keyResult-content {
  background-color: rgba(0, 0, 0, 0.242);
  border-radius: 10px;
  width: 95%;
  display: flex;

  div {
    background-color: rgba(0, 162, 255, 0.455);
    border: 1px white solid;
    margin: 3%;
    border-radius: 18px;
  }
}

.targetNode {
  margin-top: 8%;
}

.targetNode-content {
  width: 92%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 2%;
  padding: 2%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.242);
}

.memo {
  margin-top: 8%;
  margin-bottom: 5%;
  width: 100%;
}

.memo-content {
  .textarea {
    width: 93%;
    border: none;
    border-radius: 10px;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.242);
    outline: none;
    padding-left: 3%;
    padding-top: 3%;
    resize: none;
  }
}
</style>
