<template>
    <div class="con">
        <div class="top">
            <img src="../../images/logo.jpg">
            <span class="topFont">宠物日常</span>
            <a class="iconSearch"><span class="mui-icon mui-icon-search"></span></a>
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
                                <span class="mainInfoN">女</span>
                            </div>

                        </li>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-grech"></span>
                            <div>
                                <span class="mainInfoT">年龄:</span>
                                <br>
                                <span class="mainInfoN">18</span>
                            </div>

                        </li>
                        <li>
                            <span class="mui-icon-extra mui-icon-extra-custom"></span>
                            <div>
                                <span class="mainInfoT">简介:</span>
                                <br>
                                <span class="mainInfoN">这是我的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
                            </div>

                        </li>
                    </ul>
                </div>
                <div class="mainInfo2">
                    <img
                        src="../../images/petday1.jpg">
                    <br>
                    <span class="mainInfo2name">昵称</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
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