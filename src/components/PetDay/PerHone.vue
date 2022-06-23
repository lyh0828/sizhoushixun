<!--
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-17 10:21:58
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-06-17 10:31:20
 * @FilePath: \sizhoushixun\src\components\PetDay\PerHone.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <router-link to="">
                <a id="icon-gear"><span class="mui-icon mui-icon-gear"></span></a>
            </router-link>
        </div>
        <div class="main">
            <div class="mainBcg">

            </div>
            <div class="mainB">
                <div class="mainInfo">
                    <ul>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-card"></span>
                            <div>
                                <span class="mainInfoT">性别:</span>
                                <br>
                                <span class="mainInfoN">{{ sex }}</span>
                            </div>

                        </li>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-grech"></span>
                            <div>
                                <span class="mainInfoT">年龄:</span>
                                <br>
                                <span class="mainInfoN">{{ age }}</span>
                            </div>

                        </li>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-custom"></span>
                            <div>
                                <span class="mainInfoT">简介:</span>
                                <br>
                                <span class="mainInfoN">{{ introduction }}</span>
                            </div>

                        </li>
                    </ul>
                </div>
                <div class="mainInfo2">
                    <img :src="headimg_url">
                    <br>
                    <span class="mainInfo2name">{{ nickname }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            nickname:'',
            headimg_url:'',
            age:'',
            sex:'',
            content:'',
            introduction:''
        }
    },
    created() {
        this.getdayinfo()
    },
    methods: {
        getdayinfo(){
            this.$http.get("dayinfos/info"+ '?id=' + this.$route.params.id).then(result =>{
                console.log(result.body)
                //if (result.body.status === 0){
                    this.nickname = result.body.nickname
                    this.headimg_url = result.body.headimg_url
                    this.sex = result.body.sex
                    this.age = result.body.age
                    this.introduction = result.body.introduction
                //}else{

                //    console.log('数据加载失败')
                //}
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.con {
    margin-top: 40px;
    margin-bottom: 60px;

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

        #icon-gear {
            vertical-align: middle;
            display: table-cell;
            span {
                font-size: 30px;
                font-weight: bold;
                display: block;
                margin-top: -35px;
            }
        }
    }

    .main {
        .mainBcg {
            background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F0731%2Fbizhi-0731-7777.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041598&t=e84feb81bb0122c32055de4a4a20d631);
            background-size: 100% 100%;
            height: 300px;
            width: 412px;
            filter: blur(1px);
            border: .5 solid #aaa;
        }

        .mainB {
            background-color: #FCF5F0;

            .mainInfo {
                height: 260px;
                width: 350px;
                position: relative;
                border: .5 solid rgb(142, 140, 140);
                border-radius: 15px;
                background-color: snow;
                margin: -150px 0 0 30px;

                ul {
                    li {
                        padding-top: 10px;
                        height: 70px;

                        .mui-icon-extra {
                            color: black;
                            font-size: 35px;
                            float: left;
                        }
                        div{
                            margin-left: 40px;
                            .mainInfoT {
                            font-size: 15px;
                            color: #66646C;
                        }

                        .mainInfoN {
                            font-size: 16px;
                        }
                        }

                        
                    }
                }
            }

            .mainInfo2 {
                height: 260px;
                width: 350px;
                border: .5 solid #aaa;
                background-color: #E8CFB9;
                border-radius: 15px;
                margin: 25px 0 50px 30px;

                img {
                    height: 135px;
                    width: 135px;
                    margin: 25px 0 0 110px;
                    border-radius: 50%;
                    border: 5px solid snow;
                }

                .mainInfo2name {
                    display: block;
                    font-size: 20px;
                    font-weight: 600;
                    text-align: center;
                    margin-top: 10px;

                }
            }
        }

    }
}
</style> 
