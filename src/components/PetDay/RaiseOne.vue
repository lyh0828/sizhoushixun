<!--
 * @Author: caoYaNan 2419612936@qq.com
 * @Date: 2022-06-28 07:18:27
 * @LastEditors: caoYaNan 2419612936@qq.com
 * @LastEditTime: 2022-06-28 15:53:45
 * @FilePath: \sizhoushixun\src\components\PetDay\RaiseOne.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div class="con">
        <div>
            <p class="mui-progressbar mui-progressbar-infinite mui-progressbar-warning"></p>
        </div>
        <div class="main">
            <div><img src="https://adopt.wozhua.net/images/box_top.gif"></div>
            <div class="mainInfo">
                <p class="mainInfoT">此为“随机领养”模式，享受首周9.9元的体验价；还可以“指定领养”，找到你所喜欢的宠物，专门“领养它”。</p>
                <p>
                    <span class="mainInfoP">￥ 9.9</span>
                    <span class="mainInfoS">x1</span>
                </p>
            </div>
        </div>
        <div class="more">
            <p class="moreL">订单备注</p>
            <input type="text" class="mui-input-clear" placeholder="输入您的备注">
            <p class="moreHr">
                <span class="moreL">价格</span>
                <span class="moreR">￥9.90</span>
            </p>
            <p>
                <span class="moreL">运费</span>
                <span class="moreR">￥0.00</span>
            </p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">优惠券</a>
                    <div class="mui-collapse-content">
                        <p>暂无优惠券</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <span class="bottomA">总额</span>
            <span class="bottomB">￥9.90</span>
            <span class="bottomC">提交订单</span>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js';
export default {
    data() {
        return {};
    },
    created() {
    },
    methods: {
    },
};
</script>
<style lang="scss" scoped>
.con {
    margin-top: 50px;

    .main {
        height: 150px;
        background-color: white;

        img {
            height: 190px;
            width: 190px;
            margin: -35px -40px 0 -35px;
            float: left;
        }

        .mainInfo {
            padding-top: 20px;
            margin-left: -100px;

            .mainInfoT {
                font-size: 15px;
                color: black;
            }

            .mainInfoP {
                float: left;
                font-size: 20px;
                margin-top: 10px;
                color: #e04343;
            }

            .mainInfoS {
                float: right;
                margin: 10px 30px 0 0;
                font-size: 16px;
            }
        }
    }

    .more {
        background-color: white;
        height: 200px;
        margin-top: 5px;

        .moreL {
            padding: 15px 0 0 15px;
            font-size: 15px;
            color: #3a3a3a;
        }

        .mui-input-clear {
            border: none;
        }

        .moreHr {
            border-top: 0.2px solid #ededf1;
            padding-top: 15px;
        }

        .moreR {
            float: right;
            margin-right: 20px;
            font-size: 15px;
            color: #e04343;
        }

        .mui-navigate-right {
            font-size: 15px;
            color: #3a3a3a;
        }
    }

    .bottom {
        bottom: 52px;
        position: absolute;
        background-color: white;
        height: 60px;
        width: 100%;
        line-height: 60px;

        .bottomA {
            margin-left: 10px;
            font-weight: 500;
            font-size: 15px;
        }

        .bottomB {
            font-size: 19px;
            margin-left: 15px;
            color: #e04343;
            font-weight: bold;
        }

        .bottomC {
            height: 40px;
            background-color: #e04343;
            width: 120px;
            display: block;
            float: right;
            text-align: center;
            line-height: 40px;
            margin-top: 10px;
            margin-right: 10px;
            border-radius: 25px;
            color: white;
        }
    }
}
</style>