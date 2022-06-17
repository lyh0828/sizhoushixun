
<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">个人主页</span>
            <a><span class="mui-icon mui-icon-search"></span></a>
        </div>
        <div class="main">

        </div>


    </div>


</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.con{
    margin-top: 40px;
    .top{
        height: 50px;
        background-color: snow;
        img{
            height: 50px;
            margin: 5px 0 0 5px;
            border-radius: 50px;
        }
        .topFont{
            font-size: 30px;
            font-style: floor($number: 0);
            line-height: normal;
            
        }
    }
    .main{
        height: 1000px;
        background-color: #FCF5F0;
    }
}

</style>