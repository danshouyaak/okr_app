<template>
    <div class="scrollable-div">
        <div
            style="text-align: left;background-color: gray;padding: 10px;border-radius: 10px;color: blue;font-weight: bolder;">
            📃新建关键结果</div>
        <div class="moresetting">
            <div style="font-size: 10px;text-align: left;">更多设置</div>
            <div style="">
                <div>📃 使用权重</div>
                <el-switch v-model="value1" />
            </div>
            <div style="font-size: 12px;text-align: left;">根据关键结果对于目标进度进行共享分配权重等级</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
let value1 = ref(true)
</script>

<style lang="scss" scoped>
.scrollable-div {
    height: 350px;
    /* 设置div的高度 */
    overflow: auto;
    /* 当内容溢出时显示滚动条 */
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
}</style>