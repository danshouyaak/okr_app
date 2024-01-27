<template>
    <div>
        <div class="top">
            <img src="../../../assets/list.png" width="25px" height="25px">
            <span>+</span>
        </div>
        <div class="allTar">
            <img src="../../../assets/tar.png" width="30px" height="30px">
            <h2>全部目标</h2>
        </div>
        <div class="underway">
            <div style="color:#A9A9A9 ;font-size: 10px;margin-left: -80%;">进行中</div>
            <div class="underway-item">
                <div class="item">
                    <div>示例目标：ios应用程序开发入门</div>
                    <div>🗓️2024/1/6 ~ 2024/2/6</div>
                    <el-progress :percentage="percentage1" :color="customColor1" />
                    <hr>
                </div>

                <div class="item">
                    <div>示例目标：ios应用程序开发入门</div>
                    <div>🗓️2024/1/6 ~ 2024/2/6</div>
                    <el-progress :percentage="percentage2" :color="customColor2" />
                    <hr>
                </div>

                <div class="item">
                    <div>示例目标：ios应用程序开发入门</div>
                    <div>🗓️2024/1/6 ~ 2024/2/6</div>
                    <el-progress :percentage="percentage3" :color="customColor3" />
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
const percentage1 = ref(9)
const percentage2 = ref(20)
const percentage3 = ref(30)
const customColor1 = ref('#409eff')
const customColor2 = ref('#f56c6c')
const customColor3 = ref('#5cb87a')

const customColors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]
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
.underway{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.underway-item {
    height: 100%;
    width: 92%;
    // border: 1px solid red;
    border-radius:10px ;
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
            color: rgba(255, 255, 255, 0.645)
        }
    }
}
</style>