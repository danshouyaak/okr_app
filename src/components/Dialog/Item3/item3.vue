<template>
    <div class="scrollable-div">
        <div class="new" style="">
            📃新建动机 & 可行性
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scrollable-div {
    height: 350px;
    /* 设置div的高度 */
    overflow: auto;
    /* 当内容溢出时显示滚动条 */
}

.new {
    color: blue;
    font-weight: bolder;
    text-align: left;
    background-color: gray;
    border-radius: 10px;
    padding: 10px;
}</style>