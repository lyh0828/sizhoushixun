<!--
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-17 10:19:48
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-06-17 16:40:18
 * @FilePath: \sizhoushixun\src\components\PetDay\DayList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <div class="mui-input-row mui-search">
					<input type="search" class="mui-input-clear" placeholder="搜索">
			</div>
        </div>
        
        <div class="main">
            <p class="mainTitle" >宠物的日记</p>
            
            <ul>
                <li v-for="item in daylist" :key="item.id">
                    <router-link :to="'/home/daylist/dayinfo/'+item._id">
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
    created() {
        this.getdaylist()
    },
    methods: {
        getdaylist() {
            this.$http.get("dayinfos").then(result => {
                console.log(result.body)
                //if (result.body.status === 0) {
                    this.daylist = result.body
               // } else {
                  //  console.log('数据加载失败')
               // }
            })
        }
    }
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
            margin: 5px -10px 0 5px;
            border-radius: 50px;
        }

        .topFont {
            font-size: 30px;
            font-style: floor($number: 0);
            vertical-align: middle;
            display: table-cell;
            font-weight: bold;
        }
        div{
            float: right;
            width: 150px;
            height: 50px;
            margin: 2px 20px 0 0;
            padding-top: 12px;
            input{
                border-radius: 45px;
                background-color: snow;
                border:.5px solid #fad7be;
            }
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
            padding-bottom: 35px;
            text-align: center;
            font-size: 33px;
            color: #3e1e07;
        }

        ul {
            margin: 0 10px 0px -30px;
            background-color: #FCF5F0;
            overflow:hidden;
            li {
                float: left;
                width: 190px;
                height: 100%;
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
