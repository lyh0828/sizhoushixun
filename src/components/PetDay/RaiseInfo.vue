
<template>
    <div class="con">
        <div class="top">
            <span>哈比的猫小院</span>
        </div>
        <div class="main">
            <div class="imgMain">
                <img src="https://adopt.wozhua.net/images/box_top.gif">
            </div>

            <div class="mainFew">
                <p>免费</p>
                <div>
                    <span>哈比的猫小院</span>
                    <router-link to="/home/raiselist/raiseinfo/raisemore">
                    <span class="mainFewTwo">指定领养</span></router-link>
                    <span class="mainFewOme">剩余8只</span>
                </div>
            </div>

            <div class="mainMuch">
                <p>点击“领养一只”，你即可获得本小院剩余宠物中的任意一只（此为“随机领养”模式，享受首周9.9元的体验价）；还可以“指定领养”，找到你所喜欢的宠物，专门“领养它”。</p>
            </div>
            <div class="mainCompany">
                <p class="pOne">机构信息</p>
                <p class="pTwo">
                    <a id="icon-location"><span class="mui-icon mui-icon-location"></span></a>
                    <span>山东省烟台市芝罘区</span>
                </p>
                <p class="pThree">
                    <a><span class="mui-icon-extra mui-icon-extra-cate"></span></a>
                    <span>哈比的猫小院</span>
                </p>
            </div>
            <div class="mainIntro">
                <div class="mainIntroTitle">
                    <p>
                        哈比的猫小院
                    </p>

                </div>
                <div class="mainIntroMain">
                    <p>
                        小院成立在2020.11.17，因为一车火腿肠猫，
                        有了如今的小院，前期一百多只，分流跟领养后，小院还剩52只，加上后期收养，小院现有60猫，一狗，往后的日子我们可能还会给更多的流浪猫孩子一个家，也希望更多的好心一起参与进来。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.con {
    margin-top: 40px;

    .top {
        span {
            position: fixed;
            top: 35px;
            background-color: snow;
            height: 50px;
            width: 100%;
            text-align: center;
            line-height: 50px;
        }


    }

    .main {
        margin-bottom: 60px;

        .imgMain {
            width: 100%;
            height: 300px;
            background-color: snow;

            img {
                height: 237px;
                width: 237px;
                background-color: snow;
                margin-left: 80px;
            }

        }

        .mainFew {
            height: 80px;
            background-color: #6FB1A5;

            p {
                font-size: 17px;
                color: white;
                padding: 10px 0 0 10px;
            }

            div {
                margin-top: 20px;
                margin-left: 10px;
                color: snow;
            }

            .mainFewOme {
                float: right;
                margin-right: 10px;

            }

            .mainFewTwo {
                float: right;
                margin-right: 10px;
                color: rgb(220, 222, 76);
            }
        }

        .mainMuch {
            background-color: snow;
            margin-top: 10px;

            p {
                padding: 20px 10px 20px 10px;
                color: black;
                font-size: 15px;
                line-height: 30px;

            }
        }

        .mainCompany {
            background-color: snow;
            height: 100px;

            .mui-icon-location {
                font-size: 15px;
                color: #6FB1A5;
            }

            .mui-icon-extra-cate {
                font-size: 15px;
                color: #6FB1A5;
            }

            .pOne {
                color: black;
                margin: 0px 0 5px 20px;
                padding-top: 15px;

            }

            .pTwo {
                margin-left: 20px;
                color: #6FB1A5;
            }

            .pThree {
                margin: -10px 0 30px 20px;
            }
        }

        .mainIntro {
            margin-top: 10px;
            padding-top: 30px;
            background-color: snow;
            height: 100%;

            .mainIntroTitle {
                width: 90%;
                background-color: #EBF5F4;
                margin: auto;
                border-radius: 7px;

                p {
                    color: #6FB1A5;
                    font-size: 18px;
                    height: 37px;
                    line-height: 30px;
                    text-align: center;
                }

            }

            .mainIntroMain {
                margin: 500px 0 10px 50px;
                height: 100%;
                width: 90%;
                background-color: #EBF5F4;
                margin: auto;
                border-radius: 7px;

                p {
                    font-size: 15px;
                    text-align: center;
                    color: #6FB1A5;
                }
            }
        }

    }

    .bottom {
        position: fixed;
        top: 630px;
        height: 55px;
        width: 100%;
        border-top: 2px solid #6FB1A5;
        line-height: 55px;
        background-color: #EFEFF4;

        .bottomA {
            margin-left: 10px;
            color: #6FB1A5;
        }

        .bottomB {
            display: block;
            float: right;
            width: 100px;
            background-color: #6FB1A5;
            height: 100%;
            color: snow;
            text-align: center;
        }
    }
}
</style>