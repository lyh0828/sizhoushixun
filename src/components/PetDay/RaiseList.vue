<!--
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-20 20:02:13
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-06-27 19:53:38
 * @FilePath: \sizhoushixun\src\components\PetDay\RaiseList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div class="con">
        <div class="top">
            <input type="search" class="mui-input-clear" placeholder="请输入小院所在城市或小院名称">
        </div>
        <div class="main">
            <ul>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_6.png">
                        <p class="mainTitle">哈比的猫小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：8</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_3.png">
                        <p class="mainTitle">安妮流浪毛孩小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：35</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_7.png">
                        <p class="mainTitle">黄山毛娃娃之家</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：11</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_1.png">
                        <p class="mainTitle">烟台菩提善缘</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：0</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_2.png">
                        <p class="mainTitle">天水丑丑妈救助小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：6</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_4.png">
                        <p class="mainTitle">幸运萌宠爱心小屋</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：15</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_5.png">
                        <p class="mainTitle">饱宝狗🐶小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：12</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_9.png">
                        <p class="mainTitle">无言的爱心小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：30</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_8.png">
                        <p class="mainTitle">滨州王王的猫狗小院</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：40</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/raiselist/raiseinfo">
                        <img src="https://adopt.wozhua.net/images/img_11.png">
                        <p class="mainTitle">项城流浪狗救助</p>
                        <div>
                            <span class="mainM">￥9.9</span>
                            <span class="mainN">剩余：22</span>
                        </div>
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
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style  lang="scss" scoped>
.con {
    margin-top: 40px;
    .top {
        margin: 50px 10px 10px 10px;

        input {
            border-radius: 10px;
            height: 45px;
            background-color: snow;
            margin-bottom: -8px;
        }
    }

    .main {
        padding-bottom: 50px;

        ul {
            padding: 0;
            margin: 0;

            li {
                list-style: none;
                float: left;
                width: 47%;
                border-radius: 10px;
                background-color: snow;
                margin: 5px -3px 0 9px;
                    img {
                        margin-left: 10px;

                    }

                    .mainTitle {
                        margin: 11px 0 30px 5px;
                        font-size: 17px;
                        color: black;
                    }
                    div{ 
                        width: 100%;
                        padding-bottom: 30px;
                        .mainM{ 
                            display:block;
                            color: green;
                            float: left;
                            margin-left: 8px;
                            
                        }
                        .mainN{
                            display:block;
                            color: black;
                            float: right;
                            margin-right: 8px;
                        }
                    }
                
            }
        }
    }
}
</style>