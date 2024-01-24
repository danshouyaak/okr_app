<template>
    <div>
        <div class="top">
            <img src="../../assets/list.png" width="25px" height="25px">
            <span>+</span>
        </div>
        <div class="allTar">
            <img src="../../assets/tar.png" width="30px" height="30px">
            <h2>全部目标</h2>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.top{
    display:flex;
    justify-content: end;
    align-items: center;
    img{
        margin-right: 20px;
    }
    span{
        margin-right: 15px;
        font-size: 40px;
        color: blue;
    }
}
.allTar{
    display: flex;
    justify-content: start;
    align-items: center;
    img{
        margin-left: 15px;
        margin-right: 15px;
    }
}
</style>