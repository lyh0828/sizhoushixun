
<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <a class="iconSearch"><span class="mui-icon mui-icon-search"></span></a>
        </div>
        <div class="main">
            <img class="imgMain"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F0731%2Fbizhi-0731-7777.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041598&t=e84feb81bb0122c32055de4a4a20d631">
            <div class="mainInfo">
                <p class="mainInfoT">标题</p>
                <p class="mainInfoM">这是一个长长的详情</p>
                <div>
                    <a class="iconTime"><span class="mui-icon-extra mui-icon-extra-outline">三小时前 </span></a>
                    <a id="icon-person" class="iconPeople"><span class="mui-icon mui-icon-person">9人看过</span></a>
                </div>
                <router-link to="/perhome" class="mainInfoPic" >
                        <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F0731%2Fbizhi-0731-7777.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041598&t=e84feb81bb0122c32055de4a4a20d631">
                    <div>昵称</div>
                </router-link>
                <hr>
                <a class="iconD">
                    <span class="mui-icon-extra mui-icon-extra-cate"></span>
                    <span class="iconDPing">欢迎您的评论</span>
                </a>
                <div class="mui-input-row" style="margin: 10px 5px 5px 5px;">
                    <textarea id="textarea" rows="5" placeholder="在这里留下您的评论" style=" border-radius: 30px;"></textarea>
                </div>
                <router-link to="">
                    <button id="ok" class="mint-button mint-button--primary mint-button--normal">
                        <label class="mint-button-text">确定</label>
                    </button>
                </router-link>
                
                <button id="cancle" class="mint-button mint-button--default mint-button--normal"><label
                        class="mint-button-text">取消</label>
                </button>

            </div>
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
        margin-bottom: 60px;

        .imgMain {
            width: 400px;
            border-radius: 15px 15px 0 0;
            margin: 30px 0 0 5px;
            box-shadow: 1px 0px 0px 0px #aaa;
        }

        .mainInfo {
            background-color: snow;
            height: 100%;

            .mainInfoT {
                font-size: 25px;
                padding: 20px 0 10px 17px;
                color: black;
                font-weight: 100px;
            }

            .mainInfoM {
                margin: -10px 0 10px 17px;
            }

            .iconTime {
                color: rgb(94, 94, 94);
                margin: 0 220px 0 20px;

                span {
                    font-size: 15px;
                }

            }

            .iconPeople {
                color: rgb(94, 94, 94);

                span {
                    font-size: 15px;
                }
            }

            .mainInfoPic {
                height: 80px;
                display: block;

                img {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    margin: 20px 20px 0 10px;

                }

                div {
                    color: black;
                    font-size: 20px;
                    float: right;
                    margin-right: 292px;
                    margin-top: 36px;
                }
            }

            hr {
                width: 380px;
                border: .3px solid rgb(237, 232, 232);
            }

            .iconD {
                .mui-icon-extra-cate {
                    color: rgb(123, 123, 123);
                    font-size: 30px;
                    margin: 10px 0px 0 10px;
                }

                .iconDPing {
                    padding-bottom: -20px;
                    font-size: 10px;
                    color: rgb(123, 123, 123);
                }
            }
            #ok{
                margin: 0 20px 5px 20px;
                border-radius: 35px;
                width: 80px;
            }
            #cancle{
                margin: 0 20px 5px 20px;
                border-radius: 35px;
                border: 2px solid rgb(35, 34, 34);
                width: 80px;

            }
        }
    }
}
</style>