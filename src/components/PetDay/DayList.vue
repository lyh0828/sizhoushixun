
<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <a class="iconSearch"><span class="mui-icon mui-icon-search"></span></a>
        </div>
        <div class="main">
            <p class="mainTitle">宠物的日记</p>
            <ul>
                <li v-for="item in daylist" :key="item.id">
                    <router-link :to="'/home/daylist/dayinfo/'+item.id">
                        <img :src="item.img_url">
                        <span>{{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            daylist: []
        }
    },
    //生命周期(页面一展示就执行)
    created() {
        //调用此方法
        this.getdaylist()
    },
    methods: {
        //获取新闻列表数据的方法
        getdaylist() {
            this.$http.get("api/getnewslist").then(result => {
                console.log(result.body)
                if (result.body.status === 0) {
                    this.daylist = result.body.message
                } else {
                    console.log('数据加载失败')
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.con {
    margin-top: 40px;
    margin-bottom: 50px;
    ul {
        li {
            list-style: none;
        }
    }

    .top {
        height: 40px;
        background-color: snow;
        display: table;
        width: 100%;

        img {
            height: 40px;
            margin: 5px -27px 0 5px;
            border-radius: 50px;
        }

        .topFont {
            font-size: 30px;
            font-style: floor($number: 0);
            vertical-align: middle;
            display: table-cell;
            font-weight: bold;
        }

        .iconSearch {
            vertical-align: middle;
            display: table-cell;

            span {
                font-size: 30px;
                font-weight: bold;
            }
        }
    }

    .main {
        background-color: #FCF5F0;

        .mainTitle {
            padding-top: 50px;
            margin-bottom: 35px;
            text-align: center;
            font-size: 33px;
            color: #3e1e07;
        }

        ul {
            margin: 0 10px 300px -30px;
            li {
                float: left;
                width: 190px;;
                background-color: snow;
                box-shadow:0px 0px 5px 0px #aaa;
                border-radius: 10px;
                margin-bottom: 20px;
                margin-right: 5px;
                overflow: auto;
                
                img {
                    width: 190px;
                    height: 100%;
                    border-radius: 10px 10px 0 0 ;
                }
                span{
                    display: inline-block;
                    line-height: 35px;
                    height: 35px;
                    text-align: center;
                    width: 190px;
                    color: black;
                }
            }
        }
    }
}
</style>