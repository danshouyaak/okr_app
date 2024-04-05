<template>
  <div>
    <div class="login">
      <Login></Login>
    </div>
    <h2 style="text-align: left; margin-left: 4%">Vision</h2>
    <div class="mid">
      <div class="abstract">
        <img src="../../../assets/zhaiyao.png" width="30px" height="30px"/>
        <span>摘要</span>
      </div>
      <div class="goal-node">
        <div class="head">
          <div>目标节点</div>
          <div style="color: blue">排序</div>
        </div>
        <div class="target-node">
          <div style="background-color: rgb(57, 62, 66)">
            <img
                src="../../../assets/tar.png"
                width="20px"
                height="20px"
            /><span>全部目标</span>
            <div>7</div>
          </div>
          <div>
            <img
                src="../../../assets/tar.png"
                width="20px"
                height="20px"
            /><span>示例目标</span>
            <div>7</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="foot">
      <img src="../../../assets/setting.png" alt="" srcset=""/>
      <Dialog></Dialog>
    </div>
  </div>
</template>

<script setup>
import Dialog from "@/components/Dialog/index.vue";
import Login from "@/components/Login/index.vue";
</script>

<style lang="scss" scoped>
.login {
  margin-left: -18%;
  margin-top: 3%;
}
.mid {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

.goal-node {
  width: 90%;
  margin-top: 5%;
}

.head {
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.target-node {
  background-color: rgba(57, 62, 66, 0.481);

  div {
    display: flex;
    justify-content: start;
    align-items: center;

    line-height: 35px;

    img {
      margin-left: 4%;
    }

    span {
      font-size: 14px;
      margin-left: 5%;
    }

    div {
      margin-left: 57%;
    }
  }
}
.foot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -5%;

  img {
    width: 30px;
    height: 30px;
    margin-left: 5%;
  }

  span {
    width: 30px;
    height: 30px;
    margin-right: 5%;
  }

  z-index: 2;
}
</style>
