<template>
    <div class="container">
        <div class="left">
            <left />
        </div>

        <div class="main">
            <center />
        </div>
        <div class="right">
            <right />
        </div>

    </div>
</template>


<script setup>
import left from "./left/index.vue"
import center from "./center/index.vue"
import right from "./right/index.vue"
</script>
<script>
export default {

}
</script>


<style lang="scss" scoped>
* {
    color: white;
}
.container {
    width: 1100px;
    height: 680px;
    display: flex;
    justify-content: space-between;
    background-color: black;
}
.left{
    height: 100%;
    width: 30%;
    background-color: rgb(30, 41, 51);
    margin-right: 1.3px;
}
.main{
    height: 100%;
    width: 35%;
    margin-left: 1px;
    
    background-color: rgb(30, 41, 51);
}
.right{
    height: 100%;
    width: 45%;
    margin-left: 2px;
    background-color: rgb(30, 41, 51);
}
</style>
  